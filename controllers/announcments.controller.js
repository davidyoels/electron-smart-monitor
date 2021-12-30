const timeScreenTexts = require("../utils/i18n/he-IL");
const {
  readFileContent,
  writeContentToFile
} = require("../utils/files/file-actions");

const getAnnouncments = async (req, res, next) => {
  readFileContent("announcments", (data) => {
    res.status(200).json(data);
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
