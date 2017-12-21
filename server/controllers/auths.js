
const User = require('mongoose').model('User');
const bcrypt = require('bcrypt');

function listErrors(err){
    let list = [];
    for(let x in err.errors){
        list.push(err.errors[x].message);
    }
    return list.reverse();
}

module.exports = {

    // middleware processes go here
    logRoute(req, res, next){
        console.log(req.method, req.url);
        next();
    },

    // stores URL param in req.param key
    routeParam(req, res, next, param){
        req.param = param;
        next();
    },
    
    // checks session prior to accessing info
    // returns false if user ID not in session
    // false will update user subject in Angular
    authenticate(req, res, next){
        if(req.session.uid) next();
        else {
            console.log('AUTH: Could not authenticate user')
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
                        console.log('AUTH: Could not authenticate manager')
                        res.json(false)
                    }
                }
            })
            .catch(err => res.json(['Access forbidden.']))
        }
    },

    // returns true if successful login
    login(req, res){
        User.findOne({email:req.body.email})
        .then(user => {
            // if 404, no user found
            if(user === null){
                console.log('AUTH: Could not verify user')
                res.status(404).json(false);
            }
            else {
                user.checkPW(req.body._pw, (err, good) => {
                    if(good){
                        req.session.uid = user._id;
                        console.log(`AUTH: ${user.name} logged in`)
                        res.json(true);
                    }
                    // if 403, password invalid
                    else {
                        console.log('AUTH: Could not verify password')
                        res.status(403).json(false)
                    }
                })
            }
        })
    },

    // removes user ID from session
    // returns false to update user subject
    logout(req, res){
        req.session.uid = undefined;
        console.log(`AUTH: User has logged out`)
        res.json(false);
    },

    // checks if email unique
    // returns false if email found
    checkEmail(req, res){
        User.count({email:req.param})
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
            if(count === 1) res.json(['Email address already in use.'])
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
                    user.cascadeSave()
                    .then(user => {
                        console.log(`AUTH: ${user.name} registered`)
                        res.json(true)
                    })
                    .catch(err => res.json(listErrors(err)));
                });
            }
        });
    }

}