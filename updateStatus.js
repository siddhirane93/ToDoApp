const fileReader = require("./toDoApp");

let objNewStatus = {};
let isUpdated = false;
const filePath = "toDoList.json";
const fs = require("fs");

function updateStatus(statusData) {
  //updates the status of existing todos
  objNewStatus = statusData;
  let existingData = fileReader();
  for (i = 0; i < existingData.length; i++) {
    let currIndexData = existingData[i];
    if (currIndexData.id == objNewStatus.id) {
      existingData[i]["status"] = objNewStatus.status;
      isUpdated = true;
      break;
    }
  }
  if (isUpdated) {
    console.log("updated status", existingData);
    fs.writeFileSync(filePath, JSON.stringify(existingData));
    return existingData;
  } else {
    let idNotFound = {
      error: "No Such ToDo Found, Please enter a valid todo ID",
    };
    return idNotFound;
  }
}


module.exports = updateStatus;
