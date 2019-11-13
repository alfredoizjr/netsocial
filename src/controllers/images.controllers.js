const imgCrtl = {};
const path = require("path");
const { ramdomNumbers } = require("../helpers/libs");
const fs = require("fs-extra");

imgCrtl.index = (req, res) => {
  res.send("image index");
};

imgCrtl.createImg = async (req, res) => {
  const imageTempPath = req.file.path;
  const imgUrl = ramdomNumbers();
  const ext = path.extname(req.file.originalname).toLocaleLowerCase();
  const targetPath = path.resolve(`src/public/upload/${imgUrl}${ext}`);
  console.log(req.file);

  if (ext === ".png" || ext === ".jpg" || ext === ".jpeg" || ext === ".gif") {
    await fs.rename(imageTempPath, targetPath);
  }

  res.send("works!");
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
