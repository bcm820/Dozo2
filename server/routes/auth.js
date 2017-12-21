
const auth = require('../controllers/auths');

module.exports = (router) => {

    router.use(auth.logRoute);
    router.param('email', auth.routeParam);

    // api/auth
    router.route('/auth')
    .post(auth.register)
    .put(auth.login)
    .delete(auth.logout);

    // api/auth/:email
    router.get('/auth/:email', auth.checkEmail)

};