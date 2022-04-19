const timeScreenTexts = require("../utils/i18n/he-IL");
const { fetchZmanimData } = require("../data/zmanim.data");
const { getTodayPrayTimes } = require("../data/pray-day-times.data");
const { getLessonsData } = require("../controllers/lessons.controller");
const { getJoysNewsData } = require("../controllers/joys-news.controller");

const dayTimesScreen = (req, res, next) => {
  fetchZmanimData().then((zmanim_data) => {
    getLessonsData((lessonsData) => {
      getJoysNewsData((joysData) => {
        console.log(joysData.joysNews);
        
        res.render("timesScreen", {
          timeScreenTexts: {
            facilityNameText: timeScreenTexts.facilityNameText
              .split("")
              .reverse()
              .join(""),
            middleBottomTitle: timeScreenTexts.middleBottomTitle
              .split("")
              .reverse()
              .join(""),
            kolelName: timeScreenTexts.kolelName.split("").reverse().join(""),
            kolelLeaderName: timeScreenTexts.kolelLeaderName
              .split("")
              .reverse()
              .join("")
          },
          lessons: lessonsData.lessons,
          joys: joysData.joysNews,
          todayPrayTimes: getTodayPrayTimes()
        });
      });
    });

  });
};

module.exports = {
  dayTimesScreen: dayTimesScreen
};
