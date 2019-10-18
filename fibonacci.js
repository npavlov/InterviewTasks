const fib = val => {
  return val < 1 ? 0 : val <= 2 ? 1 : fib(val - 1) + fib(val - 2);
};

console.log(fib(10));
