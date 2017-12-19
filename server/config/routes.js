
const main = require('../controllers/main');
const user = require('../controllers/user');

module.exports = (router) => {

    router.use(main.logRoute);
    router.param('id', main.routeParam);
    router.param('email', main.routeParam);

    // api/auth
    router.route('/auth')
    .post(main.login)
    .delete(main.logout)
    .get('/:email', main.checkEmail)
    .post('/register', main.register)

    // api/user
    router.route('/user')
    .all(main.authenticate)
    .get(user.list)
    .get('/:id', user.lookup)
    .put('/:id', user.update)
    .delete('/:id', user.update)

};