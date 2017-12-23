
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Object = Schema.ObjectId;
const shortid = require('shortid');

const TaskSchema = new Schema({
    
    id: { type: String, default: shortid.generate },
    
    title: { type: String, required:[true] },
    description: { type: String },

    notes: [{ type: String }],
    // two-way channel between lead and member

    start_date: { type: Date, default: new Date() },
    target_date: { type: Date },
    end_date: { type: Date },

    priority: {
        type: String,
        enum: ['1', '2', '3', '4', '5']
    },

    status: {
        type: String,
        enum: ['1','2','3','4'],
        default: '1'
    },

    // associations
    project: {
        required:[true],
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