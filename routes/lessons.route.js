var express = require("express");
var router = express.Router();
const lessonsController = require("../controllers/lessons.controller");

router.get("/get-lessons", lessonsController.getLessons);

router.post("/add-lesson", lessonsController.addLesson);

module.exports = router;
