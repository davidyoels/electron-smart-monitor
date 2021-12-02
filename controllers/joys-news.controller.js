const timeScreenTexts = require("../utils/i18n/he-IL");
const { readFileContent } = require("../utils/files/file-actions");

const addJoysNewsScreen = (req, res, next) => {
  res.render("addJoyNewsScreen", {
    timeScreenTexts: timeScreenTexts
  });
};

const getJoysNews = async (req, res, next) => {
  readFileContent("joys-news", (data) => {
    console.log(data);
    res.status(200).json(data);
  });
};

module.exports = {
  addJoysNewsScreen: addJoysNewsScreen,
  getJoysNews: getJoysNews
};
