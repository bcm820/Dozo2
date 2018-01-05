
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Object = Schema.ObjectId;

const LaneSchema = new Schema({
    
    title: { type: String, required: [true], minlength: [2] },
    task_ids: [{ type: Object }],
    // project: { type: Object, ref: 'Project' }
    
}, {
    timestamps:true,
    usePushEach:true,
    toObject: {virtuals:true},
    toJSON: {virtuals:true}
});

LaneSchema.virtual('tasks', {
    ref: 'Task',
    localField: 'task_ids',
    foreignField: '_id'
});

mongoose.model('Lane', LaneSchema);