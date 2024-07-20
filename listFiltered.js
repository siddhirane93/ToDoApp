const fileReader = require('./toDoApp.js');

function listFiltered(substr) {
    //takes the status as input and gets all done/open todo's and returns them
    //let substr = "done";
    let listAllData = fileReader();
   
    let listFilteredData = [];
    listFilteredData = listAllData.filter(
      function (element){
        return element["status"]== substr ? true : false;
      }
    )
  return listFilteredData;
}
//     //let length = listAllData.length; // outdated -> manual way to do whats done in listFiltered function using filters
//     // for(i=0; i<length; i++){
//     //   let currentIndexData = {};
//     //   currentIndexData = listAllData[i];
//     //   if(currentIndexData["status"]==substr){
//     //     listDoneData.push(currentIndexData);
//     //   }
//     // }
//     console.log(listFilteredData);
//     return listFilteredData;
//   }
  
  module.exports = listFiltered;