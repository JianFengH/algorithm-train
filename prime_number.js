/**
 * 
 */
 function isPrime(n) {
  // Write your code here
  for (let i = 2; i <= n / 2; i++) {
      if (n % i === 0) {
          return i;
      }
  }
  return 1;
}