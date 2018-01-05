
const auth = require('../controllers/auths');

module.exports = (router) => {

    router.use(auth.logRoute);

    router.get('/test/lane', auth.testLane)
    router.get('/test/project', auth.testProject)
    router.get('/test/task', auth.testLane)
    router.get('/test/user', auth.testUser)
    
    router.route('/auth')
    .post(auth.register)
    .put(auth.login)
    .delete(auth.logout);

    router.get('/auth/:email', auth.checkEmail)

};