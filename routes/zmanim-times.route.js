var express = require("express");
var router = express.Router();
const timeScreenTexts = require("../utils/i18n/he-IL");
var fs = require("fs");
const zmanimController = require("../controllers/zmanim.controller");

router.get("/timesScreen", zmanimController.dayTimesScreen);

module.exports = router;
