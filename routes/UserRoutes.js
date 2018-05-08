module.exports = function (app) {
    var userController = require('../controllers/UserController');

    // todoList Routes
    app.route('/user/:userId')
        .get(userController.getInfo)
        .put(userController.updateInfo);

    app.route('/user/')
        .post(userController.signup)
        .get(userController.getAll);

};