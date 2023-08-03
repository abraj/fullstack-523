
let count = 0;

function printLine(n, i) {
  count += 1;
  const space = ' '.repeat((n - i) / 2);
  const str = '*'.repeat(i);
  console.log(space + str);
}
  
function printDaimond (n) {
  for (let i = 1; i <= n; i += 2) {
    printLine(n, i);
  }

  for (let i = n - 2; i >= 1; i -= 2) {
    printLine(n, i);
  }

  console.log('count:', count);
}

printDaimond(7);
  
/******************************/

function printLine(n, i, obj) {
  obj.c += 1;
  const space = ' '.repeat((n - i) / 2);
  const str = '*'.repeat(i);
  console.log(space + str);
}
  

function printDaimond (n) {
  let obj = { c: 0};
  for (let i = 1; i <= n; i += 2) {
    printLine(n, i, obj);
  }

  for (let i = n - 2; i >= 1; i -= 2) {
    printLine(n, i, obj);
  }

  console.log('count:', obj.c);
}

printDaimond(7);

/******************************/

function printLine(n, i, arr) {
  arr[0] += 1;
  const space = ' '.repeat((n - i) / 2);
  const str = '*'.repeat(i);
  console.log(space + str);
}
  

function printDaimond (n) {
  let arr = [0];
  for (let i = 1; i <= n; i += 2) {
    printLine(n, i, arr);
  }

  for (let i = n - 2; i >= 1; i -= 2) {
    printLine(n, i, arr);
  }

  console.log('count:', arr[0]);
}

printDaimond(7);

/******************************/
