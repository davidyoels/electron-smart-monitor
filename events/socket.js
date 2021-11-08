const express = require("express");
const socket = require("socket.io");

// App setup
const PORT = 5000;
const app = express();
const serverSocket = app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

// Socket setup
const io = socket(server);

module.exports = {
  socketIO: io
};
