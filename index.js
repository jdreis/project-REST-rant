require("dotenv").config();
const express = require("express");
const React = require("react");
const PORT = process.env.PORT || 3000;
const app = express();

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.use("/places", require("./controllers/places"));
app.use(express.static("public"));

// HOME PAGE
app.get("/", (req, res) => {
  res.render("home");
});

// 404 ERROR
app.get("*", (req, res) => {
  res.render("error404");
});

app.listen(PORT);
