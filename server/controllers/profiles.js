
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
    
    // view all users
    listUsers(req, res){
        User.find({}, {_pw:0, __v:0}).sort({last:1})
        .then(list => res.json(list));
    },

    // view all users
    listLeads(req, res){
        Profile.find({type:'lead'})
        .then(list => res.json(list));
    },

    // view all users
    listMembers(req, res){
        Profile.find({type:'member'})
        .then(list => res.json(list));
    },

    // limited user lookup
    lookupUser(req, res){
        User.findById(req.param, {_pw:0, __v:0})
        .then(user => res.json(user))
    },

    // limited profile lookup
    lookupProfile(req, res){
        Profile.findById(req.param)
        .then(profile => res.json(profile))
    },
    
    // full user lookup
    lookupFull(req, res){
        User.findById(req.param, {_pw:0, __v:0})
        .populate('member_profile')
        .populate('lead_profile')
        .then(user => res.json(user))
    },
    
    // manager to assign lead/member profile to user
    // on front-end, only give option if not yet member/lead
    assign(req, res){
        User.findById(req.param, (err, user) => {
        // on front-end, determine type (lead/member)
            let profile = new Profile(req.body);
            let infoKey = `${profile.type}_info`;
            let profileKey = `${profile.type}_profile`
            // use bracket notation to set proper key/value pairs
            profile[infoKey] = user._id;
            profile.cascadeSave()
            .then(result => {
                user[profileKey] = profile._id;
                user.cascadeSave()
                .then(user => {
                    console.log(`${user.name} assigned ${profile.type} profile`)
                    res.json(true);
                });
            });
        });
    },

    addNotes(req, res){
        Profile.findById(req.param)
        .then(profile => {
            // on front-end, store in {notes} key
            profile.notes = req.body.notes;
            profile.cascadeSave()
            .then(profile => res.json(profile))
            .catch(err => res.json(listErrors(err)));
        })
    },

    remove(req, res){
        Profile.findByIdAndRemove(req.param)
        .then(result => {
            console.log(`PROFILES: Profile deleted`)
            res.json(true);
        })
    }
    
}