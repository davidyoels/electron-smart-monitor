const getJoyNewsBase = (callback) => {
  fetch("/joys-news/get-joys-news")
    .then((response) => response.json())
    .then((data) => {
      callback(data);
    });
};

const getJoysNews = () => {
  getJoyNewsBase((data) => {
    let joys_news_data = "";
    for (let index in data.joysNews) {
      joys_news_data += `<text class="assistant-s-2-5">${data.joysNews[index].name}</text><br/>`;
      joys_news_data += `*`;
    }
    document.getElementById("joys-news-data").innerHTML = joys_news_data;
    document.getElementById("joys-news-data").innerHTML += joys_news_data;
  });
};

const getJoysNewsList = () => {
  getJoyNewsBase((data) => {
    let joys_news_data = "";
    for (let index in data.joysNews) {
      joys_news_data += `<text class="assistant-s-2-5">${data.joysNews[index].name}</text><br/>`;
      joys_news_data += `*`;
    }
    document.getElementById("joys-news-data").innerHTML = joys_news_data;
    document.getElementById("joys-news-data").innerHTML += joys_news_data;
  });
};

const deleteJoyNew = async (jowNewName, joyNewDate) => {
  return fetch("/joys-news/joy-name", {
    method: "DELETE",
    redirect: "follow",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      joyNew: {
        jowNewName: jowNewName,
        joyNewDate: joyNewDate,
      },
    }),
  }).then((res) => {
    return res.data;
  });
};
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
