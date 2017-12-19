
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Object = Schema.ObjectId;

const TaskSchema = new Schema({
    title: { type: String, required: [true] },
    description: { type: String },
    targetDuration: { type: Number, required:[true] }, // in days
    actualDuration: { type: Number, required:[true] },
    start_date: { type: Date },
    end_date: { type: Date },

    // associations
    category: { type: Object, ref: 'Category' },
    project: { type: Object, ref: 'Project' },
    lead: { type: Object, ref: 'Profile' },
    member: { type: Object, ref: 'Profile' }
    
}, {timestamps: true});

mongoose.model('Task', TaskSchema);