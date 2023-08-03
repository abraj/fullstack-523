// Assignment 6.3: Using functions

/*
// Problem 1

// Fill in the blank, to get the expected output
function foo(n) {
  console.log(....)
}
foo(2);
foo(4);
//> 4
//> 8
//> 16
//> 64

*/

/*
// Problem 2

// Fill in the blank, to get the expected output

let num = 1;
const printNext = () => ...;
const [a, b, c] = [printNext(num), printNext(num), printNext(num)];
console.log(a, b, c);
//> 2 3 4

*/

/*
// Problem 3

// Fill in the blanks, to print the comma-separated list in reverse order

function printReverse() {
  ...
}
const arr = [1, 2, 7, 19];
printReverse(arr);
//> 19,7,2,1 

*/

/*
// Problem 4

// function foo(a, b) {
//   return a + b;
// }

// Fill in the blank with an arrow function such that the behaviour of `foo` is exactly same as the above defined function.
// NOTE: you are not allowed to use the `return` keyword in the arrow function.
const foo = ...
console.log(foo(2, 3));
//> 5

*/

/*
// Problem 5

// Fill in the blanks below so that the `countFunctions` returns the total number of functions present inside the passed array `arr`
function countFunctions(arr) {
  // ...
}

const func1 = function() {}
const func2 = () => {};

function func3() {}

countFunctions(['function', 5, func1, func3, 'foo', func2]);
//> 3

*/

/*
// Problem 6

// Fill in the blank to get the expected output

let value = 0;

function foo(k) {
  console.log(value);
  // ...
}

foo(1);
foo(2);
//> 0
//> 5

*/

/*
// Problem 7

// Fill in the blank to get the expected output

let value = 0;

function foo(k) {
  console.log(value);
  // ...
}

foo(1);
foo(2);
foo(3);
foo(4);
foo(5);
//> 0
//> 0
//> 10
//> 10
//> 15

*/

/*
// Problem 8

// Fill in the blank to get the expected output

function foo(k) {
  console.log(k);
  // ...
}

let a = foo(10);
let b = foo(a);
let c = foo(b);
//> 10
//> 11
//> 12
*/

/*
// Problem 9

// Fill in the blank to get the expected output

function foo(k) {
  console.log(k);
  // ...
}

foo(foo(foo(10)));
//> 10
//> 5
//> 0

*/

/*
// Problem 10

// Fill in the blank to get the expected output

let val = 10;

function hello() {
  console.log(...);
}

hello();
console.log(val);
hello();
console.log(val);
//> 10
//> 11
//> 11
//> 12

*/

/*
// Problem 11

// Fill in the blank to get the expected output

let val = 10;
function foo(k) {
  return val + k;
}

console.log(foo(...));
//> 4

*/

/*
// Problem 12

// Fill in the blanks to get the expected output

function foo(a) {
  return (b) => {
    return a + b;
  };
}

const bar = foo(...);
console.log(bar(...));
console.log(bar(...));
console.log(bar(...));
//> 15
//> 16
//> 17

*/

/*
// Problem 13

// Fill in the blank to get the expected output

function foo() {
  let a = 0;
  return () => ...;
}

const bar = foo();
console.log(bar());
console.log(bar());
console.log(bar());
//> 5
//> 10
//> 15

*/

/*
// Problem 14

// Fill in the blanks to get the expected output

const foo = function (a) {
  console.log('Hello');
  if (a > 5) return;
  console.log('World');
};

foo(...);
//> Hello
//> World

foo(...);
//> Hello

*/

/*
// Problem 15

// Fill in the blanks to get the expected output

const foo = (a) => {
  if (a > 5) {
    console.log('Hello');
  } else if (a < 0) {
    console.log('There');
  }
  console.log('World');
};

foo(...);
//> Hello
//> World

foo(...);
//> World

foo(...);
//> There
//> World

*/


/*
// Problem 16

// Fill in the blanks with a, b, and c to get the expected output

let a = 2;
let b = 3;
let c = 'hello';

const x = ... + ... + ...;
const y = ... + ... + ...;
console.log(x, y);
//> 5hello hello32

*/

/*
// Problem 17

// Fill in the blanks to get the expected output

If temperature is less than 10 then it's `cold`.
Cold tea and coffee are called `Ice Tea` and `Cold Coffee` respectively.

printBeverageName(name, temperature) {
  // ....
}

printBeverageName('Tea', 5);
//> Ice Tea
printBeverageName('Tea', 65);
//> Tea
printBeverageName('Coffee', 75);
//> Coffee
printBeverageName('Coffee', 0);
//> Cold Coffee

*/
