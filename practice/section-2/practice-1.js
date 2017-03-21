'use strict';
//测试案例：并不一定相同元素放在一起
// function countSameElements(collection) {
//   let result = [];
//   let recoder = collection.filter((item, index, arr) => {
//     if(index+1 < arr.length && item != arr[index+1]) return true;
//     if(index+1 == arr.length) return true;
//   });
//   recoder.forEach(item => {
//     let pre = collection.indexOf(item);
//     let later = collection.lastIndexOf(item);
//     result.push({key: item, count: later-pre+1})
//   })
//   return result;
// }


function countSameElements(collection) {
  let result = [];
  let obj = [];
  collection.forEach(item => {
    if(!obj.includes(item)) { 
        obj.push(item);
        result.push({key: item, count: 0});
    } 
   });
   collection.forEach(item => {
     result.forEach(v => v.key == item && v.count++);
   });
   return result;
}

// function countSameElements(collection) {
//   return [...new Set(collection)].map(v => {
//     return {
//       key: v,
//       count: collection.filter(item => v == item).length
//     }
//   })
// }