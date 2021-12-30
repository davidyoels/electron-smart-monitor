const getLessons = () => {
  fetch("/lessons/get-lessons")
    .then((response) => response.json())
    .then((data) => {
      let lessons_data = "";
      for (let index in data.lessons) {
        lessons_data += `<text class="assistant-s-2-5">${data.lessons[index].name}</text><br/>`;
        lessons_data += `*`;
      }
      document.getElementById("lessons").innerHTML = lessons_data;
      document.getElementById("lessons").innerHTML += lessons_data;
    });
};
