const fileReader = require('./toDoApp');

let objToDelete = {};
const fs = require("fs");
const filePath = "toDoList.json";
let isDeleted = false;

function deleteToDo(dataToDelete){
  objToDelete = dataToDelete;
  let existingData = fileReader();
  //console.log('before deleting OG Data is this ->>', existingData);
  for(i=0; i<existingData.length; i++){
    let currIndexData = existingData[i];
    console.log(objToDelete.id);
    if(currIndexData.id == objToDelete.id){
        
       existingData.splice(i,1);
       isDeleted = true;
       break;
    }
  }

  if (isDeleted) {
    console.log(existingData);
    fs.writeFileSync(filePath, JSON.stringify(existingData));
    return existingData
  } else {
    let idNotFound = {
      error: "No Such ToDo Found, Please enter a valid todo ID",
    };
    return idNotFound;
  }

}

module.exports = deleteToDo;
