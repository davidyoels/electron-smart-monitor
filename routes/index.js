var express = require("express");
var router = express.Router();
const timeScreenTexts = require("../utils/i18n/he-IL");
var fs = require("fs");
const { writeContentToFile } = require("../utils/files/file-actions");
const { fetchZmanimData } = require("../data/zmanim");
const { readFileContent } = require("../utils/files/file-actions");

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

router.get("/addJoyNewsScreen", function (req, res, next) {
  res.render("addJoyNewsScreen", {
    timeScreenTexts: timeScreenTexts
  });
});

router.get("/get-memoriale-names", async (req, res, next) => {
  readFileContent("memorial-names", (data) => {
    res.status(200).json(data);
  });
});

router.post("/addShabatTimes", function (req, res, next) {
  console.log("/POST addShabatTimes");
});

router.post("/addMemorizeName", async function (req, res, next) {
  try {
    const newMemrileName = {
      name: `${req.body["child-name"]} בן ${req.body["parent-name"]}`,
      time: new Date()
    };
    const memorizeNames = await writeContentToFile(
      "memorial-names",
      newMemrileName
    );
  } catch (ex) {
    console.log(ex);
  }
});

module.exports = router;
