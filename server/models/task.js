
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Object = Schema.ObjectId;

const TaskSchema = new Schema({
    
    title: { type: String, required: [true] },
    description: { type: String },
    details: { type: String },
    lane: { type: Object, ref: 'Lane' },
    project: { type: Object, ref: 'Project' },
    contributor: { type: Object, ref: 'User' },

    // managers can create, but not assign
    // leads can create and assign contributors
    // users can create and it will assign themselves
    
}, {timestamps:true, usePushEach:true});

mongoose.model('Task', TaskSchema);