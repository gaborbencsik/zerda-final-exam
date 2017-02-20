let myArray = [
  [1,2,3,4,5],
  [1,2,3,4,5,1],
  [1,2,3,4,5,2],
  [1,2,3,4,5,3]
];

function countRows (array) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    counter += array[i];
  };
  return counter;
};

function countAll (arrayList) {
  let newArrayList = [];
  for (let i = 0; i < arrayList.length; i++) {
    newArrayList.push(countRows(arrayList[i]));
  };
  return newArrayList;
};

console.log(countAll(myArray));
