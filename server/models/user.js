
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Object = Schema.ObjectId;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    status: { type: Boolean, default: true },
    isManager: { type: Boolean },
    // only managers can assign contributors and tasks
    // normal users can still make their own projects/tasks
    agenda: { type: Object, ref: 'Project' },
    project_ids: [{ type: Object }],

    email: {
        type: String, trim: true,
        required: [true],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
    },

    first: {
        type: String, trim: true,
        required: [true],
        minlength: [2]
    },

    last: {
        type: String, trim: true,
        required: [true],
        minlength: [2]
    },

    _pw: {
        type: String,
        required: [true],
        minlength: [8]
    },

    _pwconf: {
        type: String,
        validate: function(_pwconf){
            if(_pwconf !== this._pw){
                this.invalidate('pwconf');
            }
        }
    },
    
}, {
    timestamps:true,
    usePushEach:true,
    toObject: {virtuals:true},
    toJSON: {virtuals:true}
});

// check password prior to login
UserSchema.methods.checkPW = function(password, cb){
    bcrypt.compare(password, this._pw, (err, good) => {
        if(err){ return cb(err) }
        else { cb(null, good); }
    });
}

UserSchema.virtual('name').get(function(){
    return `${this.first} ${this.last}`;
});

// many to many requires definition on both sides
// to create and update lists, add IDs to both child arrays
UserSchema.virtual('projects', {
  ref: 'Project',
  localField: 'project_ids',
  foreignField: '_id'
});

// one to many defined on parent
// references foreignField in related doc
UserSchema.virtual('projects_created', {
  ref: 'Project',
  localField: '_id',
  foreignField: 'creator'
});

UserSchema.virtual('tasks_created', {
  ref: 'Task',
  localField: '_id',
  foreignField: 'creator'
});

UserSchema.virtual('tasks_contributed', {
  ref: 'Task',
  localField: '_id',
  foreignField: 'contributor'
});

mongoose.model('User', UserSchema);