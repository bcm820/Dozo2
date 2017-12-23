
const mongoose = require('mongoose');
const Project = mongoose.model('Project');
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
    
    // project lookup
    lookup(req, res){
        Project.findById(req.params.id, {__v:0})
        .populate('members', {name:1})
        .populate('tasks', {title:1})
        .then(user => res.json(user))
    },
    
    /*
        Manager Routes
    */
    
    // view all projects
    list(req, res){
        Project.find({}).sort({target_date:-1})
        .then(list => res.json(list));
    },

    // create project
    create(req, res){
        let project = new Project(req.body);
        // add manager, but don't add object in user acct
        project.manager = req.session.uid;
        project.save()
        .then(project => {
            console.log(`Project "${project.title}" created.`)
            res.json(true);
        })
        .catch(err => res.json(listErrors(err)));
    },

    // update project info
    update(req, res){
        Project.findByIdAndUpdate(req.params.id, req.body,
            {runValidators:true, new:true, context: 'query'})
        .then(project => {
            console.log(`"${project.title}" updated.`);
            res.json(true);
        })
    },
    
    // assign lead/member profile to project
    assign(req, res){
        Project.findById(req.params.project)
        .then(project => {
            Profile.findById(req.params.profile)
            .then(profile => {
                profile.projects.push(project);
                profile.save()
                .then(profile => {
                    project.members.push(profile);
                    project.save()
                    .then(project => {
                        console.log(`Profile assigned to "${project.title}."`);
                        res.json(true)
                    })
                    .catch(err => res.json(listErrors(err)));
                })
                .catch(err => res.json(listErrors(err)));
            });
        });
    },
    
    // unassign lead/member profile from project
    unassign(req, res){
        Project.findById(req.params.project)
        .then(project => {
            project.members.pull(req.params.profile);
            project.save()
            .then(project => console.log(`Profile removed from "${project.title}."`))
        });
        Profile.findById(req.params.profile)
        .then(profile => {
            profile.projects.pull(req.params.project);
            profile.save()
            .then(profile => console.log(`Project removed from ${profile.name}'s list.`))
        })
        res.json(true);
    },

    // delete project
    remove(req, res){
        Project.findByIdAndRemove(req.params.id)
        .then(project => {
            console.log(`Project "${project.title}" deleted.`)
            res.json(true);
        })
    }
    
}