const User = require("../models/user");

exports.getLogin = (req, res, next) => {
  // const isLoggedIn = req.get("Cookie")
  //   ? req.get("Cookie").split("=")[1] === "true"
  //   : false;
  console.log(req.session.user);
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: false,
  });
};

exports.postLogin = (req, res, next) => {
  User.findById("641b3bcaa2b3308246cc9e7e")
    .then((user) => {
      // now we sure user & loggedIn across requests
      // the user here is store in session collection -> as document
      req.session.user = user;
      req.session.isLoggedIn = true;
      // we chain on save to gaurantee we don't redirect before creating session
      req.session.save((err) => {
        console.log(err);
        res.redirect("/");
      });
    })
    .catch((err) => console.log(err));
};

exports.postLogout = (req, res, next) => {
  // session.destroy deletes it from the db
  req.session.destroy((err) => {
    console.log(err);
    res.redirect("/");
  });
};
