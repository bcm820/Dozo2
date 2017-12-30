
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Object = Schema.ObjectId;
const bcrypt = require('bcrypt');
const shortid = require('shortid');

/*
    NOTE: Project-related data located in Profile schema
*/ 

const UserSchema = new Schema({
    
    id: { type: String, default: shortid.generate },
    
    status: { type: Boolean, default: true },
    
    member_profile: {
        type: Object, ref: 'Profile',
        $through: 'info', // defines path via _related in .populate()
        $cascadeDelete: true // deletes related sub-docs in Profile
    },

    lead_profile: {
        type: Object, ref: 'Profile',
        $through: 'info',
        $cascadeDelete: true
    },

    isManager: { type: Boolean },

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
    }

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