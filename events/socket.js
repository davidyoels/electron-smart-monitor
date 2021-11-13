const socketIO = require("socket.io");
const schedule = require("node-schedule");
const { fetchZmanimData } = require("../data/zmanim");
const { fetchShabatData } = require("../data/shabat-times");

const scheduleJob = (name, expression, callback) => {
  schedule.scheduleJob(name, expression, callback);
};

const scheduleZmanimData = (io) => {
  scheduleJob("m-job", "*/10 * * * * *", () => {
    fetchZmanimData().then((zmanim_data) => {
      // console.log("emit touch", new Date().getSeconds());
      io.emit("zmanim", zmanim_data);
    });
  });
};

const scheduleShabatTimesData = (io) => {
  scheduleJob("m-job", "*/10 * * * * *", () => {
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
