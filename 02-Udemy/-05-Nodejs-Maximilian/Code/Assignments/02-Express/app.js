const express = require("express");

const app = express();

app.use("/users", (req, res, next) => {
  console.log("2nd middleware");
  res.send("<p>users</p>");
  // next()
});

app.use("/", (req, res, next) => {
  console.log("1st middleware");
  console.log("?");
  res.send("<p>index</p>");
});

app.listen(3000);
