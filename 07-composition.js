// Composition allows us to chain functions together to produce another function.

const double = n => 2*n;
const add5 = n => n+5;

double(add5(3)); // == 16
add5(double(3)); // == 11

// There's a more elegant way, using higher order functions...

const compose = (fn1, fn2) => n => fn2(fn1(n));
const add5_then_double = compose(add5, double);
add5_then_double(3); // == 16

const split = splitchar => str => str.split(splitchar);
const join = joinchar => arr => arr.join(joinchar);
const dashify = compose(split(' '), join('-'));
dashify("hello world");

