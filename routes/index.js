var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Study Smart AU" });
});

/* GET about us page. */
router.get("/about", function (req, res, next) {
  res.render("aboutus", { title: "About Us" });
});

/* GET contact page. */
router.get("/contact", function (req, res, next) {
  res.render("contactus", { title: "Contact Us" });
});

router.get("/login", function (req, res, next) {
  res.render("login", { title: "login " });
});

module.exports = router;
