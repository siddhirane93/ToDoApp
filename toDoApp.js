const fs = require("fs");
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
const filePath = "toDoList.json";

function fileReader(filePath) {
  const rawData = fs.readFileSync(filePath);

  if (rawData) {
    let parsedJson = JSON.parse(rawData);
    return parsedJson;
  }
}

let parsedJson = fileReader(filePath);
console.log(parsedJson);
let objNewTask = {};

function addNewToDo(title) {
  objNewTask.id = parsedJson.length + 1;
  objNewTask.title = title;
  let currentDate = `${day}-${month}-${year}`;
  objNewTask.date = currentDate;
  objNewTask.status = "open";
  //console.log("inside addnewtodo func", objNewTask);
  parsedJson.push(objNewTask);
  fs.writeFileSync(filePath, JSON.stringify(parsedJson));
  //console.log(parsedJson);
  return parsedJson;
}

addNewToDo("putOnGit");
console.log(fileReader("toDoList.json"));
