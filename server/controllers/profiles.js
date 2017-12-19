
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Profile = mongoose.model('Profile');

function listErrors(err){
    let list = [];
    for(let x in err.errors){
        list.push(err.errors[x].message);
    }
    return list.reverse();
}

module.exports = {
    
    // manager to view all users by profile
    list(req, res){
        User.find({})
        // .populate('profiles')
        .then(list => res.json(list));
    },

    // manager to assign lead/member profile to user
    assign(req, res){
        User.findById(req.param, (err, user) => {
        // on front-end, determine type (lead/member)
            let profile = new Profile(req.body);
            profile.info = user._id;
            profile.save((err) => {
                if(err) res.json(listErrors(err));
                else {
                    user.profiles.push(profile);
                    user.save((err) => {
                        return res.json(true);
                    });
                }
            });
        });
    },

    // lookup 
    lookup(req, res){
        User.findById(req.param)
        // .populate('profiles')
        .then(user => res.json(user))
    },

    updaassignte(req, res){},

    delete(req, res){},

    // POST: api/questions/:id
    answer(req, res){
        Question.findById(req.id, (err, question) => {
            let answer = new Answer(req.body);
            answer._question = question._id;
            answer.save((err) => {
                if(err) { res.json(listErrs(err)); }
                else {
                    question.answers.push(answer);
                    question.count += 1;
                    question.save((err) => {
                        return res.json('Answer added');
                    });
                }
            });
        });
    },

    // GET: api/questions
    // list(req, res){
    //     Question.find({}).sort({count:-1})
    //     .populate('answers').exec()
    //     .then(list => res.json(list))
    //     .catch(err => {
    //         res.status(404).json('none found');
    //         console.log(err);
    //     });
    // },

    // // POST: api/questions
    // create(req, res){
    //     const question = new Question(req.body);
    //     question.save()
    //     .then(question => res.json(question))
    //     .catch(err => res.json(listErrs(err)));
    // },

    // POST: api/questions/a/:id
    like(req, res){
        Answer.findById(req.id)
        .then(answer => {
            answer.likes += 1;
            answer.save()
            .then(answer => {
                Question.findById(answer._question)
                .populate('answers').exec()
                .then(question => res.json(question));
            })
        })
        .catch(err => {
            res.status(500).json('DB error');
            console.log(err);
        });
    }

}