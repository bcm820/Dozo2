
const auth = require('../controllers/auth');
const profiles = require('../controllers/profiles');

module.exports = (router) => {

    router.use(auth.logRoute);
    router.param('id', auth.routeParam);
    router.param('email', auth.routeParam);

    // api/auth
    router.route('/auth')
    .get(auth.reqUser) // get user info
    .post(auth.register)
    .put(auth.login)
    .delete(auth.logout);

    // api/auth/:email - to check for unique email
    router.get('/auth/:email', auth.checkEmail)

    // api/manager
    router.route('/manager/profiles')
    .all(auth.authenticateManager)
    .get(profiles.list) // list limited user profiles

    // api/manager/:id
    router.route('/manager/profiles/:id')
    .all(auth.authenticateManager)
    .get(profiles.lookup) // lookup full user profile
    .post(profiles.assign) // assign new profile to user
    .put(profiles.addNote) // add note to user profile
    .delete(profiles.remove) // delete profile (not user)

};