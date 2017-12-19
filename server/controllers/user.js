
const User = require('mongoose').model('User');

function listErrors(err){
    let list = [];
    for(let x in err.errors){
        list.push(err.errors[x].message);
    }
    return list.reverse();
}

module.exports = {
    
    list(req, res){
        User.find({})
        .then(list => res.json(list));
    },
    lookup(req, res){},
    update(req, res){},
    delete(req, res){},
    
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

    // POST: api/questions
    create(req, res){
        const question = new Question(req.body);
        question.save()
        .then(question => res.json(question))
        .catch(err => res.json(listErrs(err)));
    },

    // GET: api/questions/:id
    show(req, res){
        Question.findById(req.id)
        .populate('answers').exec()
        .then(question => res.json(question))
        .catch(err => {
            res.status(404).json('none found');
            console.log(err);
        });
    },

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