
const User = require('mongoose').model('User');

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

    // primary route to get user object
    // requires user info in session
    getUser(req, res){
        if(req.session.uid){
            User.findById(req.session.uid, {_pw:0, __v:0})
            .then(user => res.json(user));
        }
        else res.json(false);
    },
    
    // checks session prior to accessing info
    // returns false if user ID not in session
    // false will update user subject in Angular
    authenticate(req, res, next){
        if(req.session.uid) next();
        else res.json(false);
    },

    // checks if manager before allowing access
    // false will update user subject in Angular
    authenticateManager(req, res, next){
        if(req.session.uid){
            User.findById(req.session.uid)
            .then(user => {
                if(user.isManager) next();
                else res.json(false)
            });
        }
    },

    // returns true if successful login
    login(req, res){
        User.findOne({email:req.body.email})
        .then(user => {
            // if 404, no user found
            if(user === null){ res.status(404).json(false); }
            else {
                user.checkPW(req.body._pw, (err, good) => {
                    if(good){
                        req.session.uid = user._id;
                        res.json(true);
                    }
                    // if 403, password invalid
                    else { res.status(403).json(false) }
                })
            }
        })
    },

    // removes user ID from session
    // returns false to update user subject
    logout(req, res){
        req.session.uid = undefined;
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
        user.cascadeSave()
        .then(user => res.json(true))
        .catch(err => res.json(listErrors(err)));
    }

}