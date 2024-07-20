const fs = require("fs");
const filePath = "toDoList.json";
let parsedJson = fileReader();

function fileReader() {
  //data reader that helps other functions by fetching all current list of To Dos
  const rawData = fs.readFileSync(filePath);

  if (rawData) {
    let parsedJson = JSON.parse(rawData);
    return parsedJson;
  }
}

module.exports = fileReader;