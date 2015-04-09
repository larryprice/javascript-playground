if (process.argv.length !== 4) {
  console.error("Usage:", process.argv[0], process.argv[1], "start end");
  return;
}

var start = parseInt(process.argv[2]),
  end = parseInt(process.argv[3]);

if (start >= end) {
  console.error("Starting number must be greater than ending number.")
  return;
}

var isDivisibleBy = function (top, bottom) {
  return top % bottom === 0
}

for (var i = start; i <= end; ++i) {
  var fb = "";
  if (isDivisibleBy(i, 3)) {
    fb += "Fizz";
  }
  if (isDivisibleBy(i, 5)) {
    fb += "Buzz";
  }
  console.log(fb || i)
}