var express = require("express");
var router = express.Router();
const lessonsController = require("../controllers/lessons.controller");

router.post("/add-lesson", lessonsController.addLesson);

module.exports = router;
