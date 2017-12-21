
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Object = Schema.ObjectId;
const shortid = require('shortid');

const TaskSchema = new Schema({
    
    id: { type: String, default: shortid.generate },
    
    title: { type: String, required: [true] },
    description: { type: String },
    targetDuration: { type: Number, required:[true] }, // in days
    actualDuration: { type: Number, required:[true] },
    start_date: { type: Date },
    end_date: { type: Date },

    // associations\
    project: {
        type: Object, ref: 'Project',
        $through: 'tasks',
        $cascadeDelete: true
    },
    
    member: {
        type: Object, ref: 'Profile',
        $through: 'tasks',
        $cascadeDelete: true
    },

    // events: [{
    //     type: Object, ref: 'Event',
    //     $through: 'task',
    //     $cascadeDelete: true
    // }],
    
}, {usePushEach:true});

// import for cascading relations
const cascade = require('cascading-relations');
TaskSchema.plugin(cascade);

mongoose.model('Task', TaskSchema);