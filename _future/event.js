
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Object = Schema.ObjectId;

/*
    Timestamps contained in event objects
*/

const EventSchema = new Schema({
    
    info: { type: String, required: [true] },

    // associations
    profile: {
        type: Object, ref: 'Profile',
        $through: 'events',
        $cascadeDelete: true
    },
    // all events related to user
    // i.e. user joined as project lead
    // user finished task
    // user finished project

    project: {
        type: Object, ref: 'Project',
        $through: 'events',
        $cascadeDelete: true
    },
    // all events within project

    task: {
        type: Object, ref: 'Task',
        $through: 'events',
        $cascadeDelete: true
    },
    // all events related to task
    
}, {timestamps: true});

mongoose.model('Event', EventSchema);

// import for cascading relations
const cascade = require('cascading-relations');
EventSchema.plugin(cascade);