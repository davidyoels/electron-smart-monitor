const express = require("express");
const router = express.Router();

router.use(express.json());

const shabbatTimesRoute = require("./shabbat-times.route");
const joysNewsRouter = require("./joys-news.route");
const memorialRoute = require("./memoriale.route");
const zmanimTimesRoute = require("./zmanim-times.route");
const announcmentsRoute = require("./announcments.route");
const lessonsRoute = require("./lessons.route");
const heIL = require("../utils/i18n/he-IL");

router.get("/", function (req, res, next) {
  res.render("index", {
    timeScreenTexts: {
      facilityNameText: heIL.facilityNameText.split("").reverse().join(""),
      showTimeScreenText: heIL.showTimeScreenText,
      addMessageScreenText: heIL.addMessageScreenText,
      addMemorialScreenText: heIL.addMemorialScreenText,
      addJoysScreenText: heIL.addJoysScreenText,
      middleBottomTitle: heIL.middleBottomTitle.split("").reverse().join(""),
      kolelName: heIL.kolelName.split("").reverse().join(""),
      kolelLeaderName: heIL.kolelLeaderName.split("").reverse().join("")
    }
  });
});

router.use("/shabbat-times", shabbatTimesRoute);
router.use("/joys-news", joysNewsRouter);
router.use("/memorial", memorialRoute);
router.use("/zmanim", zmanimTimesRoute);
router.use("/announcments", announcmentsRoute);
router.use("/lessons", lessonsRoute);

module.exports = router;
