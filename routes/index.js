var express = require("express");
var router = express.Router();
const { scheduleJob } = require("../events/schedule");

const { fetchZmanimData } = require("../data/zmanim");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/timesScreen", function (req, res, next) {
  fetchZmanimData().then((zmanim_data) => {
    scheduleJob((zmanim_data) => {
      res.render("timesScreen", {
        username: "david",
        current_time: "timesScreen",
        zmanim_data: zmanim_data
      });
    });
    res.render("timesScreen", {
      username: "david",
      current_time: "timesScreen",
      zmanim_data: zmanim_data
    });
  });
});

module.exports = router;
