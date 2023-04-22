const path = require("path");

const express = require("express");

const rootPath = require("../rootpath");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootPath, "views", "index.html"));
});

router.get("/users", (req, res, next) => {
  res.sendFile(path.join(rootPath, "views", "users.html"));
});

module.exports = router;
