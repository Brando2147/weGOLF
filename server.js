const express = require("express");
const routes = require("./routes");
const passport = require("./config/passport");
const db = require("./models");
const PORT = process.env.PORT || 3001;

const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(
      console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
    );
  });
});
