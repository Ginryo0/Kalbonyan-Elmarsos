exports.get404 = (req, res, next) => {
  // you can chain methods - but send has to be last
  res
    .status(404)
    .render("404", { pageTitle: "404: Page Not Found", path: "/404" });
};
