const zmanimKeys = require("../utils/keys/zmanim-keys");
const { geo_location } = require("../utils/consts/geolocation");
const fetch = require("electron-fetch").default;

const fetchZmanimData = async () => {
  return fetch(
    `https://www.hebcal.com/zmanim?cfg=json&geonameid=${geo_location}&date=2021-11-07`
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
      console.log("This", timesInHebrew);
      return timesInHebrew;
    });
};

module.exports = {
  fetchZmanimData: fetchZmanimData
};
