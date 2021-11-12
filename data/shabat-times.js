// const zmanimKeys = require("../utils/keys/zmanim-keys");
const { geo_location } = require("../utils/consts/geolocation");
const fetch = require("electron-fetch").default;

const fetchShabatData = async () => {
  return fetch(
    `https://www.hebcal.com/shabbat?cfg=json&geonameid=${geo_location};m=38;c=on;maj=on;nx=on;`
  )
    .then((resonse) => resonse.json())
    .then((data) => {
      console.log(data);
    });
};

module.exports = {
  fetchShabatData: fetchShabatData
};
