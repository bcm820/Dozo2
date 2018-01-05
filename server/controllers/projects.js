
const mongoose = require('mongoose');
const Project = mongoose.model('Project');
const User = mongoose.model('User');
const Lane = mongoose.model('Lane');

function sendMsg(status, msg){
    return {
        status: status,
        msg: msg
    }
}

module.exports = {
    
    getUserProjects(req, res){
        User.findById(req.session.uid, {project_ids:1})
        .populate('projects')
        .then(projects => res.json(projects))
    },

    create(req, res){
        User.findById(req.session.uid)
        .then(user => {
            const project = new Project(req.body);
            user.project_ids.push(project._id);
            project.creator = user._id;
            project.contributor_ids = [user._id];
            const lane = new Lane({title: "To Do"});
            project.grid_ids = [lane._id];
            user.save()
            .then(user => {
                project.save()
                .then(project => {
                    lane.save()
                    .then(lane => {
                        res.json(sendMsg(true, `"${project.title}" created.`));
                    })
                    .catch(err => console.log(err));
                })
            })
        })
    },

    updateUserProjects(req, res){
        User.findById(req.session.uid)
        .then(user => {
            user.project_ids = req.body;
            user.save()
            .then(user => {
                res.json(sendMsg(true, `Saving changes...`));
            })
        })
    },

    lookup(req, res){
        Project.findById(req.params.id)
        .populate('creator')
        .populate({path: 'contributors', select: ['first', 'last', 'name', '_id'] })
        .populate({ path: 'grid',
            populate: { path: 'tasks',
                populate: [
                    { path: 'creator', select: ['first', 'last', 'name', '_id'] },
                    { path: 'contributor', select: ['first', 'last', 'name', '_id'] }
                ]
            }
        })
        .then(project => res.json(project));
    },

    // update project info, but not contributors
    update(req, res){
        Project.findByIdAndUpdate(req.params.id, req.body,
            {runValidators:true, new:true, context: 'query'})
        .then(project => {
            res.json(sendMsg(true, `"${project.title}" updated.`));
        })
    },

    // update contributors
    assign(req, res){
        Project.findById(req.params.id)
        .then(project => {
            project.contributor_ids = req.body;
            project.save()
            .then(lane => res.json(true));
        })
    },

    updateGrid(req, res){
        Project.findById(req.params.id)
        .then(project => {
            project.grid_ids = req.body;
            project.save()
            .then(lane => res.json(true));
        })
    },

    // delete project
    remove(req, res){
        Project.findByIdAndRemove(req.params.id)
        .then(project => {
            res.json(sendMsg(true, `Project "${project.title}" deleted.`));
        })
    },
    
}