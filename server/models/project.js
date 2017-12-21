
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
    features: [{ type: String }], // backlog
    notes: { type: String }, // for leads only

    start_date: { type: Date, required:[true] },
    target_date: { type: Date, required:[true] },
    end_date: { type: Date },

    stage: { 
        type: String,
        enum: ['plan', 'sprint', 'review', 'done']
    },

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