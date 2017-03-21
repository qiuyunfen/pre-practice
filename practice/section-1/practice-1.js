'use strict';

function collectSameElements(collectionA, collectionB) {
  // var commonObj = [];
  // for(var i = 0; i < collectionA.length; i++) {
  //   var ele = collectionA[i];
  //   if(collectionB.indexOf(ele) != -1) {
  //     commonObj.push(ele);
  //   }
  // }
  // return commonObj;

  var commonObj = [];
  for(var item of collectionA) {//还可以用forEach
    if(collectionB.indexOf(item) != -1) {
      commonObj.push(item);
    }
  }
  return commonObj;
}


