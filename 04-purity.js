// Pure functions:
// * Never change any of the values passed to them.
// * Always return the same output for the same inputs.
// * Never change anything external to the function.

// Pure function:
const double = n => 2*n;

// Impure functions:

function array_mutator(arr) {
  arr.push("Surprise!");
  return arr;
}

function rand() {
  return Math.random();
}

function writeToLog(message) {
  console.log(message);
}

