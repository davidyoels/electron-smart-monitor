var express = require("express");
var router = express.Router();
const joysNewsController = require("../controllers/joys-news.controller");

router.get("/addJoyNewsScreen", joysNewsController.addJoysNewsScreen);

router.post("/add-joys-names", joysNewsController.addJoysNews);

module.exports = router;
