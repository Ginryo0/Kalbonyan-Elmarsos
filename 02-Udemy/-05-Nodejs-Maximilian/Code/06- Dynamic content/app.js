const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

// config template
// app.engine('ext', fn)
app.set("view engine", "ejs");
app.set("views", "views");

// Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public-2")));

// exported routes
app.use("/admin", adminData.routes);
app.use(shopRoutes);

// handling other paths
app.use((req, res, next) => {
  // you can chain methods - but send has to be last
  res.status(404).render("404", { pageTitle: "404: Page Not Found" });
});

app.listen(3000);
