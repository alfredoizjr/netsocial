const router = require("../routes/routes");
const exhbs = require("express-handlebars");
const path = require("path");
const morgan = require("morgan");
const multer = require("multer");
const express = require("express");
const errorHandler = require("errorhandler");
module.exports = app => {
  // set
  app.set("port", process.env.PORT || 8000);
  app.set("views", path.join(__dirname, "views"));
  app.engine(
    ".hbs",
    exhbs({
      defaultLayout: "main",
      partialsDir: path.join(app.get("views"), "partials"),
      layoutsDir: path.join(app.get("views"), "layout"),
      extname: ".hbs",
      helpers: require("./helpers")
    })
  );
  app.set("view engine", ".hbs");
  // middleware
  // morgan to see the request
  app.use(morgan("dev"));
  app.use(
    multer({ dest: path.join(__dirname, "../public/upload/temp") }).single(
      "image"
    )
  );
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // router
  router(app);

  app.listen(app.get("port"), () =>
    console.log(`server online on port ${app.get("port")}`)
  );

  // static files
  app.use("/public", express.static(path.join(__dirname, "../public")));

  // error handler

  if ("development" === app.get("env")) {
    app.use(errorHandler);
  }

  return app;
};
