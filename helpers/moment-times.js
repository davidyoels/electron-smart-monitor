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

const getCurrentYear = () => {
  return moment().year();
};

const getCurrentMonth = () => {
  return moment().year();
};

const getCurrentDay = () => {
  return moment().year();
};

module.exports = {
  getTodayDate: getTodayDate,
  getTodayDateFormat: getTodayDateFormat,
  getCurrentTime: getCurrentTime,
  getCurrentYear: getCurrentYear,
  getCurrentMonth: getCurrentMonth,
  getCurrentDay: getCurrentDay
};
