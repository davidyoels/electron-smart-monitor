const zmanimKeys = require("../utils/keys/zmanim-keys");
const { geo_location } = require("../utils/consts/geolocation");
const fetch = require("electron-fetch").default;
const { baseApiUrl } = require("../utils/consts/baseApiUrl");
const { date } = require("pizzip/js/defaults");
const { getTodayDateFormat } = require("../helpers/moment-times");

let i = 0;

const generatePreviousDayDate = (date) => {
  if (i == 0) {
    date.setDate(date.getDate() + 1);
    i = 1;
  } else {
    date.setDate(date.getDate() - 1);
    i = 0;
  }
  return date;
};

const fetchZmanimData = async () => {
  const todayDate = getTodayDateFormat();
  return fetch(
    `${baseApiUrl}/zmanim?cfg=json&geonameid=${geo_location}&date=${todayDate}`
  )
    .then((resonse) => resonse.json())
    .then((data) => {
      const timesInHebrew = {};
      const times = data["times"];
      let extractHebrewKey;
      let time;
      let newTime = new Date();
      for (time in times) {
        extractHebrewKey = zmanimKeys[time];
        if (extractHebrewKey) {
          newTime = new Date(times[time]);
          newTime = newTime.toLocaleTimeString("he-IL", {
            hour12: false,
            hour: "numeric",
            minute: "numeric"
          });
          timesInHebrew[extractHebrewKey] = newTime;
        }
      }
      return timesInHebrew;
    });
};

module.exports = {
  fetchZmanimData: fetchZmanimData
};
