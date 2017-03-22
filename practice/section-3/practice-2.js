'use strict';
//遍历，是否存在
//逢3剪1
function createUpdatedCollection(collectionA, objectB) {
  let objectBVal = objectB.value;
  collectionA.forEach(obj => {
    if(objectBVal.indexOf(obj.key) != -1) {
      let num = Math.floor(obj.count / 3);
      obj.count -= num;
    }
  })
  return collectionA;
}
