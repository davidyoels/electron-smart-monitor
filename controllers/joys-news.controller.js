const timeScreenTexts = require("../utils/i18n/he-IL");

const addJoysNewsScreen = (req, res, next) => {
  res.render("addJoyNewsScreen", {
    timeScreenTexts: timeScreenTexts
  });
};

module.exports = {
  addJoysNewsScreen: addJoysNewsScreen
};
