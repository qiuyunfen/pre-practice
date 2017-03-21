'use strict';

// function collectSameElements(collectionA, collectionB) {
//   var commonRes = [];
//   for(var item of collectionA) {
//     for(var itemB of collectionB) {
//       if(itemB.indexOf(item) != -1) {
//         commonRes.push(item);
//       }
//     }
//   }
//   return commonRes;
// }

function collectSameElements(collectionA, collectionB) {
  let result = [];
  collectionA.forEach((item) => {
    collectionB.forEach((itemB) => itemB.includes(item) && result.push(item))
  })
  return result;
}
