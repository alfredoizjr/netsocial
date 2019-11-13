const mongoose = require('mongoose');
const { Schema,model } = mongoose;
const path = require('path');

 const imagesSchema = new Schema({
    title: {type: String},
    description: {type: String},
    filename: {type: String},
    views: {type: Number, default: 0},
    likes: {type: String, default: 0},
    timestamp: {type: Date, default: Date.now()}
});

imagesSchema.virtual('uniqueId')
            .get(function() {
                return this.filename.remplace(path.extname(this.filename))
            })

module.exports = model('Image',imagesSchema);