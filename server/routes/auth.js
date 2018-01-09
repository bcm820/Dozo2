
const auth = require('../controllers/auths');

module.exports = (router) => {

    router.use(auth.logRoute);
    
    router.route('/auth')
    .post(auth.register)
    .put(auth.login)
    .delete(auth.logout);

    router.get('/auth/:email', auth.checkEmail)

};