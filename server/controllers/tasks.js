
const mongoose = require('mongoose');
const Project = mongoose.model('Project');
const User = mongoose.model('User');
const Task = mongoose.model('Task');

function sendMsg(status, msg){
    return {
        status: status,
        msg: msg
    }
}

module.exports = {

    // create task for lane
    createTask(req, res){
        Lane.findById(req.params.id)
        .then(lane => {
            let task = new Task(req.body);
            task._related = {};
            task.lane = lane._id;
            task._related.lane = lane;
            task.cascadeSave()
            .then(task => {
                res.json(sendMsg(true, `Task "${task.title}" created.`));
            })
            .catch(err => res.json(sendMsg(false, `Error: Input invalid.`)));
        });
    }, 

    // create lane for project
    createLane(req, res){
        Project.findById(req.params.id)
        .then(project => {
            let task = new Task(req.body);
            task._related = {};
            task.project = project._id;
            task._related.project = project;
            task.cascadeSave()
            .then(task => {
                console.log(`Task "${task.title}" created.`)
                res.json(true);
            })
            .catch(err => res.json(listErrors(err)));
        });
    },

    // lookup detailed task info
    lookup(req, res){
        Task.findById(req.params.id)
        .populate('member', {name:1})
        .then(task => res.json(task));
    },
    
    // update task info
    update(req, res){
        Task.findByIdAndUpdate(req.params.id, req.body,
            {runValidators:true, new:true, context: 'query'})
        .then(task => {
            console.log(`Task "${task.title}" updated.`);
            res.json(true);
        })
    },

    // remove task
    remove(req, res){
        Task.findByIdAndRemove(req.params.id)
        .then(task => {
            console.log(`Task "${task.title}" deleted.`);
            res.json(true);
        })
    },
    
    // assign lead/member profile to project
    assign(req, res){
        Task.findById(req.params.task)
        .then(task => {
            Profile.findById(req.params.profile)
            .then(profile => {
                profile.tasks.push(task);
                profile.save()
                .then(profile => {
                    task.member = profile;
                    task.save()
                    .then(task => {
                        console.log(`Task "${task.title}" assigned to ${profile.name}.`);
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
        Task.findById(req.params.task)
        .then(task => {
            task.member = undefined;
            task.save()
            .then(task => console.log(`Profile removed from "${task.title}."`))
        });
        Profile.findById(req.params.profile)
        .then(profile => {
            profile.tasks.pull(req.params.task);
            profile.save()
            .then(profile => console.log(`Task removed from ${profile.name}'s list.`))
        })
        res.json(true);
    },

    // filter by status
    listByStatus(req, res){
        Task.find({
            project: req.params.project,
            status: req.params.status
        }).sort({priority:-1})
        .then(list => res.json(list));
    },

    // filter by profile and status
    listFilter(req, res){
        Task.find({
            project: req.params.project,
            member: req.params.profile,
            status: req.params.status
        }).sort({priority:-1})
        .then(list => res.json(list));
    }
    
}