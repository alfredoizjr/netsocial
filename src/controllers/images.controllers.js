const imgCrtl = {};
const path = require("path");
const { ramdomNumbers } = require("../helpers/libs");
const fs = require("fs-extra");
const {Image} = require('../models');

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
             res.redirect('/image');
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

imgCrtl.getImg = (req, res) => {
  res.send("get image");
};

imgCrtl.comments = (req, res) => {
  res.send("get image");
};

imgCrtl.deleteImg = (req, res) => {
  res.send("get image");
};

module.exports = imgCrtl;
