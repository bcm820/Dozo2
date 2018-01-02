
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
    endDate: { type: Date },

    manager: { type: Object, ref: 'User' },
    lead: { type: Object, ref: 'User' },

    contributors: [{
        type: Object, ref: 'User',
        $through: 'projects'
    }],

    // contains all lanes except to-do
    grid: [{
        type: Object, ref: 'Lane',
        $through: 'project',
        $cascadeDelete: true
    }],
    
}, {timestamps:true, usePushEach:true});

// import for cascading relations
const cascade = require('cascading-relations');
ProjectSchema.plugin(cascade);

mongoose.model('Project', ProjectSchema);