
const mongoose = require('mongoose');
const Task = mongoose.model('Task');
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
        - Build out task status
        - Build out events
    */
    
    // view all tasks
    list(req, res){
        Task.find({}).sort({end_date:desc})
        .populate('member')
        .populate('events')
        .then(list => res.json(list));
    },
    
    // task lookup
    lookup(req, res){
        Task.findById(req.param)
        .populate('project')
        .populate('member')
        .populate('events')
        .then(task => res.json(task))
    },

    // create task
    create(req, res){
        const task = new Task(req.body);
        task.cascadeSave()
        .then(task => res.json(true))
        .catch(err => res.json(listErrors(err)));
    },
    
    // assign member to task
    assign(req, res){
        Task.findById(req.param, (err, task) => {
            Profile.findById(req.body._id, (err, profile) => {
                task.members.push(profile);
                task.cascadeSave().exec;
                profile.tasks.push(task);
                profile.cascadeSave().exec;
            })
        });
    },

    // unassign member from task
    unassign(req, res){
        Task.findById(req.param, (err, task) => {
            Profile.findById(req.body._id, (err, profile) => {
                task.members.id(profile._id).remove();
                task.cascadeSave().exec;
                profile.tasks.id(task._id).remove();
                profile.cascadeSave().exec;
            })
        });
    },

    // delete project
    remove(req, res){
        Task.findByIdAndRemove(req.param).exec();
        res.json(true);
    }
    
}