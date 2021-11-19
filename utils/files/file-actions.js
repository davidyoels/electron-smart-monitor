const { json } = require("express/lib/response");

const readFileContent = (filename) => {
  fs.readFile(filename, "utf8", function readFileCallback(err, data) {
    if (err) {
      console.log(err);
    } else {
      obj = JSON.parse(data); //now it an object
      obj.table.push({ id: 2, square: 3 }); //add some data
      json = JSON.stringify(obj); //convert it back to json
      return json;
    }
  });
};

const writeContentToFile = (filename, data) => {
  fs.writeFile(`storage/${filename}`, JSON.stringify(data), "utf8", () => {
    res.status(200).send({ data: "dasda" });
  });
};

module.exports = {
  readFileContent: readFileContent,
  writeContentToFile: writeContentToFile
};
