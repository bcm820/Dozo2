
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
    
    getUserProjects(req, res){
        User.findById(req.session.uid, {projects:1})
        .populate('projects')
        .then(user => res.json(user))
    },

    updateUserProjects(req, res){
        User.findById(req.session.uid)
        .then(user => {
            user._related = {};
            user._related.projects = req.body;
            user.cascadeSave()
            .then(user => {
                res.json(sendMsg(true, `Saving changes...`));
            })
            .catch(err => res.json(sendMsg(false, 'Unable to save changes...')));
        })
    },
    
    // project lookup
    lookup(req, res){
        Project.findById(req.params.id, {__v:0, grid:0})
        .populate('manager')
        .populate('lead')
        .populate('contributors')
        .then(user => res.json(user));
    },

    // get full project grid
    getGrid(req, res){
        Project.findById(req.params.id, {grid:1})
        .populate({path:'grid', populate:{path:'tasks'}})
        .then(grid => res.json(grid));
    },

    // get all tasks in one list
    getTasks(req, res){
        Project.findById(req.params.id)
        .populate('tasks')
        .then(tasks => res.json(tasks));
    },

    // assign users to project
    updateContributors(req, res){
        Project.findById(req.params.project)
        .then(project => {
            project._related = {};
            project._related.contributors = req.body; // pass in array of users
            project.cascadeSave()
            .then(project => {
                res.json(sendMsg(true, `"${project.title}" contributor list updated.`))
            })
            .catch(err => res.json(sendMsg(false, `Error: Input invalid.`)));
        });
    },
    
    // list all projects in database
    list(req, res){
        Project.find({}, {grid:0}).sort({target_date:-1})
        .then(list => res.json(list));
    },

    // create project
    create(req, res){
        User.findById(req.session.uid)
        .then(manager => {
            let project = new Project(req.body);
            project.manager = manager._id;
            project._related = {};
            project._related.manager = manager;
            project.cascadeSave()
            .then(project => {
                res.json(sendMsg(true, `"${project.title}" created.`));
            })
            .catch(err => console.log(err));
        })
    },

    // update project info
    update(req, res){
        Project.findByIdAndUpdate(req.params.id, req.body,
            {runValidators:true, new:true, context: 'query'})
        .then(project => {
            res.json(sendMsg(true, `"${project.title}" updated.`));
        })
    },

    // update grid

    // delete project
    remove(req, res){
        Project.findByIdAndRemove(req.params.id)
        .then(project => {
            res.json(sendMsg(true, `Project "${project.title}" deleted.`));
        })
    },
    
}