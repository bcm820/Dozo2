
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
    notes: { type: String },
    // managers to add, but only for leads to see
    // *ngIf check on profile.type

    start_date: { type: Date },
    target_date: { type: Date },
    end_date: { type: Date },

    manager: { type: Object, ref: 'User' },

    // associations
    tasks: [{
        type: Object, ref: 'Task',
        $through: 'project',
        $cascadeDelete: true
    }],
    
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