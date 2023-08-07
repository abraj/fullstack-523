// Assignment 17: Regular expressions

/*****************************/
// Problem 1

function helloWorld(str) {
  // ...
}

// console.log(helloWorld('hello world'));       // true
// console.log(helloWorld('Hello dear World'));  // true
// console.log(helloWorld('hello!     world'));  // true
// console.log(helloWorld('Hello world!'));      // false
// console.log(helloWorld('Hello Awesome New world')); // true


/*****************************/
// Problem 2

function helloWorld2(str) {
  // ...
}

// console.log(helloWorld2('hello world'));          // true
// console.log(helloWorld2('Hello dear12 World'));   // false
// console.log(helloWorld2('hello     world'));      // true
// console.log(helloWorld2('Hello world!'));         // false
// console.log(helloWorld2('Hello Awesome New world')); // true

/*****************************/
// Problem 3

function ccdToken(str) {
  // ...
}

// console.log(ccdToken('ccd-1234-hello'));  // true
// console.log(ccdToken('cd-1234-Hello99')); // true
// console.log(ccdToken('cd-123-hello'));    // false
// console.log(ccdToken('d-1234-hello'));    // false
// console.log(ccdToken('ccd_12345_Ola91')); // false
// console.log(ccdToken('cd-12345-Ola91'));  // true

/*****************************/
// Problem 4

function validCamelCase(str) {
  // ...
}

// console.log(validCamelCase('variable'));      // true
// console.log(validCamelCase('myVariable2'));   // true
// console.log(validCamelCase('my_variable3'));  // false
// console.log(validCamelCase('MyVariable4'));   // false
// console.log(validCamelCase('5thVariable'));   // false
// console.log(validCamelCase('my6thVariable')); // true

/*****************************/
// Problem 5

function validSnakeCase(str) {
  // ...
}

// console.log(validSnakeCase('variable'));      // true
// console.log(validSnakeCase('myVariable2'));   // false
// console.log(validSnakeCase('my_variable3'));  // true
// console.log(validSnakeCase('MyVariable4'));   // false
// console.log(validSnakeCase('5thVariable'));   // false
// console.log(validSnakeCase('6th_variable'));  // false
// console.log(validSnakeCase('_7th_variable')); // true
// console.log(validSnakeCase('my_8_variable')); // true
// console.log(validSnakeCase('__my_variable')); // false
// console.log(validSnakeCase('my__variable'));  // false

/*****************************/
// Problem 6

function matchEmail(str) {
  // ...
}

// console.log(matchEmail('abhi@raj.me'));             // true
// console.log(matchEmail('abhi.raj.web@gmail.com'));  // true
// console.log(matchEmail('John.Doe@google.com'));     // true
// console.log(matchEmail('john9@google.com'));        // false
// console.log(matchEmail('john.doe12@gmail.com'));    // false
// console.log(matchEmail('john.doe@gmail.co.in'));    // false

/*****************************/
// Problem 7

function validUsername(str) {
  // ...
}

// console.log(validUsername('abraj_4317')); // true
// console.log(validUsername('ab_raj'));     // true
// console.log(validUsername('ab_raj47'));   // false
// console.log(validUsername('ab-raj'));     // false
// console.log(validUsername('ab7_raj'));    // false
// console.log(validUsername('ab_Raj'));     // false

/*****************************/
// Problem 8

function lastHelloIndex(str) {
  // ...
}

// console.log(lastHelloIndex('my world hello'));
// //> 9
// console.log(lastHelloIndex('my hello world Hello'));
// //> 15
// console.log(lastHelloIndex('my hello world Hello HELLO!'));
// //> 21
// console.log(lastHelloIndex('my helllo world'));
// //> -1
