const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");

const app = express();

const users = [];

// app.set("view engine", "pug");
app.engine("hbs", expressHbs({ defaultLayout: "main-layout", extname: "hbs" }));
// app.set("view engine", "hbs");
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index", { pageTitle: "Add User" });
});

app.get("/users", (req, res) => {
  res.render("users", {
    pageTitle: "Users",
    users,
    hasUsers: users.length > 0,
  });
});

app.post("/add-user", (req, res) => {
  users.push({ name: req.body.username });
  res.redirect("/users");
});

app.listen(3000);
