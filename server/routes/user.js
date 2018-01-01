
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

    router.route('/projects')
    .get(projects.getUserProjects)
    .post(projects.updateUserProjects)

    router.route('/projects/:id')
    .get(projects.lookup)
    // .post(projects.updateGrid)
    
    router.route('/projects/:id/tasks')
    .get(projects.getGrid)
    .post(tasks.createTask)
    .put(tasks.createLane)

    router.route('/tasks/:id')
    .get(tasks.lookupTask)
    .post(tasks.updateTask)
    .delete(tasks.removeTask)

    router.route('/lanes/:id')
    .get(tasks.lookupLane)
    .post(tasks.updateLane)
    .delete(tasks.removeLane)

};


/*

USER:
status
isManager
details
[projects] (via manager, lead, contributors)
email, first, last, _pw, _pwconf, name

PROJECT:
title
description
details
startDate
targetDate
manager (User, thru 'projects')
lead (User, thru 'projects')
[contributors] (User, thru 'projects')
end_date
[grid] (Lane, thru 'project')
[tasks] (Task, thru 'project')

LANE:
title
project (Project, thru 'grid')
[tasks] (Task, thru 'lane')

TASK:
title
description
details
startDate
targetDate
endDate
contributor (User, thru 'tasks')
project (Project, thru 'tasks')
lane (Lane, thru 'tasks')

*/