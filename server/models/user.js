
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Object = Schema.ObjectId;
const bcrypt = require('bcrypt');
const uniqueCheck = require('mongoose-unique-validator');
const Profile = mongoose.Model('Profile'); // import to cascade delete

/*
    NOTE: Project-related data located in Profile schema
*/ 

const UserSchema = new Schema({
    
    profiles: [{ type: Object, ref: 'Profile' }],
    isManager: { type: Boolean },

    email: {
        type: String, unique: [true], trim: true,
        required: [true, 'Email required'],
        uniqueCaseInsensitive: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email']
    },

    first: {
        type: String, trim: true,
        required: [true, 'First name missing'],
        minlength: [2, 'First name input invalid']
    },

    last: {
        type: String, trim: true,
        required: [true, 'Last name missing'],
        minlength: [2, 'Last name input invalid']
    },

    _pw: {
        type: String,
        required: [true, 'Password missing'],
        minlength: [8, 'Password input invalid'],
        maxlength: [32, 'Password input invalid']
    },

    _pwconf: {
        type: String,
        required: [true, 'Confirmation missing'],
        validate: function(pwconf){
            if(pwconf !== this._pw){
                this.invalidate('pwconf', 'Confirmation input invalid');
            }
        }
    }

}, {timestamps: true});

// unique plugin
UserSchema.plugin(uniqueCheck, {message: 'Duplicate email found' });

// hash password and reset pwconf
UserSchema.pre('save', function(next){
    const user = this;
    bcrypt.hash(this._pw, 10, (err, hashedPass) => {
        user._pw = hashedPass;
        user._pwconf = undefined;
        next();
    });
});

// on remove, delete all profiles linked to user
// note: all events and tasks will remain on DB
UserSchema.pre('remove', function(next) {
    Profile.remove({info: this._id}).exec();
    next();
});

// check password prior to login
UserSchema.methods.checkPW = function(password, cb){
    bcrypt.compare(password, this._pw, (err, good) => {
        if(err){ return cb(err) }
        else { cb(null, good); }
    });
}

mongoose.model('User', UserSchema);