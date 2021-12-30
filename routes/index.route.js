const express = require("express");
const router = express.Router();

const shabbatTimesRoute = require("./shabbat-times.route");
const joysNewsRouter = require("./joys-news.route");
const memorialRoute = require("./memoriale.route");
const zmanimTimesRoute = require("./zmanim-times.route");
const announcmentsRoute = require("./announcments.route");
const lessonsRoute = require("./lessons.route");

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.use("/shabbat-times", shabbatTimesRoute);
router.use("/joys-news", joysNewsRouter);
router.use("/memorial", memorialRoute);
router.use("/zmanim", zmanimTimesRoute);
router.use("/announcments", announcmentsRoute);
router.use("/lessons", lessonsRoute);

module.exports = router;
