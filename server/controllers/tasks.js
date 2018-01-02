
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
            // using cascading-relations mod, assigning project to lane
            // will save lane in project's related field
            let lane = new Lane(req.body);
            lane._related = {};
            lane._related.project = project;
            lane.cascadeSave()
            .then(lane => {
                res.json(sendMsg(true, `Lane "${lane.title}" created.`));
            })
            .catch(err => res.json(sendMsg(false, `Error: Input invalid.`)));
        });
    },

    // create task for lane
    createTask(req, res){
        Project.findById(req.params.id)
        .then(project => {
            let task = new Task(req.body);
            task.project = project._id;
            project.toDo.push(task);
            project.cascadeSave()
            .then(project => {
                res.json(sendMsg(true, `Task "${task.title}" created.`));
            })
            .catch(err => res.json(sendMsg(false, `Error: Input invalid.`)));
        });
    },

    // lookup detailed task info
    lookupTask(req, res){
        Task.findById(req.params.id)
        .then(task => res.json(task));
    },
    
    // update task info
    // update its lane
    // update its user
    updateTask(req, res){
        Task.findByIdAndUpdate(req.params.id, req.body,
            {runValidators:true, new:true, context: 'query'})
        .then(task => {
            console.log(`Task "${task.title}" updated.`);
            res.json(true);
        })
    },

    // remove task
    removeTask(req, res){
        Task.findByIdAndRemove(req.params.id)
        .then(task => {
            console.log(`Task "${task.title}" deleted.`);
            res.json(true);
        })
    },

    // lookup lane
    lookupLane(req, res){
        Lane.findById(req.params.id)
        .then(lane => res.json(lane));
    },

    // update task info
    updateLane(req, res){
        Lane.findByIdAndUpdate(req.params.id, req.body,
            {runValidators:true, new:true, context: 'query'})
        .then(task => {
            console.log(`Lane "${lane.title}" updated.`);
            res.json(true);
        })
    },

    // remove task
    removeLane(req, res){
        Lane.findByIdAndRemove(req.params.id)
        .then(task => {
            console.log(`Lane "${lane.title}" deleted.`);
            res.json(true);
        })
    },


    // REFACTOR ASSIGNMENT????
    
    // assign lead/member profile to task
    assign(req, res){
        Task.findById(req.params.task)
        .then(task => {
            User.findById(req.params.profile)
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
    
    // unassign lead/member profile from task
    unassign(req, res){
        Task.findById(req.params.task)
        .then(task => {
            task.member = undefined;
            task.save()
            .then(task => console.log(`User removed from "${task.title}."`))
        });
        User.findById(req.params.profile)
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