// Declarative vs Imperative
// Imperative - telling the computer what to do and how to do it.
// Declarative - telling the computer what you need to do, and let it figure out how.
//
// The less you're thinking about exactly what needs to be done, the more declarative
// you are. So abstractions aid declarativity.
//
// e.g avoiding using "for" loops.

// Immutability
//
// Data doesn't change - it's immutable. Create a modified copy instead. This is why
// const is good.

// Examples:

// Adding an item to an array:

// Mutable
const arr1 = [1, 2];
arr1.push(3);
arr1;

// Immutable
const arr2 = [1.2];
const arr3 = arr2.concat(3);
arr2;
arr3;


