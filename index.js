require("dotenv").config();
const express = require("express");
const React = require("react");
const PORT = process.env.PORT;
const app = express();

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.use("/places", require("./controllers/places"));

// HOME PAGE
app.get("/", (req, res) => {
  res.render("home");
});

app.get("*", (req, res) => {
  res.render("error404");
});

app.listen(PORT);
