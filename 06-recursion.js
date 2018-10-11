// Recursion is when a function calls itself.

// Example: Simple but inefficient Fibonacci sequence

var slow_fib = n => (n <= 1 ? 1 : fib(n-1) + fib(n-2));

// Why is this inefficient?

// Tail-optimised recursion
var fast_fib = n => {
  var fib_recursive = (n, a, b) => {
    if (n == 0) {
      return a;
    } else if (n == 1) {
      return b;
    } else {
      return fib(n-1, b, a+b);
    }
  };

  return fib_recursive(n, 0, 1);
}

