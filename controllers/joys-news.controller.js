const timeScreenTexts = require("../utils/i18n/he-IL");

const addJoysNewsScreen = (req, res, next) => {
  res.render("addJoyNewsScreen", {
    timeScreenTexts: timeScreenTexts
  });
};

const getJoysNews = async (req, res, next) => {
  readFileContent("joys-news", (data) => {
    res.status(200).json(data);
  });
};

module.exports = {
  addJoysNewsScreen: addJoysNewsScreen,
  getJoysNews: getJoysNews
};
