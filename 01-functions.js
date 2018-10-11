// Different ways to declare a function in Javascript

// Traditional
function double_v1(n) {
  return 2*n;
}

double_v1(5);

// Anonymous function assigned to a variable
const double_v2 = function (n) {
  return 2*n;
}

double_v2(5);

// Anonymous function assigned to a variable, fat-arrow style
const double_v3 = n => 2*n;

double_v3(5);

// Anonymous function assigned to a variable, long fat-arrow style
const double_v4 = n => {
  return 2*n;
}

double_v4(5);

// We can assign traditional functions to variables, too.

const double_v5 = double_v1;
double_v5(5);

// We can store (and call) functions in objects, and in arrays.

const obj = {
  double(n) {
    return 2*n;
  }
}
obj.double(5);

const arr = [ n => 2*n ]
arr[0](5);

// An unadorned method name is a reference to the variable - it's only when we follow it
// with parentheses that it gets executed.

double_v1;

// And we can call methods on it.

double_v3.toString();

// We can pass functions as arguments to other functions.

const applier = (fn, num) => fn(num);
applier(double_v1, 5);

// Functions can return functions.

const createDoubler = () => {
  return n => 2*n;
}
createDoubler()(5);

// Functions which take functions as arguments, or which return functions,
// are called Higher Order Functions.

