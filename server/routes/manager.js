
const auth = require('../controllers/auths');
const users = require('../controllers/users');
const projects = require('../controllers/projects');

module.exports = (router) => {

    router.use(auth.authenticateManager);

    router.route('/m/users/:id')
    .put(users.promote)

    router.route('/m/projects')
    // .get(projects.list) // list all projects
    .post(projects.create)

    router.route('/m/projects/:id')
    // .get(projects.getTasks) // list all tasks
    .post(projects.update) // update info
    .delete(projects.remove) // delete project

};