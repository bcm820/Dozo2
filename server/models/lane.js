
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Object = Schema.ObjectId;

const LaneSchema = new Schema({
    
    title: { type: String, required: [true] },
    project: { type: Object, ref: 'Project' },
    tasks: [{ type: Object, ref: 'Task' }],
    
}, {timestamps:true, usePushEach:true});

mongoose.model('Lane', LaneSchema);