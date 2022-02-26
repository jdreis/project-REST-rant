//DEPENENCIES
require("dotenv").config();
const express = require("express");
const methodOverride = require("method-override");

// CONFIGURATION
const app = express();
const PORT = process.env.PORT || 3000;

// MIDDLEWARE
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(methodOverride("_method"));
app.use("/places", require("./controllers/places"));


// CONTROLLERS & ROUTES
app.get("/", (req, res) => {
  res.render("home");
});

app.get("*", (req, res) => {
  res.render("error404");
});

// LISTEN
app.listen(PORT, () => {
  console.log(`nomming on port ${PORT}`);
});