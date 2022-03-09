const fs = require("fs");

const baseFileRoute = "storage";

const readFileContent = async (filename, cb) => {
  try {
    return fs.access(`storage/${filename}.json`, fs.F_OK, (err) => {
      if (err) {
        res.status(500).json({});
      }
      return fs.readFile(
        `${baseFileRoute}/${filename}.json`,
        "utf8",
        (err, data) => {
          if (err) throw err;
          cb(JSON.parse(data));
        }
      );
    });
  } catch (ex) {
    console.log(err);
    res.status(500).json({});
  }
};

const writeContentToFile = async (filename, key, newData) => {
  try {
    return fs.access(`storage/${filename}.json`, fs.F_OK, (err) => {
      if (err) {
        return fs.writeFile(
          `storage/${filename}.json`,
          JSON.stringify({ key: [newData] }),
          { flag: "wx", encoding: "utf-8" },
          function (err) {
            if (err) throw err;
            return { status: 200, message: "Successed" };
          }
        );
      }
      return fs.readFile(
        `${baseFileRoute}/${filename}.json`,
        "utf8",
        (err, data) => {
          if (err) throw err;
          let prevData = JSON.parse(data);
          prevData[key].push(newData);
          return fs.writeFile(
            `storage/${filename}.json`,
            JSON.stringify(prevData),
            "utf-8",
            function (err) {
              if (err) throw err;
              return { status: 200, message: "Successed" };
            }
          );
        }
      );
    });
  } catch (ex) {
    console.log(err);
    return { status: 500, err: `Cannot read from ${filename} file` };
  }
};

const reWriteContentToFile = async (filename, key, newData) => {
  try {
    return fs.access(`storage/${filename}.json`, fs.F_OK, (err) => {
      if (err) {
        return fs.writeFile(
          `storage/${filename}.json`,
          JSON.stringify({ key: [newData] }),
          { flag: "wx", encoding: "utf-8" },
          function (err) {
            if (err) throw err;
            return { status: 200, message: "Successed" };
          }
        );
      }
      return fs.readFile(
        `${baseFileRoute}/${filename}.json`,
        "utf8",
        (err, data) => {
          if (err) throw err;
          let prevData = {};
          prevData[key] = newData;
          return fs.writeFile(
            `storage/${filename}.json`,
            JSON.stringify(prevData),
            "utf-8",
            function (err) {
              if (err) throw err;
              return { status: 200, message: "Successed" };
            }
          );
        }
      );
    });
  } catch (ex) {
    console.log(err);
    return { status: 500, err: `Cannot read from ${filename} file` };
  }
};

module.exports = {
  readFileContent: readFileContent,
  writeContentToFile: writeContentToFile,
  reWriteContentToFile: reWriteContentToFile,
};
