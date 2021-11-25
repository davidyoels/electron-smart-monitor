const socketIO = require("socket.io");
const schedule = require("node-schedule");
const { fetchZmanimData } = require("../data/zmanim.data");
const { fetchShabatData } = require("../data/shabat-times.data");

const scheduleJob = (name, expression, callback) => {
  schedule.scheduleJob(name, expression, callback);
};

const scheduleZmanimData = (io) => {
  fetchZmanimData().then((zmanim_data) => {
    console.log(new Date().toLocaleTimeString());
    io.emit("zmanim", zmanim_data);
  });
  scheduleJob("m-job", "01 00 00 * * *", () => {
    fetchZmanimData().then((zmanim_data) => {
      console.log(new Date().toLocaleTimeString());
      io.emit("zmanim", zmanim_data);
    });
  });
};

const scheduleShabatTimesData = (io) => {
  fetchShabatData().then((sahhabat_times_data) => {
    io.emit("sahhabat_times", sahhabat_times_data);
  });
  scheduleJob("m-job", "01 00 00 * * 7", () => {
    fetchShabatData().then((sahhabat_times_data) => {
      io.emit("sahhabat_times", sahhabat_times_data);
    });
  });
};

const initalFetchData = (io) => {
  scheduleZmanimData(io);
  scheduleShabatTimesData(io);
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
