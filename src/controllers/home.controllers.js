const homeCtrl = {}

homeCtrl.getHome = ( req, res) => {
    res.render('index');
}

module.exports = homeCtrl;