
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Object = Schema.ObjectId;
const shortid = require('shortid');

const LaneSchema = new Schema({
    
    id: { type: String, default: shortid.generate },
    
    title: { type: String, required: [true] },

    tasks: [{ 
        type: Object, ref: 'Task',
        $through: 'lane',
        $cascadeDelete: true
    }],
    
}, {timestamps:true, usePushEach:true});

// import for cascading relations
const cascade = require('cascading-relations');
LaneSchema.plugin(cascade);

mongoose.model('Lane', LaneSchema);