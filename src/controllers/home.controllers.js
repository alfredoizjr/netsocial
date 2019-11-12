const homeCtrl = {}

homeCtrl.getHome = ( req, res) => {
    res.send('welcome');
}

module.exports = homeCtrl;