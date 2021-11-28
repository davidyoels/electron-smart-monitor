const fetch = require("electron-fetch").default;
const zmanimKeys = require("../utils/keys/zmanim-keys");
const { geo_location } = require("../utils/consts/geolocation");
const { baseApiUrl } = require("../utils/consts/baseApiUrl");
const { getTodayDateFormat } = require("../helpers/moment-times");

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
        if (!Object.keys(zmanimKeys).includes(time)) continue;
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
