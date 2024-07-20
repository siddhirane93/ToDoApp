const fileReader = require('./toDoApp.js');
//import { filePath } from './toDoApp';

function listAll() {
  // gets all existing todo's and returns them
  let listAllData = fileReader();
  console.log(listAllData); // to check the data being returned.
  return listAllData;
}

module.exports = { listAll };