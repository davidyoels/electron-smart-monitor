const getAnnouncments = () => {
  fetch("/announcments/get-announcments")
    .then((response) => response.json())
    .then((data) => {
      let joys_news_data = "";
      for (let index in data.announcments) {
        //TODO: needs to add condition when the length is 2 or 3
        joys_news_data += `<text class="assistant-s-2-5">${data.announcments[index].name}</text><br/>`;
        joys_news_data += `<text class="assistant-s-2-5"></text><br/>`;
        joys_news_data += `<text class="assistant-s-2-5"></text><br/>`;
        joys_news_data += `<text class="assistant-s-2-5"></text><br/>`;
        joys_news_data += `<text class="assistant-s-2-5"></text><br/>`;
        joys_news_data += `<text class="assistant-s-2-5"></text><br/>`;
        joys_news_data += `*`;
      }
      document.getElementById("announcments").innerHTML = joys_news_data;
      document.getElementById("announcments").innerHTML += joys_news_data;
    });
};
