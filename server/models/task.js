
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Object = Schema.ObjectId;
const shortid = require('shortid');

const TaskSchema = new Schema({
    
    id: { type: String, default: shortid.generate },

    // Create
    title: { type: String, required: [true] },
    description: { type: String },
    details: { type: String },
    startDate: { type: Date },
    targetDate: { type: Date },

    // Update
    endDate: { type: Date },

    contributor: {
        type: Object, ref: 'User',
        $through: 'tasks',
    },

    project: {
        type: Object, ref: 'Project',
        $through: 'tasks',
    },

    lane: {
        type: Object, ref: 'Lane',
        $through: 'tasks',
    },
    
}, {timestamps:true, usePushEach:true});

// import for cascading relations
const cascade = require('cascading-relations');
TaskSchema.plugin(cascade);

mongoose.model('Task', TaskSchema);