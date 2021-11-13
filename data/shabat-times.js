// const zmanimKeys = require("../utils/keys/zmanim-keys");
const { geo_location } = require("../utils/consts/geolocation");
const fetch = require("electron-fetch").default;
const { baseApiUrl } = require("../utils/consts/baseApiUrl");
const { shabbatTimesKeys } = require("../utils/keys/shabat-times-keys");

const fetchShabatData = async () => {
  return fetch(`${baseApiUrl}/shabbat?cfg=json&geonameid=${geo_location}&&M=on`)
    .then((resonse) => resonse.json())
    .then((data) => {
      const dataItems = data["items"];
      const sahhabtTimesInHebrew = {};
      let dataItemCategory;
      let shabbatTimeKey;
      let shabbatTimeValue;
      for (let dataItem of dataItems) {
        dataItemCategory = dataItem["category"];
        shabbatTimeKey = shabbatTimesKeys[dataItemCategory];
        if (dataItemCategory == "parashat") {
          shabbatTimeValue = String(dataItem["hebrew"]);
          sahhabtTimesInHebrew["parashat"] = shabbatTimeValue;
        } else {
          shabbatTimeValue = String(dataItem["title"]);
          shabbatTimeValue = shabbatTimeValue.substring(
            shabbatTimeValue.indexOf(":") + 2
          );
          sahhabtTimesInHebrew[shabbatTimeKey] = shabbatTimeValue;
        }
      }
      return sahhabtTimesInHebrew;
    });
};

module.exports = {
  fetchShabatData: fetchShabatData
};
