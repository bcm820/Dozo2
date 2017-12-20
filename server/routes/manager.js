
const auth = require('../controllers/auths');
const profiles = require('../controllers/profiles');
const projects = require('../controllers/projects');

module.exports = (router) => {

    router.use(auth.logRoute);
    router.use(auth.authenticate);
    router.param('id', auth.routeParam);

    // api/manager/profiles
    router.route('/manager/profiles')
    .get(profiles.list)
    // list all user profiles
    // for manager dashboard

    // api/manager/profiles/:id
    router.route('/manager/profiles/:id')
    .get(profiles.lookupFull) // lookup full user profile
    .post(profiles.assign) // assign new profile to user
    .put(profiles.addNote) // add note to user profile
    .delete(profiles.remove) // delete profile (not user)

    // api/manager/projects
    router.route('/manager/projects')
    .get(projects.list) // list all projects
    .post(projects.create) // create new team

    // api/manager/projects/:id
    router.route('/manager/projects/:id')
    .post(projects.assign) // assign user to team
    .put(projects.unassign) // unassign user from team
    .delete(projects.remove) // delete team (and associations)

};