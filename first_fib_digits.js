if (process.argv.length !== 3) {
  console.error("Usage:", process.argv[0], process.argv[1], "digits");
  return;
}

var fib = function (n) {
  var sum = 1;
  var prevSum = 1;
  for (var i = 2; i < n; ++i) {
    var tmp = sum;
    sum = sum + prevSum;
    prevSum = tmp;
  }
  return sum;
}

var digits = parseInt(process.argv[2]);
var n = 1;

while (fib(n).toString().length < digits) {
  ++n;
}

console.log(n)