const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorController = require("./controllers/error");

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
app.use("/admin", adminRoutes);
app.use(shopRoutes);

// handling other paths
app.use(errorController.get404);

app.listen(3000);
