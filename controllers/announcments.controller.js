const timeScreenTexts = require("../utils/i18n/he-IL");
const {
  readFileContent,
  writeContentToFile
} = require("../utils/files/file-actions");

const getAnnouncments = async (cb) => {
  readFileContent("announcments", (data) => {
    cb(data);
  });
};

const addAnnouncments = async function (req, res, next) {
  try {
    const newAnnouncments = {
      name: req.body["new-announcments"],
      time: new Date()
    };
    const announcments = await writeContentToFile(
      "new-announcments",
      "Announcments",
      newAnnouncments
    );
  } catch (ex) {
    console.log(ex);
  }
};

module.exports = {
  getAnnouncments: getAnnouncments,
  addAnnouncments: addAnnouncments
};
