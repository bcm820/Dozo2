
const auth = require('../controllers/auths');
const profiles = require('../controllers/profiles');
const projects = require('../controllers/projects');

module.exports = (router) => {

    router.use(auth.authenticateManager);
    router.param('id', auth.routeParam);

    // api/manager/users...:id
    router.get('/manager/users', profiles.listUsers)
    router.route('/manager/users/:id')
    .get(profiles.lookupFull) // lookup full user info
    .post(profiles.assign) // assign new profile to user
    .put(profiles.promote) // promote user to manager

    // api/manager/profiles...
    router.get('/manager/profiles/leads', profiles.listLeads)
    router.get('/manager/profiles/members', profiles.listMembers)
    
    // api/manager/profiles/:id
    router.route('/manager/profiles/:id')
    .post(profiles.addNotes) // add notes to user profile
    .delete(profiles.remove) // delete profile (not user)

/*
    Project:
    - Create project with detailed info
    - Add notes viewable by leads only
    - Assign lead to projects
    - Assign members to projects
    - Update project status
    - Prioritize tasks
*/


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