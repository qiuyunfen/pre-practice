'use strict';

function collectSameElements(collectionA, objectB) {
  const value = objectB.value;
  let result = collectionA.map(item => {
    if(value.includes(item.key))return item.key;
  }).filter(v => v);
  return result;
}
