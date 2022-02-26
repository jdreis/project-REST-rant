// DEPENDINCIES
const express = require("express");
require("dotenv").config();
const React = require("react");
const PORT = process.env.PORT || 3000;
const app = express();

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

// ROUTES
app.use("/places", require("./controllers/places"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("*", (req, res) => {
  res.render("error404");
});

// LISTEN
app.listen(PORT);