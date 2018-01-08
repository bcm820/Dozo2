
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Object = Schema.ObjectId;

const TaskSchema = new Schema({
    
    title: { type: String, required: [true] },
    description: { type: String },
    details: { type: String },
    priority: { type: Number, enum: [1, 2, 3] },
    estTime: { type: Number },

    creator: { type: Object, ref: 'User' },
    contributor: { type: Object, ref: 'User' },

    // managers can create, but not assign
    // leads can create and assign contributors
    // users can create and it will assign themselves
    
}, {
    timestamps: true,
    usePushEach: true,
    toObject: {virtuals:true},
    toJSON: {virtuals:true}
});

mongoose.model('Task', TaskSchema);