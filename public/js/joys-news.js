const getJoysNews = () => {
  fetch("/joys-news/get-joys-news")
    .then((response) => response.json())
    .then((data) => {
      let joys_news_data = "";
      for (let index in data.joysNews) {
        joys_news_data += `<text class="assistant-s-2-5">${data.joysNews[index].name}</text><br/>`;
        joys_news_data += `*`;
      }
      document.getElementById("joys-news-data").innerHTML = joys_news_data;
      document.getElementById("joys-news-data").innerHTML += joys_news_data;
    });
};
