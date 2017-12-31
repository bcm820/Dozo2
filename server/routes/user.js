
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
    
    router.get('/users', users.list)
    router.get('/users/:id', users.lookup)

    router.get('/projects/:id', projects.lookup)
    
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
id
status
isManager
details
agenda (Project, thru 'owner')
[projects] (Project, thru 'members')
email, first, last, _pw, _pwconf, name

PROJECT:
id
title
description
details
start_date
target_date
owner (User)
controller (User)
lead (User)
[members] (User, thru 'projects')
status
end_date
time (for timer)
[grid] (Lane, thru 'project') - lanes in array
    // navigate via:
    // 'let lane = index'
    // 'let task = index'

LANE:
id
title
[tasks] (Task, thru 'lane')

TASK:
id
title
description
details
start_date
target_date
end_date
time
member
project
lane

*/