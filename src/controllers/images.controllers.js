const imgCrtl = {};
const path = require("path");
const { ramdomNumbers } = require("../helpers/libs");
const fs = require("fs-extra");
const {Image,Comments} = require('../models');
const md5 = require('md5');

imgCrtl.index = (req, res) => {
  res.send("image index");
};

imgCrtl.createImg = (req, res) => {

   const saveImage = async () => {
        const imageTempPath = req.file.path;
        const imgUrl = ramdomNumbers();
        const image = await Image.find({filename: imgUrl});
        if(image.length > 0) {
          saveImage();
        } else {
            const ext = path.extname(req.file.originalname).toLocaleLowerCase();
            const targetPath = path.resolve(`src/public/upload/${imgUrl}${ext}`);
            if (ext === ".png" || ext === ".jpg" || ext === ".jpeg" || ext === ".gif") {
              await fs.rename(imageTempPath, targetPath);
              const newImg = new Image({
                  title: req.body.title,
                  filename: imgUrl + ext,
                  description: req.body.description
              });
             const imageSave = await newImg.save();
             res.redirect('/image/' + imgUrl);
            } else {
              await fs.unlink(imageTempPath);
              res.status(500).json({error: 'Only images are allowed'})
            }
        }
    }

    saveImage();

};

imgCrtl.like = (req, res) => {
  res.send("image create");
};

imgCrtl.getImg = async (req, res) => {
  const image = await Image.findOne({filename: {$regex: req.params.image_id}});
  const comments = await Comments.find({image_id: image._id});
  res.render("image",{image,comments});
};

imgCrtl.comments = async (req, res) => {
  const image = await Image.findOne({filename: {$regex: req.params.image_id}});
  if(image) {
    const newComment = new Comments(req.body);
    newComment.gravatar = md5(newComment.email);
    newComment.image_id = image._id;
    await newComment.save();
  res.redirect('/image/'+ image.uniqueId);
  }
  
};

imgCrtl.deleteImg = (req, res) => {
  res.send("get image");
};

module.exports = imgCrtl;
