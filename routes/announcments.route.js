var express = require("express");
var router = express.Router();
const announcmentsController = require("../controllers/announcments.controller");

router.get("/get-announcments", announcmentsController.getAnnouncments);

router.post("/add-announcment", announcmentsController.addAnnouncments);

module.exports = router;
