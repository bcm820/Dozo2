
const auth = require('../controllers/auths');

module.exports = (router) => {

    router.use(auth.logRoute);
    router.param('email', auth.routeParam);

    // api/auth
    router.route('/auth')
    .post(auth.register)
    .put(auth.login)
    .get(auth.getUser) // get basic user via UID
    .delete(auth.logout);

    // api/auth/:email
    router.get('/auth/:email', auth.checkEmail)

};