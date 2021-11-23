var express = require("express");
var router = express.Router();

const memorialController = require("../controllers/memoriale.controller");

router.get("/addMemorialScreen", memorialController.addMemorialScreen);

router.get("/get-memoriale-names", memorialController.getMemorialNames);

router.post("/addMemorizeName", memorialController.addMemrizeNames);

module.exports = router;
