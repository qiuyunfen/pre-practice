'use strict';
//统计次数
//是否存在，逢3剪1
//返回结果
function createUpdatedCollection(collectionA, objectB) {
  let resultList = [];
  let objectBVal = objectB.value;
  collectionA.forEach(item => {
    let obj = findObject(resultList, item);
    obj ?  obj.count++ : resultList.push({key: item, count: 1});
  })
  resultList.forEach(obj => {
    if(objectBVal.indexOf(obj.key) != -1) {
      let num = Math.floor(obj.count / 3);
      obj.count -= num;
    }
  })
  return resultList;
}

function findObject(resultList, item) {
  for(let obj of resultList) {
    if(obj.key == item) {
      return obj;
    }
  }
}
