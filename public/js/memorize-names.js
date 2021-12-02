const getMemorizeNames = () => {
  fetch("/memorial/get-memoriale-names")
    .then((response) => response.json())
    .then((data) => {
      let memorial_names_data = "";
      for (let index in data.memorizeNames) {
        memorial_names_data += `<text>${data.memorizeNames[index].name}</text>`;
      }

      document.getElementById("memorial-names-data").innerHTML =
        memorial_names_data;
      document.getElementById("memorial-names-data").innerHTML +=
        memorial_names_data;
      // id="memorial-names-right"
    });
};
