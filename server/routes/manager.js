
const auth = require('../controllers/auths');
const users = require('../controllers/users');
const projects = require('../controllers/projects');

module.exports = (router) => {

    router.use(auth.authenticateManager);

    router.post('/m/users/:id', users.promote)
    router.post('/m/projects/:id', projects.assign)

};