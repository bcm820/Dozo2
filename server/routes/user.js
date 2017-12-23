
const auth = require('../controllers/auths');
const account = require('../controllers/accounts');
const profiles = require('../controllers/profiles');
const projects = require('../controllers/projects');
const tasks = require('../controllers/tasks');

module.exports = (router) => {

    router.use(auth.authenticate);

    router.route('/account')
    .get(account.getUser)
    .post(account.updateUser)
    .delete(account.unregister)
    
    router.get('/users/:id', profiles.lookupUser) // contact info, profile links
    router.get('/profiles/:id', profiles.lookupProfile) // profile with projects/tasks
    router.get('/projects/:id', projects.lookup) // general project overview
    
    router.route('/projects/:id/tasks')
    .get(tasks.list) // view all tasks of a project
    .post(tasks.create) // create new task for a project

    router.route('/tasks/:id')
    .get(tasks.lookup) // detailed task info
    .post(tasks.update) // update task details, status, priority, etc.
    .delete(tasks.remove) // delete task

    router.route('/tasks/:task/:profile')
    .post(tasks.assign) // assign task to a profile
    .delete(tasks.unassign) // unassign task from profile
    
    router.get('/tasks/:project/all/:status', tasks.listByStatus) // by profile
    router.get('/tasks/:project/:profile/:status', tasks.listFilter) // by profile

    /*
        1. LEAD VIEW: All tasks, or select by member
        2. MEMBER VIEW: Their tasks only
        - Leads can create and assign tasks to members
        - Members can create tasks for themselves
        - Users can update a log for each task
        - Leads can prioritize tasks
        - Users can prioritize tasks
    */

};