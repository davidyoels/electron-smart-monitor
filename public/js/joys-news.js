const getMemorizeNames = () => {
  fetch("/memorial/getJoysNews")
    .then((response) => response.json())
    .then((data) => {
      const middleMemrialNames = data.memorizeNames.length / 2;
      let memorial_names_right = "";
      let memorial_names_left = "";
      for (let index in data.memorizeNames) {
        if (index < middleMemrialNames) {
          memorial_names_right += `<text>${data.memorizeNames[index].name}</text>`;
        } else {
          memorial_names_left += `<text>${data.memorizeNames[index].name}</text>`;
        }
      }

      // document.getElementById("joys-news-right").innerHTML =
      //   memorial_names_right;
      // document.getElementById("joys-news-left").innerHTML = memorial_names_left;
      // id="memorial-names-right"
    });
};
