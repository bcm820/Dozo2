
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
        - Build out project status
        - Quantify as % done
        - Build out events
    */
    
    // view all projects
    list(req, res){
        Project.find({}).sort({end_date:desc})
        .populate('events')
        .then(list => res.json(list));
    },
    
    // project lookup
    lookup(req, res){
        Project.findById(req.param)
        .populate('members')
        .populate('tasks')
        .populate('events')
        .then(project => res.json(project))
    },

    // create project
    create(req, res){
        const project = new Project(req.body);
        project.cascadeSave()
        .then(project => res.json(true))
        .catch(err => res.json(listErrors(err)));
    },
    
    // assign member to project
    assign(req, res){
        Project.findById(req.param, (err, project) => {
            Profile.findById(req.body._id, (err, profile) => {
                project.members.push(profile);
                project.cascadeSave().exec;
                profile.projects.push(project);
                profile.cascadeSave().exec;
            })
        });
    },

    // unassign member from project
    unassign(req, res){
        Project.findById(req.param, (err, project) => {
            Profile.findById(req.body._id, (err, profile) => {
                project.members.id(profile._id).remove();
                project.cascadeSave().exec;
                profile.projects.id(project._id).remove();
                profile.cascadeSave().exec;
            })
        });
    },

    // delete project
    remove(req, res){
        Project.findByIdAndRemove(req.param).exec();
        res.json(true);
    }
    
}