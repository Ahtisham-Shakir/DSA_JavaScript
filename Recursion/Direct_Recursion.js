// Recursion is a data structure that repeatedly call itself within its code, also called direct recursion

function factorial(n) {
  if (n == 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

const number = 5;
console.log(`factorial of ${number} is`, factorial(number));
