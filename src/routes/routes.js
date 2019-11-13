const homeCtrl = require('../controllers/home.controllers');
const imageCrtl = require('../controllers/images.controllers');
const express = require('express');
const router = express.Router();
module.exports = app => {
    
    router.get('/',homeCtrl.getHome);
    router.get('/image',imageCrtl.index);
    router.get('/image/:image_id',imageCrtl.getImg);
    router.post('/image',imageCrtl.createImg);
    router.post('/image/:image_id/like',imageCrtl.like);
    router.post('/image/:image_id/comments',imageCrtl.comments);
    router.delete('/image/:image_id',imageCrtl.deleteImg);

    app.use(router);
};