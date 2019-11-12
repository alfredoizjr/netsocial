const imgCrtl = {}

imgCrtl.index = (req,res) => {
    res.send('image index');
}

imgCrtl.createImg = (req,res) => {
    res.send('image create');
}

imgCrtl.like = (req,res) => {
    res.send('image create');
}


imgCrtl.getImg = (req,res) => {
    res.send('get image');
}

imgCrtl.comments = (req,res) => {
    res.send('get image');
}

imgCrtl.deleteImg = (req,res) => {
    res.send('get image');
}

module.exports = imgCrtl;