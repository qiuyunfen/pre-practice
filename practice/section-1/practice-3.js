'use strict';

// function collectSameElements(collectionA, objectB) {
//   let result = [];
//   const value = objectB.value;
//   collectionA.forEach(item => value.includes(item) && result.push(item));
//   return result;
// }

function collectSameElements(collectionA, objectB) {
  const value = objectB.value;
  return collectionA.map(item => {
    if(collectionA.includes(item)) return item;
  }).filter(v => v);
  return result;
}