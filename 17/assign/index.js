// Assignment 14: Operations on objects

/*******************************/
// Problem 1:

function isKeyExists(obj, key) {
  // ..
}

// const obj = { foo: 5, bar: undefined };
// console.log(isKeyExists(obj, 'foo'));
// // > true
// console.log(isKeyExists(obj, 'bar'));
// // > true
// console.log(isKeyExists(obj, 'baz'));
// // > false

/*******************************/
// Problem 2:

function renameKey(obj, currKey, newKey) {
  // ...
}

// const obj = { foo: 5, bar: undefined };
// console.log(renameKey(obj, 'foo', 'fox'));
// > true
// console.log(obj);
// > { fox: 5, bar: undefined }

// const obj = { foo: 5, bar: undefined };
// console.log(renameKey(obj, 'foo', 'bar'));
// > Can't rename! The key `bar` already exists
// > false

// const obj = { foo: 5, bar: undefined };
// console.log(renameKey(obj, 'baz', 'foo'));
// > Can't rename! The key `baz` doesn't exist
// > Can't rename! The key `foo` already exists
// > false

/*******************************/
// Problem 3:

function addKeyValue(obj, key, value) {
  // ...
}

// const obj = { foo: 5, bar: undefined };
// console.log(addKeyValue(obj, 'baz', 'hello'));
// > true
// console.log(obj);
// > { foo: 5, bar: undefined, baz: 'hello' }

// const obj = { foo: 5, bar: undefined };
// console.log(addKeyValue(obj, 'foo', 20));
// > Can't add "key-value pair"! The key `foo` already exists
// > false

/*******************************/
// Problem 4:

function addKeyValuePairs() {
  // ...
}

// const obj = { foo: 5 };
// addKeyValuePairs(obj, ['x', 10], ['y', 'hello']);
// console.log(obj);
// > { foo: 5, x: 10, y: 'hello' }

// const obj = { foo: 5, bar: undefined };
// addKeyValuePairs(obj, ['x', 10], ['bar', 20], ['foo', 'hello']);
// console.log(obj);
// > Can't add! The key `bar` already exists
// > Can't add! The key `foo` already exists
// > { foo: 5, bar: undefined }

/*******************************/
// Problem 5:

function overwriteKeyValuePair(obj, key, value) {
  return {
    // ...
  };
}

// const obj = { foo: 5, bar: 'hello' };
// const obj2 = overwriteKeyValuePair(obj, 'foo', 20);
// console.log(obj);
// > { foo: 5, bar: 'hello' }
// console.log(obj2);
// > { foo: 20, bar: 'hello' }

/*******************************/
// Problem 6:

function nestedFreeze(obj) {
  // ...
}

// const obj = {
//   a: 5,
//   b: {
//     p: 10,
//     q: {
//       x: 15,
//       y: 18,
//     },
//   },
//   c : 20,
// };
// nestedFreeze(obj);
// obj.a = 105;
// obj.b.p = 110;
// obj.b.q.x = 115;
// obj.c = 120;
// console.log(obj);
// > { a: 5, b: { p: 10, q: { x: 15, y: 18 } }, c: 20 }

/*******************************/
