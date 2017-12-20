
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Profile = mongoose.model('Profile');

function listErrors(err){
    let list = [];
    for(let x in err.errors){
        list.push(err.errors[x].message);
    }
    return list.reverse();
}

module.exports = {

    // get full account info
    getUser(req, res){
        User.findById(req.session.uid, {_pw:0, __v:0})
        .populate('profiles')
        .then(user => res.json(user))
    },

    // update user account info
    updateUser(req, res){
        User.findByIdAndUpdate(req.session.uid,
        req.body, {runValidators:true, context: 'query'})
        .then(user => res.json(true))
        .catch(err => res.json(listErrors(err)));
        // implement PW reset feature later
    },

    // user must enter PW to unregister
    unregister(req, res){
        User.findById(req.session.uid)
        .then(user => {
            user.checkPW(req.body._pw, (err, good) => {
                if(good){
                    user.remove().exec();
                    res.json(true);
                }
                else { res.json(false) }
            })
        });
    }
    
}