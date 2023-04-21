const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

// Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public-2")));

// static -> looks at request that tries to find some files -> like .css/ .js/ .png -> then look for it the static paths -> 1st match

// exported routes

// common path started segment
app.use("/admin", adminRoutes);
app.use(shopRoutes);

// handling other paths
app.use((req, res, next) => {
  // you can chain methods - but send has to be last
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
