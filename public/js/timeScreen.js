const onload = () => {
  var socket = io.connect();
  socket.on("touch", (data) => {
    console.log("touch");
    document.getElementById("zmanim").innerHTML = "daskjd";
  });
};
