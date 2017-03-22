'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let objectBVal = objectB.value;
  collectionA.forEach(obj => {
    objectBVal.indexOf(obj.key) != -1 && obj.count--;
  })
  return collectionA;
}
