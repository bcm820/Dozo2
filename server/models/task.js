
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Object = Schema.ObjectId;

const TaskSchema = new Schema({
    
    title: { type: String, required: [true] },
    description: { type: String },
    details: { type: String },
    priority: { type: Number, enum: [1, 2, 3] }, // add later
    estTime: { type: Number }, // add later

    creator: { type: Object, ref: 'User' },
    contributor: { type: Object, ref: 'User' },
    
}, {
    timestamps: true,
    usePushEach: true,
    toObject: {virtuals:true},
    toJSON: {virtuals:true}
});

mongoose.model('Task', TaskSchema);