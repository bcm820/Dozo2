
const mongoose = require('mongoose');
const Project = mongoose.model('Project');
const User = mongoose.model('User');

function sendMsg(status, msg){
    return {
        status: status,
        msg: msg
    }
}

module.exports = {
    
    // project lookup
    lookup(req, res){
        Project.findById(req.params.id, {__v:0, grid:0})
        .populate('owner')
        .populate('controller')
        .populate('lead')
        .populate('members')
        .then(user => res.json(user));
    },

    // get full project grid
    getGrid(req, res){
        Project.findById(req.params.id, {grid:1})
        .populate({path:'grid', populate:{path:'tasks'}})
        .then(grid => res.json(grid));
    },
    
    // view all projects
    list(req, res){
        Project.find({}, {grid:0}).sort({target_date:-1})
        .then(list => res.json(list));
    },

    // create project
    create(req, res){
        let project = new Project(req.body);
        // add manager, but don't add object in user acct
        project.manager = req.session.uid;
        project.save()
        .then(project => {
            res.json(sendMsg(true, `"${project.title}" created.`));
        })
        .catch(err => console.log(err));
    },

    // update project info
    update(req, res){
        Project.findByIdAndUpdate(req.params.id, req.body,
            {runValidators:true, new:true, context: 'query'})
        .then(project => {
            res.json(sendMsg(true, `"${project.title}" updated.`));
        })
    },

    // delete project
    remove(req, res){
        Project.findByIdAndRemove(req.params.id)
        .then(project => {
            res.json(sendMsg(true, `Project "${project.title}" deleted.`));
        })
    },

    
    // REFACTOR ASSIGNMENT TO SELECT MANY FROM LIST AND ASSIGN
    
    // assign role to project
    assign(req, res){
        Project.findById(req.params.project)
        .then(project => {
            User.findById(req.params.user)
            .then(user => {
                user.projects.push(project);
                user.save()
                .then(user => {
                    project.members.push(user);
                    project.save()
                    .then(project => {
                        res.json(sendMsg(true, `Profile assigned to "${project.title}."`))
                    })
                    .catch(err => res.json(sendMsg(false, `Error: Input invalid.`)));
                })
                .catch(err => res.json(sendMsg(false, `Error: Input invalid.`)));
            });
        });
    },
    
    // unassign role from project
    unassign(req, res){
        Project.findById(req.params.project)
        .then(project => {
            project.members.pull(req.params.user);
            project.save()
            .then(project => console.log(`Profile removed from "${project.title}."`))
        });
        Profile.findById(req.params.user)
        .then(user => {
            user.projects.pull(req.params.project);
            user.save()
            .then(user => console.log(`Project removed from ${user.name}'s list.`))
        })
        res.json(sendMsg(true, `Profile removed from "${project.title}."`));
    },
    
}