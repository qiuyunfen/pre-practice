'use strict';
//统计次数
//是否存在，逢3剪1
//返回结果
function createUpdatedCollection(collectionA, objectB) {
  let resultList = [];
  let objectBVal = objectB.value;
  collectionA.forEach(item => {
    let keycount = item.split('-');
    let obj = findObject(resultList, keycount[0]);
    if(obj) {
      keycount.length > 1 ? obj.count += parseInt(keycount[1]) : obj.count++;
    } else {
      keycount.length > 1 ? resultList.push({key: keycount[0], count: parseInt(keycount[1])}):resultList.push({key: item, count: 1});
    }
  })

  resultList.forEach(item => {
    if(objectBVal.indexOf(item.key) != -1) {
      let num = Math.floor(item.count / 3);
      item.count -= num;
    }
  })
  return resultList;
}

function findObject(resultList, item) {
  for(let obj of resultList) {
    if(obj.key == item)return obj;
  }
}
