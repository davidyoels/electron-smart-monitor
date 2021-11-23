const timeScreenTexts = require("../utils/i18n/he-IL");

const changeShabbatTimesScreen = (req, res, next) => {
  res.render("addShabatTimes", {
    timeScreenTexts: timeScreenTexts
  });
};

const changeShabbatTimes = (req, res, next) => {
  console.log("/POST addShabatTimes");
};

module.exports = {
  changeShabbatTimesScreen: changeShabbatTimesScreen,
  changeShabbatTimes: changeShabbatTimes
};
