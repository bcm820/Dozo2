
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Object = Schema.ObjectId;

const CategorySchema = new Schema({
    title: { type: String, required: [true] },
    description: { type: String },
    avgDuration: { type: Number }, // in days

    // associations
    projects: [{ type: Object, ref: 'Project' }],
    tasks: [{ type: Object, ref: 'Task' }]
    
}, {timestamps: true});

mongoose.model('Category', CategorySchema);