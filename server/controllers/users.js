
const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcryptjs');

function sendMsg(type, msg){
    return {
        type: type,
        msg: msg
    }
}

module.exports = {

    getUser(req, res){
        User.findById(req.session.uid, {_pw:0, __v:0})
        .then(user => res.json(user))
    },

    // update user account info
    // user must enter their current PW again
    updateUser(req, res){
        User.findById(req.session.uid)
        .then(user => {
            // if new email entered, must still be unique
            if(req.body.email !== user.email){
                User.count({email:req.body.email})
                .then(count => {
                    if(count === 1)
                        res.json(sendMsg(false, 'Error: Email address already in use.'));
                })
            }
            // check PW prior to updating info
            user.checkPW(req.body._pw, (err, good) => {
                if(good){
                    // iterate through updates and set values to user obj
                    for(let x in req.body){
                        user[x] = req.body[x];
                    }
                    // hash password and discard pwconf
                    bcrypt.hash(user._pw, 10, (err, hashedPass) => {
                        user._pw = hashedPass;
                        if(user._pwconf) user._pwconf = undefined;
                        user.save()
                        .then(user => {
                            res.json(sendMsg(true, `Information updated. Thanks, ${user.first}!`));
                        })
                        .catch(err => res.json(sendMsg(false, 'Error: One or more fields invalid.')));
                    });
                } else {
                    res.json(sendMsg(false, `Error: You entered an invalid password.`))
                }
            })
        })
    },

    updatePW(req, res){
        User.findById(req.session.uid)
        .then(user => {
            user._pw = req.body._pw;
            bcrypt.hash(user._pw, 10, (err, hashedPass) => {
                user._pw = hashedPass;
                user.save()
                .then(user => {
                    res.json(sendMsg(true, `Password updated. Thanks, ${user.first}!`));
                })
            });
        });
    },

    // user must enter PW to unregister
    unregister(req, res){
        User.findById(req.session.uid)
        .then(user => {
            user.checkPW(req.body._pw, (err, good) => {
                if(good){
                    user.remove()
                    .then(result => {
                        res.json(sendMsg(true, `Account deleted. Thanks, ${user.first}!`));
                    })
                }
                else { res.json(sendMsg(false, `Error: You entered an invalid password.`)) }
            })
        });
    },

    // list all users
    list(req, res){
        User.find({}, {_pw:0, __v:0}).sort({last:1})
        .then(list => res.json(list));
    },
    
    // user lookup, for looking at their info
    lookup(req, res){
        User.findById(req.params.id, {_pw:0, __v:0})
        .populate('projects')
        .populate('tasks_contributed')
        .then(user => res.json(user))
    },

    // promote user to manager account
    promote(req, res){
        User.findById(req.params.id)
        .then(user => {
            user.isManager = true;
            user.save()
            .then(user => res.json(sendMsg(true, `${user.name} promoted to manager.`)));
        });
    }
    
}