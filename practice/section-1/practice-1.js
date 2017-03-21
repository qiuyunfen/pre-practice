'use strict';

function collectSameElements(collectionA, collectionB) {
  var commonObj = [];
  for(var i = 0; i < collectionA.length; i++) {
    var ele = collectionA[i];
    if(collectionB.indexOf(ele) != -1) {
      commonObj.push(ele);
    }
  }
  return commonObj;
}
