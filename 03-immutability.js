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


