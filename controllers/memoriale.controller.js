const timeScreenTexts = require("../utils/i18n/he-IL");
const { writeContentToFile } = require("../utils/files/file-actions");
const { readFileContent } = require("../utils/files/file-actions");

const addMemorialScreen = (req, res, next) => {
  res.render("addMemorialScreen", {
    timeScreenTexts: timeScreenTexts
  });
};

const getMemorialNames = async (req, res, next) => {
  readFileContent("memorial-names", (data) => {
    res.status(200).json(data);
  });
};

const addMemrizeNames = async function (req, res, next) {
  try {
    const newMemrileName = {
      name: `${req.body["child-name"]} בן ${req.body["parent-name"]}`,
      time: new Date()
    };
    const memorizeNames = await writeContentToFile(
      "memorial-names",
      newMemrileName
    );
  } catch (ex) {
    console.log(ex);
  }
};

module.exports = {
  addMemorialScreen: addMemorialScreen,
  getMemorialNames: getMemorialNames,
  addMemrizeNames: addMemrizeNames
};
