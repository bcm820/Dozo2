
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Object = Schema.ObjectId;

/*
    Depending on profile, relationship to teams, projects, tasks change
    - Team Lead: Teams led, projects led, tasks assigned
    - Member: Teams joined, projects contributed to, tasks assigned to
*/ 

const ProfileSchema = new Schema({

    type: { 
        type: String, required: [true],
        enum: ['Lead', 'Member']
    },

    info: { type: Object, ref: 'User' },
    note: { type: String },

    teams: [{ type: Object, ref: 'Team' }],
    projects: [{ type: Object, ref: 'Project' }],
    tasks: [{ type: Object, ref: 'Task' }],

    events: [{ type: Object, ref: 'Event' }],
    
}, {timestamps: true});

mongoose.model('Profile', ProfileSchema);