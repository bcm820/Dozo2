
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Object = Schema.ObjectId;

const EventSchema = new Schema({
    
    profile: { type: Object, ref: 'Profile' },
    info: { String, required: [true] }
    
}, {timestamps: true});

mongoose.model('Event', EventSchema);