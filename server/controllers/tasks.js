
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
            lane.project = project._id;
            lane.save()
            .then(lane => {
                project.grid.push(lane._id);
                project.save()
                .then(project => {
                    res.json(sendMsg(true, `Lane "${lane.title}" created.`));
                })
                .catch(err => res.json(sendMsg(false, `Error: Input invalid.`)));
            })
            .catch(err => res.json(sendMsg(false, `Error: Input invalid.`)));
        });
    },

    // lookup lane
    lookupLane(req, res){
        Lane.findById(req.params.id)
        .then(lane => res.json(lane));
    },

    // update lane info
    updateLane(req, res){
        Lane.findByIdAndUpdate(req.params.id, req.body,
        {runValidators:true, new:true, context: 'query'})
        .then(lane => {
            res.json(sendMsg(true, `Lane "${lane.title}" updated.`));
        })
    },

    // update lane orders
    updateLaneOrder(req, res){
        Lane.findById(req.params.id)
        .then(lane => {
            lane.tasks = req.body;
            lane.save()
            .then(lane => res.json(sendMsg(true, `"${lane.title}" order updated.`)));
        })
    },

    // remove lane
    removeLane(req, res){
        Lane.findByIdAndRemove(req.params.id)
        .then(lane => {
            console.log(`Lane "${lane.title}" deleted.`);
            res.json(true);
        })
    },

    // create task for lane
    createTask(req, res){
        Lane.findById(req.params.id)
        .populate('tasks')
        .then(lane => {
            const task = new Task(req.body);
            task.project = lane.project;
            lane.tasks.push(task);
            lane.save()
            .then(lane => {
                task.save()
                .then(task => {
                    res.json(sendMsg(true, `Task "${task.title}" created.`));
                })
                .catch(err => res.json(sendMsg(false, `Error: Unable to save task.`)));
            })
            .catch(err => res.json(sendMsg(false, `Error: Unable to save lane.`)));
        });
    },

    // lookup detailed task info
    lookupTask(req, res){
        Task.findById(req.params.id)
        .then(task => res.json(task));
    },
    
    // update task info
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