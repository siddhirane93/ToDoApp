const fileReader = require('./toDoApp');

const fs = require("fs");
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let parsedJson = fileReader();
const filePath = "toDoList.json";

let objNewTask = {};
function addNewToDo(title) {
  //input required for todo title, adds a new to do and appends in the json file
  objNewTask.id = Date.now();
  objNewTask.title = title;
  let currentDate = `${day}-${month}-${year}`;
  objNewTask.date = currentDate;
  objNewTask.status = "open";
  parsedJson.push(objNewTask);
  fs.writeFileSync(filePath, JSON.stringify(parsedJson));
  //console.log(parsedJson); // to check the data being returned.
  return parsedJson;
}

module.exports = addNewToDo;