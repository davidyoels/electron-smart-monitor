const { geo_location } = require("../utils/consts/geolocation");
const fetch = require("electron-fetch").default;
const { baseApiUrl } = require("../utils/consts/baseApiUrl");
const { shabbatTimesKeys } = require("../utils/keys/shabat-times-keys");
const { HEBCAL_KEYS } = require("../utils/keys/hebcal_keys");

const {
  shabbatDayTimes,
  shabbatEveningTimes
} = require("../utils/keys/static-shabbat-keys");
const { getTodayPrayTimes } = require("./pray-day-times.data");

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
        dataItemCategory = dataItem[HEBCAL_KEYS.CATEGORY];
        shabbatTimeKey = shabbatTimesKeys[dataItemCategory];
        if (!Object.keys(shabbatTimesKeys).includes(dataItemCategory)) continue;
        switch (dataItemCategory) {
          case HEBCAL_KEYS.PARASHAT:
            shabbatTimeValue = String(dataItem[HEBCAL_KEYS.HEBREW]);
            sahhabtTimesInHebrew[dataItemCategory] = shabbatTimeValue;
            break;
          case HEBCAL_KEYS.HOLIDAY:
            const dataItemSubCategory = dataItem[HEBCAL_KEYS.SUBCAT];
            if (dataItemSubCategory == HEBCAL_KEYS.SHABBAT)
              holidaysTimesInHeberw[
                `${dataItemCategory}_${dataItemSubCategory}`
              ] = dataItem[HEBCAL_KEYS.HEBREW];
            console.log(
              `${dataItemCategory}_${dataItemSubCategory}`,
              dataItem[HEBCAL_KEYS.HEBREW]
            );
            break;
          default:
            shabbatTimeValue = String(dataItem[HEBCAL_KEYS.TITLE]);
            shabbatTimeValue = shabbatTimeValue.substring(
              shabbatTimeValue.indexOf(":") + 2
            );
            switch (dataItemCategory) {
              case HEBCAL_KEYS.HAVDALAH:
                for (let shabbatDayTime of shabbatDayTimes) {
                  sahhabtTimesInHebrew[shabbatDayTime[HEBCAL_KEYS.TEXT]] =
                    shabbatDayTime[HEBCAL_KEYS.TIME];
                }
              case HEBCAL_KEYS.CANDELS:
                for (let shabbatEveningTime of shabbatEveningTimes) {
                  sahhabtTimesInHebrew[shabbatEveningTime[HEBCAL_KEYS.TEXT]] =
                    shabbatEveningTime[HEBCAL_KEYS.TIME];
                }
              default:
                sahhabtTimesInHebrew[shabbatTimeKey] = shabbatTimeValue;
            }
        }
      }

      return {
        sahhabtTimesInHebrew: sahhabtTimesInHebrew,
        holidaysTimesInHeberw: holidaysTimesInHeberw
      };
    });
};

module.exports = {
  fetchShabatData: fetchShabatData
};
