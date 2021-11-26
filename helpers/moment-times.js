const moment = require("moment");

moment.locale("he");

const getTodayDate = () => {
  return moment().format("L");
};

const getCurrentTime = () => {
  return moment().format("LTS");
};

const getTodayDateFormat = () => {
  return moment().format("YYYY-MM-DD");
};

module.exports = {
  getTodayDate: getTodayDate,
  getTodayDateFormat: getTodayDateFormat,
  getCurrentTime: getCurrentTime
};
