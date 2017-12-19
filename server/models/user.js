
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Object = Schema.ObjectId;
const bcrypt = require('bcrypt');
const uniqueCheck = require('mongoose-unique-validator');

const UserSchema = new Schema({
    
    // associations
    teams_led: [{ type: Object, ref: 'Team' }],
    teams_joined: [{ type: Object, ref: 'Team' }],
    projects_managed: [{ type: Object, ref: 'Project' }],
    projects_joined: [{ type: Object, ref: 'Project' }],
    tasks_assigned: [{ type: Object, ref: 'Task' }],
    tasks_contributed: [{ type: Object, ref: 'Task' }],

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

// check password prior to login
UserSchema.methods.checkPW = function(pw){
    const self = this;
    return new Promise((resolve, reject) => {
        bcrypt.compare(pw, this._pw)
        .then(res => {
            if(!res) reject();
            else resolve();
        })
    });
}

mongoose.model('User', UserSchema);