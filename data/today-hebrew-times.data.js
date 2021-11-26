const fetch = require("electron-fetch").default;
const { baseApiUrl } = require("../utils/consts/baseApiUrl");

const fetchTodayHebrewDate = async () => {
  return fetch(`${baseApiUrl}/converter?cfg=json`)
    .then((resonse) => resonse.json())
    .then((data) => {
      return data["hebrew"];
    });
};

module.exports = {
  fetchTodayHebrewDate: fetchTodayHebrewDate
};
