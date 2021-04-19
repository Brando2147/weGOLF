// Requiring our models and passport as we've configured it
const db = require("../models");
const user = require("../models/user");

module.exports = function (app) {
  //****************** GET ROUTES ****************** /

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // app.post("/api/login", (req, res) => {
  //   // Sending back a password, even a hashed password, isn't a good idea
  //   res.json({
  //     email: req.user.email,
  //     id: req.user.id
  //   });
  // });

  // Route for getting some data about our user to be used client side
  // app.get("/api/user_data", (req, res) => {
  //   if (!req.user) {
  //     // The user is not logged in, send back an empty object
  //     res.json({});
  //   } else {
  //     // Otherwise send back the user's email and id
  //     // Sending back a password, even a hashed password, isn't a good idea
  //     res.json({
  //       email: req.User.email,
  //       id: req.User.id,
  //     });
  //   }
  // });

  // GET route to find all courses in the database
  app.get("/api/courses", function (req, res) {
    db.Courses.findAll({}).then(function (dbPost) {
      res.json(dbPost);
    });
  });

  // GET route to retrieve data for specific state AND city sorted by ascending state
  app.get("/api/posts/locationAscending/:city/:state", function (req, res) {
    db.Courses.findAll({
      where: {
        courseCity: req.params.city,
        courseState: req.params.state,
      },
      order: [["courseState", "ASC"]],
    }).then(function (dbPost) {
      res.json(dbPost);
    });
  });

  // GET route to find all cities that have been added to the database
  app.get("/api/city", function (req, res) {
    db.Courses.findAll({
      attributes: ["courseCity"],
    }).then(function (dbPost) {
      res.json(dbPost);
    });
  });

  // GET route to find all states that have been added to the database
  app.get("/api/state", function (req, res) {
    db.Courses.findAll({
      attributes: ["courseState"],
    }).then(function (dbPost) {
      res.json(dbPost);
    });
  });

  // GET route to find courses by Zip
  app.get("/api/zip", function (req, res) {
    db.Courses.findAll({
      attributes: ["courseZip"],
    }).then(function (dbPost) {
      res.json(dbPost);
    });
  });

  //****************** POST ROUTES ****************** /
  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      firebaseId: req.body.firebaseId,
      firstName: req.body.firstName,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
    })
      .then((results) => {
        console.log(results);
      })
      .catch((err) => {
        console.log(err.message);
        res.status(401).json(err.message);
      });
  });

  // Route to sign up for an account

  app.post("/api/round", (req,res) => {
    db.Round.create({
        ownerId: req.body.ownerId,
        courseName: req.body.courseName,
        courseCity: req.body.courseCity,
        courseState: req.body.courseState
    }).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err.message)
      res.status(401).json(err.message)
    })
  })

  //****************** PUT ROUTES ****************** /
};
