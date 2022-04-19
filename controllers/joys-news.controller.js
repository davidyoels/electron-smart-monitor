const timeScreenTexts = require("../utils/i18n/he-IL");
const {
  readFileContent,
  writeContentToFile
} = require("../utils/files/file-actions");
const { notifyAddedNewJoyNew } = require("../events/socket");

const addJoysNewsScreen = (req, res, next) => {
  res.render("addJoyNewsScreen", {
    timeScreenTexts: timeScreenTexts
  });
};

const getJoysNewsData = async (cb) => {
  readFileContent("joys-news", (data) => {
    cb(data);
  });
};

const addJoysNews = async function (req, res, next) {
  try {
    const newJosyNews = {
      name: req.body["new-joys-news"],
      time: new Date()
    };
    notifyAddedNewJoyNew(newJosyNews.name);
    const JoysNews = await writeContentToFile(
      "joys-news",
      "joysNews",
      newJosyNews
    );
    // res.status(200).send({});
  } catch (ex) {
    console.log(ex);
  }
};

module.exports = {
  addJoysNewsScreen: addJoysNewsScreen,
  addJoysNews: addJoysNews,
  getJoysNewsData: getJoysNewsData
};
