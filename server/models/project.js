
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Object = Schema.ObjectId;
const shortid = require('shortid');

/*
    At some point, sprint larger project into sprints
*/

const ProjectSchema = new Schema({
    
    id: { type: String, default: shortid.generate },
    
    title: { type: String, required: [true] },
    description: { type: String },

    features: [{ type: String }],
    notes: [{ type: String }],
    // managers to add, but only for leads to see
    // *ngIf check on profile.type

    start_date: { type: Date, default: new Date() },
    target_date: { type: Date },
    end_date: { type: Date },

    status: { 
        type: String,
        enum: ['1', '2', '3', '4'],
        default: '1'
    },

    // associations
    tasks: [{
        type: Object, ref: 'Task',
        $through: 'project',
        $cascadeDelete: true
    }],
    
    manager: { type: Object, ref: 'User' },
    
    members: [{
        type: Object, ref: 'Profile',
        $through: 'projects',
        $cascadeDelete: true
    }],
    
    // events: [{
    //     type: Object, ref: 'Event',
    //     $through: 'project',
    //     $cascadeDelete: true
    // }],
    
}, {usePushEach:true});

// import for cascading relations
const cascade = require('cascading-relations');
ProjectSchema.plugin(cascade);

mongoose.model('Project', ProjectSchema);