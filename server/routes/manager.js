
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
    .get(projects.getTasks) // list all tasks
    .post(projects.updateContributors) // add members
    .put(projects.update) // update project
    .delete(projects.remove) // delete project

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