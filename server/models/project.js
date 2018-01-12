
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Object = Schema.ObjectId;

const ProjectSchema = new Schema({
    
    title: { type: String, required: [true] },
    description: { type: String },
    type: { type: String, enum: ['Team', 'Individual'] },
    pw: { type: String },
    startDate: { type: Date },
    targetDate: { type: Date },
    endDate: { type: Date }, // add later

    creator: { type: Object, ref: 'User' },
    contributor_ids: [{ type: Object }],
    grid_ids: [{ type: Object }]
    
}, {
    timestamps: true,
    usePushEach: true,
    toObject: {virtuals:true},
    toJSON: {virtuals:true}
});

// many to many requires definition on both sides
// to create and update lists, add IDs to both child arrays
ProjectSchema.virtual('contributors', {
    ref: 'User',
    localField: 'contributor_ids',
    foreignField: '_id'
});

// this is a 'many to one' definition
// bc I need to use gridIDs to determine sort order
ProjectSchema.virtual('grid', {
  ref: 'Lane',
  localField: 'grid_ids',
  foreignField: '_id'
});

mongoose.model('Project', ProjectSchema);