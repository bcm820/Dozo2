
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
    start_date: { type: Date },
    target_date: { type: Date },

    owner: { type: Object, ref: 'User' },
    controller: { type: Object, ref: 'User' },

    /*
        Managers create projects
        Controllers approve projects
        Leads can assign tasks in projects
    */

    // Assign
    lead: { type: Object, ref: 'User' },
    members: [{
        type: Object, ref: 'User',
        $through: 'projects',
        $cascadeDelete: true
    }],

    // Update
    status: {
        type: String,
        enum: ['pending', 'rejected', 'approved', 'in progress', 'completed']
    },
    end_date: { type: Date },
    time: { type: Number },

    // contains all lanes for a project
    grid: [{
        type: Object, ref: 'Lane',
        $through: 'project',
        $cascadeDelete: true
    }],
    // navigate via:
    // 'let lane = index'
    // 'let task = index'
    
}, {timestamps:true, usePushEach:true});

// import for cascading relations
const cascade = require('cascading-relations');
ProjectSchema.plugin(cascade);

mongoose.model('Project', ProjectSchema);