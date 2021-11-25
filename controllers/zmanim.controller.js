const timeScreenTexts = require("../utils/i18n/he-IL");
const { fetchZmanimData } = require("../data/zmanim");

const dayTimesScreen = (req, res, next) => {
  fetchZmanimData().then((zmanim_data) => {
    res.render("timesScreen", {
      timeScreenTexts: timeScreenTexts
    });
  });
};

module.exports = {
  dayTimesScreen: dayTimesScreen
};
