
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Object = Schema.ObjectId;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({

    status: { type: Boolean, default: true },
    isManager: { type: Boolean },
    projects: [{ type: Object, ref: 'Project' }],

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