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

const deleteJoyNew = (jowNewName, joyNewDate) => {
  fetch("/joys-news/joy-name", {
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
  });
};
