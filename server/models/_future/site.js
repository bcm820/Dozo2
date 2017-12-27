
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Object = Schema.ObjectId;

/*
    As a cloud service, allow multiple company sites
*/

const SiteSchema = new Schema({

    title: { type: String, required: [true] },
    description: { type: String },

    // associations
    categories: [{ type: Object, ref: 'Category' }],
    users: [{ type: Object, ref: 'User' }],
    profiles: [{ type: Object, ref: 'Profile' }],
    teams: [{ type: Object, ref: 'Team' }],
    projects: [{ type: Object, ref: 'Project' }],
    tasks: [{ type: Object, ref: 'Task' }],
    events: [{ type: Object, ref: 'Event' }]
    
});

mongoose.model('Site', SiteSchema);