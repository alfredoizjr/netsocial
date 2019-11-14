const { Schema,model } = require('mongoose');
const  ObjectId  = Schema.ObjectId;
const path = require('path');

const CommentSchema = new Schema({
    image_id: {type:ObjectId },
    email:{type: String},
    name: {type: String},
    gravatar: {type: String},
    comments:{type: String},
    timestamp: {type: Date, default: Date.now()}
});

module.exports = model('Comment',CommentSchema);


