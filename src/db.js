const mongoose = require('mongoose');
const {mongodb} = require('./keys')

mongoose.connect(mongodb.URI,mongodb.config)
        .then(() => console.log(`db connected...`))
        .catch((err) => { console.log(`db error ${err}`) })