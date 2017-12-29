
const auth = require('../controllers/auths');
const profiles = require('../controllers/profiles');
const projects = require('../controllers/projects');

module.exports = (router) => {

    router.use(auth.authenticateManager);

    router.get('/m/users', profiles.listFull)
    router.route('/m/users/:id')
    .post(profiles.assign) // assign new profile to user
    .put(profiles.promote) // promote user to manager
    
    router.route('/m/profiles/:id')
    .post(profiles.addNotes) // add notes to user profile
    .delete(profiles.remove) // delete profile

    router.route('/m/projects')
    .get(projects.list) // list all projects
    .post(projects.create) // create new project

    router.route('/m/projects/:id')
    .post(projects.update) // update project
    .delete(projects.remove) // delete project

    router.route('/m/projects/:project/:profile')
    .post(projects.assign) // assign profile to project
    .delete(projects.unassign) // unassign profile from project

};