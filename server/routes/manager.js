
const auth = require('../controllers/auths');
const profiles = require('../controllers/profiles');
const projects = require('../controllers/projects');

module.exports = (router) => {

    router.use(auth.authenticateManager);

    router.get('/manager/users', profiles.listUsers)
    router.route('/manager/users/:id')
    .get(profiles.lookupFull) // lookup full user info
    .post(profiles.assign) // assign new profile to user
    .put(profiles.promote) // promote user to manager

    router.get('/manager/profiles/leads', profiles.listLeads)
    router.get('/manager/profiles/members', profiles.listMembers)
    
    router.route('/manager/profiles/:id')
    .post(profiles.addNotes) // add notes to user profile
    .delete(profiles.remove) // delete profile

    router.route('/manager/projects')
    .get(projects.list) // list all projects
    .post(projects.create) // create new project

    router.route('/manager/projects/:id')
    .post(projects.update) // update project
    .delete(projects.remove) // delete project

    router.route('/manager/projects/:project/:profile')
    .post(projects.assign) // assign profile to project
    .delete(projects.unassign) // unassign profile from project

};