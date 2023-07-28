// Assignment 13: Array Operations 3

/*******************************/
// Problem 1:

function weirdReduce(arr) {
  // ...
}

// const ret1 = weirdReduce([5, 7, 4, 19, 28, 16, 3]);
// console.log(ret1);  // [ 4, 28, 16 ]

// const ret2 = weirdReduce([5, 7, 4, 19, 28, 16, 3, 8]);
// console.log(ret2);  // '4,28,16,8'

// const ret3 = weirdReduce([5, 7, 4, 19, 28, 16, 8, 9]);
// console.log(ret3);  // [ 4, 28, 16, 8]

/*******************************/
// Problem 2:

function blackBox(arr) {
  const arr1 = arr;
  const arr2 = [];

  arr1.forEach(val => arr2.push(val));
  for (const val of arr1) { arr2.push(val) }

  const a = arr1.length === arr2.length
  const b = arr1.length + arr2.length;
  return [a, b];
}

// const arr = ...
// const [x, y] = blackBox(arr);
// console.log(x);  // true
// console.log(y);  // 10
