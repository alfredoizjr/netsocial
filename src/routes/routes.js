const controller = require('../controllers/controllers');

module.exports = app => {
    
    app.get('/',controller.getHome);

    return app;
};