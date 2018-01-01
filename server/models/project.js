
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Object = Schema.ObjectId;
const shortid = require('shortid');

const ProjectSchema = new Schema({
    
    id: { type: String, default: shortid.generate },
    
    // Create
    title: { type: String, required: [true] },
    description: { type: String },
    details: { type: String },
    startDate: { type: Date },
    targetDate: { type: Date },

    /*
        Managers create projects
        Leads can assign tasks in projects
    */

    // Assign

    manager: {
        type: Object, ref: 'User',
        $through: 'projects'
    },

    lead: {
        type: Object, ref: 'User',
        $through: 'projects'
    },
    
    contributors: [{
        type: Object, ref: 'User',
        $through: 'projects'
    }],

    endDate: { type: Date },

    // contains all lanes for a project
    grid: [{
        type: Object, ref: 'Lane',
        $through: 'project',
        $cascadeDelete: true
    }],

    tasks: [{
        type: Object, ref: 'Task',
        $through: 'project',
        $cascadeDelete: true
    }]
    
}, {timestamps:true, usePushEach:true});

// import for cascading relations
const cascade = require('cascading-relations');
ProjectSchema.plugin(cascade);

mongoose.model('Project', ProjectSchema);