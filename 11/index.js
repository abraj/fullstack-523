
function printLine(n, i) {
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
}

printDaimond(7);

/******************************/

function printDaimond2(n){
  let incr = true;
  for (let i = 1; i > 0; (incr ? (i += 2) : (i -= 2))) {
    printLine(n, i);
    if (i === n) incr = false;
  }
}

printDaimond2(7);
