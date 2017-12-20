
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

    /*
        - Build out events
    */
    
    // view all users
    list(req, res){
        User.find({}, {_pw:0, __v:0}).sort({last:asc})
        .populate('profiles')
        .then(list => res.json(list));
    },

    // lookup a profile
    lookupFull(req, res){
        User.findById(req.param, {_pw:0, __v:0})
        .populate('profiles')
        .then(user => res.json(user))
    },
    
    // limited user lookup
    lookup(req, res){
        User.findById(req.param, {_pw:0, __v:0})
        .then(user => res.json(user))
    },
    
    // manager to assign lead/member profile to user
    assign(req, res){
        User.findById(req.param, (err, user) => {
        // on front-end, determine type (lead/member)
            let profile = new Profile(req.body);
            profile.info = user._id;
            profile.cascadeSave((err) => {
                if(err) res.json(listErrors(err));
                else {
                    user.profiles.push(profile);
                    user.cascadeSave((err) => {
                        return res.json(true);
                    });
                }
            });
        });
    },

    addNote(req, res){
        Profile.findById(req.param)
        .then(profile => {
            // on front-end, store in {note} key
            profile.note = req.body.note;
            profile.cascadeSave()
            .then(profile => res.json(profile))
            .catch(err => res.json(listErrors(err)));
        })
    },

    remove(req, res){
        Profile.findByIdAndRemove(req.param).exec();
        res.json(true);
    }
    
}