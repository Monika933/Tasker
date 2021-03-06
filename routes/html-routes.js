// Dependencies =============================================================
var express = require("express");
var _ = require("lodash");
var path = require("path");

var router = express.Router();
module.exports = router;


// Routes =============================================================

  // index route for home page
  router.get("/", function(req, res) {
    res.render("../views/homepage.jade");
  });

  // route for signup page
  router.get("/signup", function(req, res) {
    res.render("../views/signup.jade");
  });

  // route for forgot password
  router.get("/forgotpassword", function(req, res) {
    res.render("../views/forgotpassword.jade");
  });

    // route for forgot password
  router.get("/about", function(req, res) {
    res.render("../views/about.jade");
  });

  // route for Task creation
  router.get("/create", function(req, res) {
    res.render("../views/createPost.jade");
  });

  // //route for file upload
  // router.get("/taskrPic", function(req, res) {
  //   res.render("../views/imgUpload.jade");
  // });


  // route for users homepage
  router.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/usersHomePage.html"));
  });

    // route for users homepage
  router.get("/settings", function(req, res) {
    res.render("../views/accountSettings.jade");
  });


  // // route to view all tasks
  // router.get("/tasks", function(req, res) {
  //   res.render("../views/tasks.jade");
  // });

  // route to view all tasks - HTML
  // router.get("/tasks", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/tasks.html"));
  // });

  // // route for create task page
  // router.get("/create_task", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/create_task.html"));
  // });
  //
  // // route for taskr-manager.html
  // router.get("/taskrs", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/taskr-manager.html"));
  // });
