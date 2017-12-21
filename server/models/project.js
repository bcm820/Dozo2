
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Object = Schema.ObjectId;

const ProjectSchema = new Schema({
    title: { type: String, required: [true] },
    description: { type: String },
    targetDuration: { type: Number, required:[true] }, // in days
    actualDuration: { type: Number, required:[true] },
    start_date: { type: Date },
    end_date: { type: Date },

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