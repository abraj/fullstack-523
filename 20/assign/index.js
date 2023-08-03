// Assignment 16: String Operations 2

/**************************/
// Problem 1

function numberStack(nums) {
  // ...
}

// const nums = [5, 28.3, 16.8, 117, 79.5];
// numberStack(nums);
//>   5.0
//>  28.3
//>  16.8
//> 117.0
//>  79.5

// const nums2 = [5, 28.3, 16.85, 17, 79.5];
// numberStack(nums2);
//>  5.00
//> 28.30
//> 16.85
//> 17.00
//> 79.50

/**************************/
// Problem 2

function toggleStringCase() {
  // ...
}

console.log(toggleStringCase('eBay'));
//> EbAY
console.log(toggleStringCase('FedEx'));
//> fEDeX
console.log(toggleStringCase('Coca-Cola'));
//> cOCA-cOLA
console.log(toggleStringCase('Yahoo!'));
//> yAHOO!

/***********************/
// Problem 3

function maskCreditCard(card) {
  // ...
}

console.log(maskCreditCard('1234-2345-3456-6789'));
//> xxxx-xxxx-xxxx-6789
console.log(maskCreditCard('2345-3456-1234-7890'));
//> xxxx-xxxx-xxxx-7890
console.log(maskCreditCard('1234-hola-3456-6789'));
//> null
console.log(maskCreditCard('1234-3456-6789'));
//> null
console.log(maskCreditCard('1234234534566789'));
//> null

/***********************/
// Problem 4

function firstMatchLastIndex(str) {
  // ...
}

console.log(firstMatchLastIndex('Hey, Hello there!'));
//> 9
console.log(firstMatchLastIndex('Hey, hola, how are things?'));
//> 8
console.log(firstMatchLastIndex('Namaste, Hello mister!'));
//> 6
console.log(firstMatchLastIndex('Ola! How are you doing today?'));
//> -1

/***********************/
// Problem 5

function extractNumbers(str) {
  // ...
}

console.log(extractNumbers('I have 10 or 20 cookies.'));
// > 10, 20
console.log(extractNumbers('I had Mojito91 that night!'));
// > 91
console.log(extractNumbers('I have coffee every night.'));
// > null

/***********************/
// Problem 6

function countItems(str) {
  // ...
}

console.log(countItems('I have 10 cookies.'));
//> 10 cookies
console.log(countItems('I had 10 cookies and 15 muffins.'));
//> 10 cookies
//> 15 muffins
console.log(countItems('I have a count of 20.'));
//> null
console.log(countItems('I had 10 cookies, 15 muffins, and another 8 cookies.'));
//> 10 cookies
//> 15 muffins
//> 8 cookies

/***********************/
// Problem 7

function countItems2(str) {
  // ...
}

console.log(countItems2('I had 10 cookies, 15 muffins, and another 8 cookies.'));
//> 18 cookies
//> 15 muffins
console.log(countItems2('I had 0 cookies, 15 muffins, and another 8 cookies.'));
// > 8 cookies
// > 15 muffins
console.log(countItems2('I had 10 cookies and 15 muffins.'));
// > 10 cookies
// > 15 muffins
console.log(countItems2('I have a count of 20.'));
// > null

/***********************/
// Problem 8

function countHello(str) {
  // ...
}

console.log(countHello('hey helo and Hello!'));
//> hey helo1 and Hello2!
console.log(countHello('Hey Helllo there! helo and HELLO..'));
//> Hey Helllo3 there! helo1 and HELLO2..

/***********************/
// Problem 9

function sortHello(str) {
  // ...
}

console.log(sortHello('Hey Helllo there! helo and HELLO..'));
//> Hey helo there! HELLO and Helllo..
console.log(sortHello('Hey Hello and helo!'));
//> Hey helo and Hello!
console.log(sortHello('Hey helo and Hello!'));
//> Hey helo and Hello!

/***********************/
