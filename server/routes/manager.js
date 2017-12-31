
const auth = require('../controllers/auths');
const users = require('../controllers/users');
const projects = require('../controllers/projects');

module.exports = (router) => {

    router.use(auth.authenticateManager);

    router.route('/m/users/:id')
    .post(users.addNotes) // manager details
    .put(users.promote) // promote user to manager

    router.route('/m/projects')
    .get(projects.list) // list all projects
    .post(projects.create) // create new project

    router.route('/m/projects/:id')
    .post(projects.update) // update project
    .delete(projects.remove) // delete project

    // refactor 'assign' and 'unassign' to SELECT many users in relation to project

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