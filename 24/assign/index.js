// Assignment 18: Handling Objects 2

/***********************/
// Problem 1

function getShallowCopy(item) {
  // ...
}

// const arr = [5, 'hello', { foo: 'bar' }, true];
// const sc = getShallowCopy(arr);
// sc[0] = 10;
// sc[2].foo = 'BAR';
// console.log(sc);
// //> [ 10, 'hello', { foo: 'BAR' }, true ]
// console.log(arr);
// //> [ 5, 'hello', { foo: 'BAR' }, true ]

// const obj = { a: 5, b: { foo: 'bar'}, c: [1, 2]};
// const sc = getShallowCopy(obj);
// sc.a = 10;
// sc.b.foo = 'BAR';
// sc.c.push(5);
// console.log(sc);
// //> { a: 10, b: { foo: 'BAR' }, c: [ 1, 2, 5 ] }
// console.log(obj);
// //> { a: 5, b: { foo: 'BAR' }, c: [ 1, 2, 5 ] }

// console.log(getShallowCopy(null));
//> null

// console.log(getShallowCopy('hello'));
//> hello

/***********************/
// Problem 2

function getDeepCopy(item) {
  // ...
}

// const arr = [5, 'hello', { foo: 'bar' }, true];
// const dc = getDeepCopy(arr);
// dc[0] = 10;
// dc[2].foo = 'BAR';
// console.log(dc);
// //> [ 10, 'hello', { foo: 'BAR' }, true ]
// console.log(arr);
// //> [ 5, 'hello', { foo: 'bar' }, true ]

// const obj = { a: 5, b: { foo: 'bar'}, c: [1, 2]};
// const dc = getDeepCopy(obj);
// dc.a = 10;
// dc.b.foo = 'BAR';
// dc.c.push(5);
// console.log(dc);
// //> { a: 10, b: { foo: 'BAR' }, c: [ 1, 2, 5 ] }
// console.log(obj);
// //> { a: 5, b: { foo: 'bar' }, c: [ 1, 2 ] }

// console.log(getDeepCopy(null));
//> null

// console.log(getDeepCopy('hello'));
//> hello

/***********************/
// Problem 3

function stringValues(obj) {
  // ...
}

// const obj = {
//   a: 5, 
//   b: 'hello',
//   c: ['foo', 9.6, false, { x: 99 }],
//   d: true,
//   e: { p: 'baz', q: [null, 18] },
// };
// const obj2 = stringValues(obj);
// console.log(JSON.stringify(obj2, null, 2));
// {
//   "a": "5",
//   "b": "hello",
//   "c": [
//     "foo",
//     "9.6",
//     "false",
//     {
//       "x": "99"
//     }
//   ],
//   "d": "true",
//   "e": {
//     "p": "baz",
//     "q": [
//       "null",
//       "18"
//     ]
//   }
// }

/***********************/
// Problem 4

function notSoShallowCopy(item) {
  // ...
}

// const arr = [5, 'hello', { foo: 'bar', bar: [5, 6] }, [1, 2, { p: 10, q: { ola: 'hello' } }]];
// const sc = notSoShallowCopy(arr);
// sc[0] = 10;
// sc[2].foo = 'BAR';
// sc[2].bar.push(10);
// sc[3][2].p = 20;
// sc[3][2].q.ola = 'world';
// sc[3].push(5);
// console.log(JSON.stringify(arr, null, 2));
// [
//   5,
//   "hello",
//   {
//     "foo": "bar",
//     "bar": [5, 6, 10]
//   },
//   [
//     1, 
//     2,
//     {
//       "p": 20,
//       "q": { "ola": "world" }
//     }
//   ]
// ]

// const obj = { a: 5, b: { foo: 'bar', bar: [5, 6] }, c: [1, 2, { p: 10 }]};
// const sc = notSoShallowCopy(obj);
// sc.a = 10;
// sc.b.foo = 'BAR';
// sc.b.bar.push(10);
// sc.c[2].p = 20;
// sc.c.push(5);
// console.log(JSON.stringify(obj, null, 2));
// {
//   "a": 5,
//   "b": {
//     "foo": "bar",
//     "bar": [5, 6, 10]
//   },
//   "c": [
//     1,
//     2,
//     {
//       "p": 20
//     }
//   ]
// }

/***********************/
