
const User = require('mongoose').model('User');
const bcrypt = require('bcrypt');

function sendMsg(type, msg){
    return {
        type: type,
        msg: msg
    }
}

module.exports = {

    // middleware processes go here
    logRoute(req, res, next){
        console.log(req.method, req.url);
        next();
    },
    
    // checks session prior to accessing info
    // returns false if user ID not in session
    // false will update user subject in Angular
    authenticate(req, res, next){
        if(req.session.uid) next();
        else {
            res.json(false);
        }
    },

    // checks if manager before allowing access
    // false will update user subject in Angular
    authenticateManager(req, res, next){
        if(req.session.uid){
            User.findById(req.session.uid)
            .then(user => {
                if(user !== null){
                    if(user.isManager) next();
                    else {
                        res.json(false)
                    }
                }
            })
            .catch(err => sendMsg(false, 'Error: Access forbidden.'));
        }
    },

    // returns true if successful login
    login(req, res){
        User.findOne({email:req.body.email})
        .then(user => {
            // if 404, no user found
            if(user === null){
                res.json(sendMsg(false, 'Error: No account found for this email address.'));
            }
            else {
                user.checkPW(req.body._pw, (err, good) => {
                    if(good){
                        req.session.uid = user._id;
                        res.json(sendMsg(true, `Welcome, ${user.first}! Logging you into Dozo...`));
                    }
                    else {
                        res.json(sendMsg(false, 'Error: You entered an invalid password.'));
                    }
                })
            }
        })
    },

    // removes user ID from session
    // returns false to update user subject
    logout(req, res){
        req.session.uid = undefined;
        res.json(sendMsg(true, `Session ended. See you again next time!`));
    },

    // checks if email unique
    // returns false if email found
    checkEmail(req, res){
        User.count({email:req.params.email})
        .then(count => {
            if(count === 1) res.json(false)
            else res.json(true)
        });
    },

    // sends array of errors if invalid
    register(req, res){
        const user = new User(req.body);
        // if email is not unique, send error
        User.count({email:req.body.email})
        .then(count => {
            if(count === 1) res.json(sendMsg(false, 'Error: Email address already in use.'));
            else {
                // if no manager yet, make first user a manager
                User.count({isManager:true})
                .then(count => {
                    if(count === 0) user.isManager = true;
                });
                // hash password and discard pwconf
                bcrypt.hash(user._pw, 10, (err, hashedPass) => {
                    user._pw = hashedPass;
                    user._pwconf = undefined;
                    // finally, save user
                    user.save()
                    .then(user => {
                        req.session.uid = user._id;
                        res.json(sendMsg(true, `Welcome, ${user.first}! Logging you into Dozo...`));
                    })
                    .catch(err => res.json(sendMsg(false, 'Error: One or more fields invalid.')));
                });
            }
        });
    }

}