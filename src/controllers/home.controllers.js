const homeCtrl = {}
const {Image} = require('../models')

homeCtrl.getHome = async ( req, res) => {
    const images = await Image.find().sort({timestamp: -1});
    res.render('index',{images});
}

module.exports = homeCtrl;