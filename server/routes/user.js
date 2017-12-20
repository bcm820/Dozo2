
const auth = require('../controllers/auths');
const account = require('../controllers/accounts');
const profiles = require('../controllers/profiles');
const projects = require('../controllers/projects');

module.exports = (router) => {

    router.use(auth.logRoute);
    router.use(auth.authenticate);
    router.param('id', auth.routeParam);

    // api/account
    router.route('/account')
    .get(account.getUser)
    .post(account.updateUser)
    .delete(account.unregister)
    
    // api/profiles/:id
    router.route('/profiles/:id')
    .get(profiles.lookup)
    // lookup limited profile
    // for user dashboard

    // api/projects/:id
    router.route('/projects/:id')
    .get(projects.lookup)
    // lookup project info
    // for user to view their project

};