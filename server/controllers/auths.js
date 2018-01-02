
const User = require('mongoose').model('User');
const Project = require('mongoose').model('Project');
const Lane = require('mongoose').model('Lane');
const bcrypt = require('bcrypt');

function sendMsg(status, msg){
    return {
        status: status,
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
    authenticate(req, res, next){
        if(req.session.uid) next();
        else {
            res.json(sendMsg(false, 'Error: Credentials required. Please log in.'));
        }
    },

    // checks if manager before allowing access to manager routes
    authenticateManager(req, res, next){
        if(req.session.uid){
            User.findById(req.session.uid)
            .then(user => {
                if(user !== null){
                    if(user.isManager) next();
                    else res.json(sendMsg(false, 'Error: Manager credentials required.'));
                }
            })
        }
        else res.json(sendMsg(false, 'Error: Manager credentials required.'));
    },

    login(req, res){
        User.findOne({email:req.body.email})
        .then(user => {
            if(user === null){
                res.json(sendMsg(false, 'Error: No account found for this email address.'));
            }
            else {
                user.checkPW(req.body._pw, (err, good) => {
                    if(good){
                        req.session.uid = user._id;
                        res.json(sendMsg(true, `Welcome, ${user.first}! Logging you in...`));
                    }
                    else {
                        res.json(sendMsg(false, 'Error: You entered an invalid password.'));
                    }
                })
            }
        })
    },

    // deletes user ID from session
    logout(req, res){
        req.session.uid = undefined;
        res.json(sendMsg(true, `Session ended. See you next time!`));
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

    register(req, res){
        const user = new User(req.body);
        User.count({email:req.body.email})
        .then(count => {

            // if email is not unique, send error
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

                    // create 'agenda' project
                    const agenda = new Project({
                        title:'Agenda',
                        description:'My To Do List',
                        contributors: [user]
                    });
                    user._related = {};
                    user._related.projects = [agenda];

                    // save user and nested agenda project
                    user.cascadeSave()
                    .then(user => {
                        req.session.uid = user._id;

                        // add user's 'to do' lane to their agenda
                        Project.findById(agenda._id)
                        .then(agenda => {
                            const lane = new Lane({title: 'To Do'});
                            agenda._related = {};
                            agenda._related.grid = [lane];
                            agenda.cascadeSave()
                            .then(agenda => {
                                res.json(sendMsg(true, `Welcome, ${user.first}! Logging you in...`));
                            });
                        });
                    })
                    .catch(err => res.json(sendMsg(false, 'Error: One or more fields invalid.')));
                });
            }
        });
    }

}