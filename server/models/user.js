
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Object = Schema.ObjectId;
const shortid = require('shortid');
const bcrypt = require('bcrypt');

const UserSchema = new Schema({

    id: { type: String, default: shortid.generate },
    status: { type: Boolean, default: true }, // for auth
    isManager: { type: Boolean },
    details: { type: String },

    projects: [{
        type: Object, ref: 'Project',
        $through: 'manager',
        $cascadeDelete: true
    }],

    projects: [{
        type: Object, ref: 'Project',
        $through: 'lead',
        $cascadeDelete: true
    }],
    
    projects: [{
        type: Object, ref: 'Project',
        $through: 'contributors',
        $cascadeDelete: true
    }],

    tasks: [{
        type: Object, ref: 'Task',
        $through: 'contributor'
    }],

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
    
}, {timestamps:true, usePushEach:true});

// import for cascading relations
const cascade = require('cascading-relations');
UserSchema.plugin(cascade);

// virtual fullName attr
UserSchema.virtual('name').get(function(){
    return `${this.first} ${this.last}`;
});

// check password prior to login
UserSchema.methods.checkPW = function(password, cb){
    bcrypt.compare(password, this._pw, (err, good) => {
        if(err){ return cb(err) }
        else { cb(null, good); }
    });
}

mongoose.model('User', UserSchema);