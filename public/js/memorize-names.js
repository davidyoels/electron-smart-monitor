const getMemorizeNames = () => {
  fetch("/memorial/get-memoriale-names")
    .then((response) => response.json())
    .then((data) => {
      let memorial_names_html = "";
      for (let index in data.memorizeNames) {
        memorial_names_html += '<text class="assistant-s-2-5">';
        memorial_names_html += `${data.memorizeNames[index].name} &nbsp`;
        memorial_names_html += `</text>`;
      }
      document.getElementById("memorial-names").innerHTML = memorial_names_html;
    });
};
