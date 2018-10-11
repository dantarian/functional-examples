// Operating on collections of data

// Predicate: Any function that returns true or false.
const is_odd = x => ( x%2 == 1 );
const is_not_empty = arr => (arr.length > 0);

// Filter: Produces a new copy of an array, containing only those elements of the original array that match a predicate.
[1, 2, 3, 4, 5].filter(is_odd); // == [1, 3, 5]
[[], [1,2], ["foo"]].filter(is_not_empty); // == [[1,2], ["foo"]]

// Map: Produces a new copy of an array, applying a function to every element of that array.
[1, 2, 3, 4, 5].map(x => 2*x); // == [2, 4, 6, 8, 10]

// Reduce: Transforms an array into something else, via an accumulator
[1, 2, 3, 4, 5].reduce((accumulator, element) => accumulator + element, 0); // == 15

[[], [1,2], ["foo"], [35]].reduce((accumulator, element) => {
  if (accumulator[element.length]) {
    accumulator[element.length] += 1;
  } else {
    accumulator[element.length] = 1;
  }
    return accumulator;
}, []); // == [1, 2, 1]

