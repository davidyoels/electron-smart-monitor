var express = require("express");
var router = express.Router();
const timeScreenTexts = require("../utils/i18n/he-IL");

const { fetchZmanimData } = require("../data/zmanim");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/timesScreen", function (req, res, next) {
  fetchZmanimData().then((zmanim_data) => {
    res.render("timesScreen", {
      timeScreenTexts: timeScreenTexts
    });
  });
});

module.exports = router;
