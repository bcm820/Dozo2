
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Object = Schema.ObjectId;

const ProjectSchema = new Schema({
    
    title: { type: String, required: [true] },
    description: { type: String, required: [true] },
    details: { type: String },
    startDate: { type: Date },
    targetDate: { type: Date },
    endDate: { type: Date },

    manager: { type: Object, ref: 'User' },
    lead: { type: Object, ref: 'User' },
    contributors: [{ type: Object, ref: 'User' }],
    grid: [{ type: Object, ref: 'Lane' }],

    // manager assigns lead and contributors
    // this can happen at creation or at update
    // assigning lead and contributors will add project to user's list
    
}, {timestamps:true, usePushEach:true});

mongoose.model('Project', ProjectSchema);