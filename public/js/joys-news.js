const socket = io();

socket.on("add_joys_news", (new_joy) => {
  const tag = document.createElement("text");
  const text = document.createTextNode(new_joy);
  const star = document.createTextNode("*");
  tag.appendChild(text);
  tag.className = "assistant-s-2-5";
  document.getElementById("joys-news-data").appendChild(tag);
  document.getElementById("joys-news-data").appendChild(star);
});
