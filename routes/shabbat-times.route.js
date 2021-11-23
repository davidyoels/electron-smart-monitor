var express = require("express");
var router = express.Router();
const timeScreenTexts = require("../utils/i18n/he-IL");
const shabbatTimesController = require("../controllers/shabbat-times.controller");

router.get(
  "/changeShabbatTimesScreen",
  shabbatTimesController.changeShabbatTimesScreen
);

router.post("/changeShabatTimes", shabbatTimesController.changeShabbatTimes);

module.exports = router;
