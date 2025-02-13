// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // Implement your solution here
  let min = 1000000000;
  for (let i = 1; i <= Math.sqrt(N); i++) {
    if (N % i === 0) {
      console.log(min);
      min = Math.min(min, 2 * (i + N / i));
    }
  }

  return min;
}

console.log(solution(30));
