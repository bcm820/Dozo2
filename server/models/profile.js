
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Object = Schema.ObjectId;

/*
    Depending on profile, relationship projects and tasks change
    - Lead: Projects led, tasks assigned
    - Member: Projects contributed to, tasks assigned to
*/ 

const ProfileSchema = new Schema({

    type: { 
        type: String, required: [true],
        enum: ['lead', 'member']
    },

    notes: { type: String },

    member_info: { 
        type: Object, ref: 'User',
        $through: 'member_profile',
        $cascadeDelete: true
    },

    lead_info: { 
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