const router = require("express").Router();
const places = require("../models/places.js");

// HOME
router.get("/", (req, res) => {
  res.render("places/index", { places });
});

// NEW
router.get("/new", (req, res) => {
  res.render("places/new");
});

// NEW TO PLACES
router.post("/", (req, res) => {
  if (!req.body.pic) {
    req.body.pic = "http://placekitten.com/250/250";
  }
  if (!req.body.city) {
    req.body.city = "Anytown";
  }
  if (!req.body.state) {
    req.body.state = "USA";
  }
  places.push(req.body);
  res.redirect("/places");
});

// SHOW PAGE
router.get("/:id", (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  } else if (!places[id]) {
    res.render('error404')
  } else {
      res.render("/places/show", { place : places[id] });
  }
});

module.exports = router;
