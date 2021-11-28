const { geo_location } = require("../utils/consts/geolocation");
const fetch = require("electron-fetch").default;
const { baseApiUrl } = require("../utils/consts/baseApiUrl");
const { shabbatTimesKeys } = require("../utils/keys/shabat-times-keys");

const {
  shabbatDayTimes,
  shabbatEveningTimes
} = require("../utils/keys/static-shabbat-keys");
const { getTodayPrayTimes } = require("./pray-day-times.data.");

const fetchShabatData = async () => {
  return fetch(`${baseApiUrl}/shabbat?cfg=json&geonameid=${geo_location}&&M=on`)
    .then((resonse) => resonse.json())
    .then((data) => {
      const dataItems = data["items"];
      const sahhabtTimesInHebrew = {};
      const holidaysTimesInHeberw = {};
      let dataItemCategory;
      let shabbatTimeKey;
      let shabbatTimeValue;
      for (let dataItem of dataItems) {
        dataItemCategory = dataItem["category"];
        shabbatTimeKey = shabbatTimesKeys[dataItemCategory];
        if (!Object.keys(shabbatTimesKeys).includes(dataItemCategory)) continue;
        if (dataItemCategory == "parashat") {
          shabbatTimeValue = String(dataItem["hebrew"]);
          sahhabtTimesInHebrew[dataItemCategory] = shabbatTimeValue;
        } else if (dataItemCategory == "holiday") {
          // holidaysTimesInHeberw[dataItem["title"]] = dataItem["hebrew"];
        } else {
          shabbatTimeValue = String(dataItem["title"]);
          shabbatTimeValue = shabbatTimeValue.substring(
            shabbatTimeValue.indexOf(":") + 2
          );

          if (dataItemCategory == "havdalah") {
            for (let shabbatDayTime of shabbatDayTimes) {
              sahhabtTimesInHebrew[shabbatDayTime["text"]] =
                shabbatDayTime["time"];
            }
          }

          sahhabtTimesInHebrew[shabbatTimeKey] = shabbatTimeValue;

          if (dataItemCategory == "candles") {
            for (let shabbatEveningTime of shabbatEveningTimes) {
              sahhabtTimesInHebrew[shabbatEveningTime["text"]] =
                shabbatEveningTime["time"];
            }
          }
        }
      }
      let todayPrayTimeDisplay = {};
      const todayPrayTimes = getTodayPrayTimes();
      for (let todayPrayTime of todayPrayTimes) {
        todayPrayTimeDisplay[todayPrayTime["key"]] = todayPrayTime["value"];
      }

      console.log(holidaysTimesInHeberw);
      return {
        sahhabtTimesInHebrew: sahhabtTimesInHebrew,
        todayPrayTimeDisplay: todayPrayTimeDisplay,
        holidaysTimesInHeberw: holidaysTimesInHeberw
      };
    });
};

module.exports = {
  fetchShabatData: fetchShabatData
};
