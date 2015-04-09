if (process.argv.length !== 3) {
  console.error("Usage:", process.argv[0], process.argv[1], "digits");
  return;
}

var fib = function (n) {
  if (n === 1 || n === 0) {
    return n;
  }
  return fib(n - 2) + fib(n - 1);
}

var digits = parseInt(process.argv[2]);
var n = 1;

while (fib(n).toString().length < digits) {
  ++n;
}

console.log(n)