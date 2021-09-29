
 function fibonacci(n) {
  if (n < 0) return fibonacci(n * -1) * -1;
  if (n == 0 || n == 1) return n;
  else return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(45))
console.log(fibonacci(-15))

module.exports = fibonacci;
