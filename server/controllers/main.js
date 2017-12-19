
const User = require('mongoose').model('User');

// store errors in array
function listErrs(err){
    let list = [];
    for(let x in err.errors){
        list.push(err.errors[x].message);
    }
    return list.reverse();
}

module.exports = {

    logRoute(req, res, next){
        console.log(req.method, req.url);
        next();
    },

    routeParam(req, res, next, param){
        req.param = param;
        next();
    },

    authenticate(req, res, next){
        if(req.session.uid){
            User.findById(req.session.uid)
            .then(user => next());
        }
        else res.json(false)
    },

    login(req, res){
        User.findOne({email:req.body.email})
        .then(user => {
            if(user === null) res.json(false);
            user.checkPW(req.body._pw)
            .then(valid => {
                req.session.uid = user._id;
                res.json(user);
            })
            .catch(err => res.json(false));
        })
    },

    logout(req, res){
        req.session.uid = undefined;
        res.status(200);
    },

    checkEmail(req, res){
        User.count({email:req.email})
        .then(count => res.json(count))
    },

    register(req, res){
        const user = new User(req.body);
        user.save()
        .then(user => res.json(user))
        .catch(err => res.json(listErrors(err)));
    }

}