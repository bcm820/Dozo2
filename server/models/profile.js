
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Object = Schema.ObjectId;
const shortid = require('shortid');

/*
    Depending on profile, relationship projects and tasks change
    - Lead: Projects led, tasks assigned
    - Member: Projects contributed to, tasks assigned to
*/ 

const ProfileSchema = new Schema({

    id: { type: String, default: shortid.generate },
    
    type: { 
        type: String, required: [true],
        enum: ['lead', 'member']
    },

    name: { type: String },

    notes: { type: String },

    account: { 
        type: Object, ref: 'User',
        $through: 'member_profile',
        $cascadeDelete: true
    },

    account: { 
        type: Object, ref: 'User',
        $through: 'lead_profile',
        $cascadeDelete: true
    },

    projects: [{
        type: Object, ref: 'Project',
        $through: 'members',
        $cascadeDelete: true
    }],

    tasks: [{
        type: Object, ref: 'Task',
        $through: 'member',
        $cascadeDelete: true
    }],

    // events: [{
    //     type: Object, ref: 'Event',
    //     $through: 'profile',
    //     $cascadeDelete: true
    // }],
    
}, {usePushEach:true});

// import for cascading relations
const cascade = require('cascading-relations');
ProfileSchema.plugin(cascade);

mongoose.model('Profile', ProfileSchema);