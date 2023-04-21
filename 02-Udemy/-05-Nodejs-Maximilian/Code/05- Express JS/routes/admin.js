const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

// get -> exact path match
// /admin/add-product -> GET
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// get - post - delete -patch - put

// /admin/add-product -> POST
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
