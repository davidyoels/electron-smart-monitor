var express = require("express");
var router = express.Router();
const timeScreenTexts = require("../utils/i18n/he-IL");
var fs = require("fs");

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

router.get("/addShabbatTimes", function (req, res, next) {
  res.render("addShabatTimes", {
    timeScreenTexts: timeScreenTexts
  });
});

router.get("/addMemorizeScreen", function (req, res, next) {
  res.render("addMemorizeScreen", {
    timeScreenTexts: timeScreenTexts
  });
});

router.post("/addShabatTimes", function (req, res, next) {
  console.log("/POST addShabatTimes");
});

router.post("/addMemorizeName", function (req, res, next) {
  try {
    const data = {
      data: [{ newName: "qweqwe", time: "2021-11-19T13:25:49.443Z" }]
    };
  } catch (ex) {
    console.log(ex);
    res.status(500).send({ message: "account an error" });
  }
});

module.exports = router;
