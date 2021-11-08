const socketIO = require("socket.io");
const schedule = require("node-schedule");
const { fetchZmanimData } = require("../data/zmanim");

const scheduleJob = (name, expression, callback) => {
  schedule.scheduleJob(name, expression, callback);
};

const createSocketIO = (appServer) => {
  const io = socketIO(appServer);
  io.on("connection", (socket) => {
    console.log("a user connected");
    scheduleJob("m-job", "*/5 * * * * *", () => {
      fetchZmanimData().then((zmanim_data) => {
        io.emit("touch", zmanim_data);
      });
    });
  });
};

module.exports = {
  createSocketIO: createSocketIO
};
