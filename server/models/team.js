
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Object = Schema.ObjectId;

const TeamSchema = new Schema({
    title: { type: String, required: [true] },
    description: { type: String },

    // associations
    lead: { type: Object, ref: 'Profile' },
    members: [{ type: Object, ref: 'Profile' }]
    
});

mongoose.model('Team', TeamSchema);