const router = require("express").Router();

// GET /places
router.get("/", (req, res) => {
  let places = [{
      name: "Cat's Night Out",
      city: "New York City",
      state: "NY",
      cuisines: "Japanese, Sushi, Bar",
      pic: "http://placekitten.com/249/250"
    }, 
    {
      name: "Coding Cat Cafe",
      city: "Phoenix",
      state: "AZ",
      cuisines: "Coffee, Bakery",
      pic: "http://placekitten.com/251/250"
    },
  ];
  res.render("places/index", { places });
});

router.get('/new', (req, res) => {
  res.render('places/new')
})

module.exports = router;