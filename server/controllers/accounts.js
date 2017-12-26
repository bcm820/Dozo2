
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Profile = mongoose.model('Profile');
const bcrypt = require('bcrypt');

function sendMsg(type, msg){
    return {
        type: type,
        msg: msg
    }
}

module.exports = {

    // primary route to get user object
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
            // if 'isManager' is set, remove from user obj
            // if(user.hasOwnProperty('isManager')){
            //     user.isManager = undefined;
            // }
            // iterate through updates and set values to user obj
            for(let x in req.body){
                user[x] = req.body[x];
            }
            // hash password and discard pwconf
            bcrypt.hash(user._pw, 10, (err, hashedPass) => {
                user._pw = hashedPass;
                user._pwconf = undefined;
                user.save()
                .then(user => {
                    res.json(sendMsg(true, `Information updated. Thanks, ${user.first}!`));
                })
                .catch(err => res.json(sendMsg(false, 'One or more fields invalid.')));
            });
        })
    },

    // user must enter PW to unregister
    unregister(req, res){
        User.findById(req.session.uid)
        .then(user => {
            user.checkPW(req.body._pw, (err, good) => {
                if(good){
                    user.remove()
                    .then(result => {
                        console.log(`AUTH: ${user.name}'s account deleted`)
                        res.json(true);
                    })
                }
                else { res.json(false) }
            })
        });
    }
    
}