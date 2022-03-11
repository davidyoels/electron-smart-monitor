const timeScreenTexts = require("../utils/i18n/he-IL");
const { fetchZmanimData } = require("../data/zmanim.data");
const { getTodayPrayTimes } = require("../data/pray-day-times.data");

const dayTimesScreen = (req, res, next) => {
  fetchZmanimData().then((zmanim_data) => {
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
      todayPrayTimes: getTodayPrayTimes()
    });
  });
};

module.exports = {
  dayTimesScreen: dayTimesScreen
};
