
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
    start_date: { type: Date },
    target_date: { type: Date },

    // Update
    end_date: { type: Date },
    time: { type: Number },

    // labels
    member: { type: String },
    project: { type: String },
    lane: { type: String }
    
}, {timestamps:true, usePushEach:true});

// import for cascading relations
const cascade = require('cascading-relations');
TaskSchema.plugin(cascade);

mongoose.model('Task', TaskSchema);