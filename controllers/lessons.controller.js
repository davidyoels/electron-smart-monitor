const timeScreenTexts = require("../utils/i18n/he-IL");
const {
  readFileContent,
  writeContentToFile
} = require("../utils/files/file-actions");


const getLessonsData = async (cb) => {
  readFileContent("lessons", (data) => {
    cb(data);
  });
};

const addLesson = async function (req, res, next) {
  try {
    const newJosyNews = {
      name: req.body["new-lesson"],
      time: new Date()
    };
    const Lessons = await writeContentToFile(
      "joys-news",
      "Lessons",
      newJosyNews
    );
  } catch (ex) {
    console.log(ex);
  }
};

module.exports = {
  addLesson: addLesson,
  getLessonsData: getLessonsData
};
