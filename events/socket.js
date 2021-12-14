const socketIO = require("socket.io");
const schedule = require("node-schedule");

const { fetchZmanimData } = require("../data/zmanim.data");
const { fetchShabatData } = require("../data/shabat-times.data");
const { fetchTodayHebrewDate } = require("../data/today-hebrew-times.data");

const scheduleDaily = "01 00 00 * * *";
const scheduleWeekly = "01 00 00 * * 7";

const scheduleJob = (name, expression, callback) => {
  schedule.scheduleJob(name, expression, callback);
};

// every day at 00:00:01
const scheduleZmanimData = (io) => {
  fetchZmanimData().then((zmanim_data) => {
    console.log(new Date().toLocaleTimeString());
    io.emit("zmanim", zmanim_data);
  });
  scheduleJob("m-job", scheduleDaily, () => {
    fetchZmanimData().then((zmanim_data) => {
      console.log(new Date().toLocaleTimeString());
      io.emit("zmanim", zmanim_data);
    });
  });
};

// every week at sunday 00:00:01
const scheduleShabatTimesData = (io) => {
  fetchShabatData().then((sahhabat_times_data) => {
    io.emit("sahhabat_times", sahhabat_times_data);
  });
  scheduleJob("m-job", scheduleWeekly, () => {
    fetchShabatData().then((sahhabat_times_data) => {
      io.emit("sahhabat_times", sahhabat_times_data);
    });
  });
};

const scheduleTodayHebrewDate = (io) => {
  fetchTodayHebrewDate().then((todayHebrewDate) => {
    io.emit("today_hebrew_date", todayHebrewDate);
  });
  scheduleJob("m-job", scheduleDaily, () => {
    fetchTodayHebrewDate().then((todayHebrewDate) => {
      io.emit("today_hebrew_date", todayHebrewDate);
    });
  });
};

const initalFetchData = (io) => {
  scheduleZmanimData(io);
  scheduleShabatTimesData(io);
  scheduleTodayHebrewDate(io);
};

const createSocketIO = (appServer) => {
  const io = socketIO(appServer);
  io.on("connection", (socket) => {
    console.log("a user connected");
    initalFetchData(io);
  });
};

module.exports = {
  createSocketIO: createSocketIO
};
