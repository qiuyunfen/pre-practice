'use strict';

function countSameElements(collection) {
  let resultlist = [];
  collection.forEach(item => {
    let items = item.split('-');
    let obj = findObject(resultlist, items[0]);
    if(obj) {
      items.length > 1 ? obj.count += parseInt(items[1]) : obj.count++;
    } else {
      items.length > 1 ? 
        resultlist.push({key: items[0], count: parseInt(items[1])}): 
        resultlist.push({key: item, count: 1});
    }
  })
  return resultlist;
}

function findObject(resultlist, item) {
  for(let obj of resultlist) {
    if(obj.key == item){
      return obj;
    }
  }
}

