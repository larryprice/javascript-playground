var words = process.argv.slice(2);
var popped = words.pop();

if (words.length !== 0) {
  console.log(words.join(", "), "and", popped);
} else {
  console.log(popped);
}