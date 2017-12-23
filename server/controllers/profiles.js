
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
        User Routes
    */
    
    // limited user lookup
    lookupUser(req, res){
        User.findById(req.params.id, {_pw:0, __v:0})
        .then(user => res.json(user))
    },

    // limited profile lookup
    lookupProfile(req, res){
        Profile.findById(req.params.id, {notes:0, __v:0})
        .populate('tasks', {title:1})
        .populate('projects', {title:1})
        .then(profile => res.json(profile))
    },
    
    /*
        Manager Routes
    */
    
    // view all users
    listUsers(req, res){
        User.find({}, {_pw:0, __v:0}).sort({last:1})
        .then(list => res.json(list));
    },

    // view all users
    listLeads(req, res){
        Profile.find({type:'lead'}, {__v:0})
        .then(list => res.json(list));
    },

    // view all users
    listMembers(req, res){
        Profile.find({type:'member'}, {__v:0})
        .then(list => res.json(list));
    },
    
    // full user lookup
    lookupFull(req, res){
        User.findById(req.params.id, {_pw:0, __v:0})
        .populate('member_profile', {__v:0})
        .populate('lead_profile', {__v:0})
        .then(user => res.json(user))
    },
    
    // assign lead/member profile to user
    // on front-end, only give option if not yet member/lead
    assign(req, res){
        User.findById(req.params.id, (err, user) => {
        // on front-end, determine type (lead/member)
            let profile = new Profile(req.body);
            let profileKey = `${profile.type}_profile`
            // use bracket notation to set proper key/value pairs
            profile.account = user._id;
            profile.name = `${user.name}`
            profile.save()
            .then(profile => {
                user[profileKey] = profile._id;
                user.save()
                .then(user => {
                    console.log(`${user.name} assigned ${profile.type} profile.`)
                    res.json(true);
                });
            })
            .catch(err => res.json(listErrors(err)));
        });
    },

    // promote user to manager account
    promote(req, res){
        User.findById(req.params.id)
        .then(user => {
            user.isManager = true;
            user.save()
            .then(user => res.json(true));
        });
    },

    addNotes(req, res){
        Profile.findById(req.params.id)
        .then(profile => {
            profile.notes = req.body.notes;
            profile.save()
            .then(profile => res.json(profile))
            .catch(err => res.json(listErrors(err)));
        })
    },

    remove(req, res){
        Profile.findByIdAndRemove(req.params.id)
        .then(profile => {
            let profileKey = `${profile.type}_profile`
            User.findById(profile.account)
            .then(user => {
                user[profileKey] = undefined;
                user.save()
                .then(user => {
                    console.log(`${user.first}'s profile deleted.`)
                    res.json(true);
                })
            })
        })
    }
    
}