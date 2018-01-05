
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Object = Schema.ObjectId;

const ProjectSchema = new Schema({
    
    title: { type: String, required: [true] },
    description: { type: String, required: [true] },
    details: { type: String },
    startDate: { type: Date },
    targetDate: { type: Date },

    endDate: { type: Date },
    // mark as done, archive to list
    // for last lane in column, show option to archive
    // *ngIf=!(nextlane) - do this for each lane

    creator: { type: Object, ref: 'User' },
    contributor_ids: [{ type: Object }],
    grid_ids: [{ type: Object }]
    
}, {
    timestamps:true,
    usePushEach:true,
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