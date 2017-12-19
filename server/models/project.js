
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Object = Schema.ObjectId;

const ProjectSchema = new Schema({
    title: { type: String, required: [true] },
    description: { type: String },
    targetDuration: { type: Number, required:[true] }, // in days
    actualDuration: { type: Number, required:[true] },
    start_date: { type: Date },
    end_date: { type: Date },

    // associations
    category: { type: Object, ref: 'Category' },
    team: { type: Object, ref: 'Team' },
    manager: { type: Object, ref: 'User' },
    contributors: [{ type: Object, ref: 'User' }],
    tasks: [{ type: Object, ref: 'Task' }]
    
}, {timestamps: true});

mongoose.model('Project', ProjectSchema);