const timeScreenTexts = require("../utils/i18n/he-IL");
const {
  readFileContent,
  writeContentToFile,
  reWriteContentToFile,
} = require("../utils/files/file-actions");

const addJoysNewsScreen = async (req, res, next) => {
  readFileContent("joys-news", (data) => {
    res.render("addJoyNewsScreen", {
      timeScreenTexts: timeScreenTexts,
      joysList: data["joysNews"],
    });
  });
};

const getJoysNews = async (req, res, next) => {
  readFileContent("joys-news", (data) => {
    res.status(200).json(data);
  });
};

const addJoysNews = async function (req, res, next) {
  try {
    const newJosyNews = {
      name: req.body["new-joys-news"],
      time: new Date(),
    };
    writeContentToFile(
      "joys-news",
      "joysNews",
      newJosyNews,
      (joysData) => {
        res.render("addJoyNewsScreen", {
          timeScreenTexts: timeScreenTexts,
          joysList: joysData.joysNews,
        });
      }
    );
  } catch (ex) {
    console.log(ex);
  }
};

const getJoysList = async function (req, res, next) {
  try {
    const newJosyNews = {
      name: req.body["new-joys-news"],
      time: new Date(),
    };
    return await readFileContent("joys-news", (joysNews) => {
      return joysNews;
    });
  } catch (ex) {
    console.log(ex);
  }
};

const deleteJoyName = async function (req, res, next) {
  try {
    console.log("delete");
    
    await readFileContent("joys-news", (data) => {
      let joyNew = req.body["joyNew"];
      let jowNewName = joyNew["jowNewName"];
      let joyNewDate = joyNew["joyNewDate"];
      let joyToDelete = data["joysNews"].filter(
        (item) => item.name != jowNewName || item.time != joyNewDate
      );
      console.log(joyToDelete);
      if (joyToDelete.length > 0) {
        reWriteContentToFile("joys-news", "joysNews", joyToDelete, (joysData) => {
          res.render("addJoyNewsScreen", {
            timeScreenTexts: timeScreenTexts,
            joysList: joysData.joysNews,
          });
        });
      }
    });
  } catch (ex) {
    console.log(ex);
  }
};

module.exports = {
  addJoysNewsScreen: addJoysNewsScreen,
  getJoysNews: getJoysNews,
  addJoysNews: addJoysNews,
  getJoysList: getJoysList,
  deleteJoyName: deleteJoyName,
};
