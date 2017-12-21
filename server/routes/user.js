
const auth = require('../controllers/auths');
const account = require('../controllers/accounts');
const profiles = require('../controllers/profiles');
const projects = require('../controllers/projects');

module.exports = (router) => {

    router.use(auth.authenticate);
    router.param('id', auth.routeParam);

    // api/account
    router.route('/account')
    .get(account.getUser)
    .post(account.updateUser)
    .delete(account.unregister)
    
    // api/.../:id
    router.get('/users/:id', profiles.lookupUser)
    router.get('/profiles/:id', profiles.lookupProfile)
    router.get('/projects/:id', projects.lookup)

};