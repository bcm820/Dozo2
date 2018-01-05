
const mongoose = require('mongoose');
const Project = mongoose.model('Project');
const User = mongoose.model('User');
const Lane = mongoose.model('Lane');
const Task = mongoose.model('Task');

function sendMsg(status, msg){
    return {
        status: status,
        msg: msg
    }
}

module.exports = {

    // create lane for project
    createLane(req, res){
        Project.findById(req.params.id)
        .then(project => {
            const lane = new Lane(req.body);
            lane.save()
            .then(lane => {
                project.grid_ids.push(lane._id);
                project.save()
                .then(project => {
                    res.json(sendMsg(true, `"${lane.title}" created.`));
                })
            })
            .catch(err => res.json(sendMsg(false, `Error: Lane heading must be at least 2 characters.`)));
        });
    },

    // update lane info
    updateLane(req, res){
        Lane.findByIdAndUpdate(req.params.id, req.body,
        {runValidators:true, new:true, context: 'query'})
        .then(lane => {
            res.json(sendMsg(true, `"${lane.title}" updated.`));
        })
    },

    // update task order in lane
    updateLaneTasks(req, res){
        Lane.findById(req.params.id)
        .then(lane => {
            lane.task_ids = req.body;
            lane.save()
            .then(lane => res.json(true));
        })
    },

    // remove lane
    removeLane(req, res){
        Lane.findByIdAndRemove(req.params.id)
        .then(lane => res.json(true));
    },

    // create task for lane
    createTask(req, res){
        Lane.findById(req.params.id)
        .then(lane => {
            if(req.body.contributor === '') req.body.contributor = undefined;
            const task = new Task(req.body);
            task.creator = req.session.uid;
            task.save()
            .then(task => {
                lane.task_ids.push(task._id);
                lane.save()
                .then(lane => res.json(sendMsg(true, `Task "${task.title}" created.`)));
            })
            .catch(err => res.json(sendMsg(false, `Error: One or more fields invalid.`)));
        });
    },
    
    // update task info
    // include contributor ID
    updateTask(req, res){
        Task.findByIdAndUpdate(req.params.id, req.body,
            {runValidators: true, new:true, context: 'query'})
        .then(task => {
            res.json(sendMsg(true, `Task "${task.title}" updated.`));
        })
    },

    // remove task
    removeTask(req, res){
        Task.findByIdAndRemove(req.params.id)
        .then(task => res.json(true));
    }
    
}