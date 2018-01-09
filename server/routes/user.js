
const auth = require('../controllers/auths');
const users = require('../controllers/users');
const projects = require('../controllers/projects');
const tasks = require('../controllers/tasks');

module.exports = (router) => {

    router.use(auth.authenticate);

    router.route('/account')
    .get(users.getUser)
    .post(users.updateUser)
    .put(users.updatePW)
    .delete(users.unregister)

    router.get('/users', users.list);
    router.get('/users/:id', users.lookup);
    router.post('/m/users/:id', users.promote)

    router.route('/projects')
    .get(projects.getUserProjects)
    .post(projects.create)
    .put(projects.updateUserProjects)

    router.get('/projects/agenda', projects.getAgenda)
    
    router.route('/projects/:id')
    .get(projects.lookup)
    .post(projects.update)
    .put(projects.updateGrid)
    .delete(projects.remove)

    router.get('/projects/:id/filter', projects.filter)
    
    router.route('/projects/:id/build')
    .post(tasks.createTask)
    .put(tasks.createLane)

    router.route('/lanes/:id')
    .post(tasks.updateLane)
    .put(tasks.updateLaneTasks)
    .delete(tasks.removeLane)

    router.route('/tasks/:id')
    .post(tasks.updateTask)
    .delete(tasks.removeTask)

};