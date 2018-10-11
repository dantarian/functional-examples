// Declarative vs Imperative
// Imperative - telling the computer what to do and how to do it.
// Declarative - telling the computer what you need to do, and let it figure out how.
//
// The less you're thinking about exactly what needs to be done, the more declarative
// you are. So abstractions aid declarativity.
//
// e.g avoiding using "for" loops.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Imperative
for (let i = 0; i < arr.length; ++i) {
  console.log(arr[i]);
}

// Declarative
arr.each(x => console.log(x));

