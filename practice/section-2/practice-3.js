'use strict';

function countSameElements(collection) {
  let resultList = [];
  collection.forEach(item => {
    let keyCount = splitStr(item);
    let obj = findObject(resultList, keyCount[0]);
    if(obj){
      obj.summary += parseInt(keyCount[1]);
    } else {
      resultList.push({name: keyCount[0], summary: parseInt(keyCount[1])});
    }
  })
  return resultList;
}

function splitStr(str) {
  let keyCount = [];
  if(str.indexOf(':') != -1) {
    keyCount.push(str.split(':')[0]);
    keyCount.push(str.split(':')[1]);
  } else if(str.indexOf('-') != -1) {
    keyCount.push(str.split('-')[0]);
    keyCount.push(str.split('-')[1]);
  } else if(str.indexOf('[') != -1) {
    keyCount.push(str.split('[')[0]);
    keyCount.push(str.split('[')[1].substring(0, str.split('[')[1].length - 1));
  } else{
    keyCount.push(str, 1);
  }
  return keyCount;
}

function findObject(resultList, item) {
  for(let obj of resultList) {
    if(obj.name == item)return obj;
  }
}
