const schedule = require("node-schedule");
const { fetchZmanimData } = require("../data/zmanim");

const scheduleJob = (cb) => {
  schedule.scheduleJob("m-job", "*/30 * * * * *", () => {
    // fetchZmanimData().then((data) => cb(data));
  });
};

module.exports = {
  scheduleJob: scheduleJob
};
