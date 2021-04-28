// Requiring our models and passport as we've configured it
const db = require("../models");
const user = require("../models/user");
const { QueryTypes } = require("sequelize");

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

  //GET route to retrieve user's unique rounds
  app.get("/api/rounds/:ownerId", function (req, res) {
    db.sequelize
      .query(
        `SELECT DISTINCT r.ownerId, s.RoundId, r.courseName, 
        r.courseCity, r.courseState, r.createdAt 
        FROM Round r
        INNER JOIN Scores s
        ON r.id = s.RoundId
        WHERE r.ownerId = "${req.params.ownerId}"
        ORDER BY r.createdAt DESC`,
        { type: QueryTypes.SELECT }
      )
      .then(function (dbPost) {
        res.json(dbPost);
      }).catch(err => {
        console.log(err)
      })
  });

  //get to retrieve details for selected past round
  app.get("/api/pastRound/:roundId", function (req, res) {
    db.sequelize
      .query(
        `SELECT s.playerName, s.hole1, s.hole2, 
        s.hole3, s.hole4, s.hole5, s.hole6,s.hole7, 
        s.hole8, s.hole9, s.hole10, s.hole11, s.hole12, 
        s.hole13, s.hole14, s.hole15, s.hole16, s.hole17, 
        s.hole18, r.createdAt, r.courseName, r.courseCity, r.courseState
        FROM Round r
        INNER JOIN Scores s
        ON r.id = s.RoundId
        WHERE r.id = "${req.params.roundId}"`,
        { type: QueryTypes.SELECT }
      )
      .then(function (dbPost) {
        res.json(dbPost);
      }).catch(err => {
        console.log(err)
      })
  });

  // GET route to retrieve recent matches
  app.get("/api/recent/:ownerId", function (req, res) {
    console.log(req.params);
    db.sequelize
      .query(
        `SELECT r.ownerId, s.playerName,  r.id, r.courseName, 
        r.courseCity, r.courseState, s.RoundId,s.hole1, s.hole2, 
        s.hole3, s.hole4, s.hole5, s.hole6,s.hole7, 
        s.hole8, s.hole9, s.hole10, s.hole11, s.hole12, 
        s.hole13, s.hole14, s.hole15, s.hole16, s.hole17, 
        s.hole18, r.createdAt 
        FROM Round r
        INNER JOIN Scores s
        ON r.id = s.RoundId
        WHERE r.ownerId = "${req.params.ownerId}"
        ORDER BY r.createdAt DESC`,
        { type: QueryTypes.SELECT }
      )
      .then(function (dbPost) {
        res.json(dbPost);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // ANDREW: GET route to retrieve data for Leaderboards
  app.get("/api/leaderboards", async function (req, res) {
    await db.sequelize
      .query(
        `SELECT Scores.playerName,  Round.courseName, Round.courseCity, Round.courseState, Round.createdAt 
        FROM Round 
        INNER JOIN Scores 
        ON Round.id = Scores.RoundId`,
        { type: QueryTypes.SELECT }
      )
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  app.get("/api/current/:ownerId", function (req, res) {
    db.sequelize.query(
      `SELECT scores.id, playerName, hole1, hole2, hole3, hole4, hole5, hole6, hole7, hole8, hole9, hole10, hole11, hole12, hole13, hole14, hole15, hole16, hole17, hole18, roundId, courseName, courseCity, courseState
      FROM scores
      INNER JOIN round
      ON scores.RoundId = round.Id
      INNER JOIN user
      ON round.ownerId = user.firebaseId
      WHERE round.isComplete = 0 and user.firebaseId = "${req.params.ownerId}"`,
      { type: QueryTypes.SELECT }
    ).then((results) => {
      res.json(results)
    }).catch((err) => {
      console.log(err)
    })
  });

  app.get("/api/complete/:firebaseId", function (req, res) {
    db.sequelize.query(
      `SELECT isComplete
      FROM round
      INNER JOIN user
      ON round.ownerId = "${req.params.firebaseId}"
      WHERE round.isComplete = 0`,
      { type: QueryTypes.SELECT }
    ).then((results) => {
      res.json(results)
    }).catch((err) => {
      console.log(err)
    })
  })


  //****************** POST ROUTES ****************** /
  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      firebaseId: req.body.firebaseId,
      firstName: req.body.firstName,
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
  app.post("/api/round", (req, res) => {
    db.Round.create({
      ownerId: req.body.ownerId,
      courseName: req.body.courseName,
      courseCity: req.body.courseCity,
      courseState: req.body.courseState,
    })
      .then((result) => {
        res.json(result);
        console.log(result);
      })
      .catch((err) => {
        console.log(err.message);
        res.status(401).json(err.message);
      });
  });

  app.post("/api/scores", (req, res) => {
    db.Scores.create({
      playerName: req.body.playerName,
      RoundId: req.body.roundId,
    })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err.message);
        res.status(401).json(err.message);
      });
  });

  // Adding Total scores to the database
  // app.post("/api/addTotal", (req, res) => {
  //   db.Scores.create({
  //     Total: req.body.Total,
  //   })
  //     .then((result) => {
  //       res.json(result);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //       res.status(401).json(err.message);
  //     });
  // });

  //****************** PUT ROUTES ****************** /

  app.put("/api/scores/:playerId/:roundId", (req, res) => {
    db.Scores.update(req.body, {
      where: {
        id: req.params.playerId,
        RoundId: req.params.roundId,
      },
    })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err.message);
        res.status(401).json(err.message);
      });
  });

  app.put("/api/round/:roundId", (req, res) => {
    db.Round.update(req.body, {
      where: {
        id: req.params.roundId
      },
    })
      .then((results) => {
        res.json(results)
      })
      .catch((err) => {
        console.log(err.message);
        res.status(401).json(err.message);
      });
  })
};
