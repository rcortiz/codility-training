// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // Implement your solution here
  let c = 0;
  for (let i = 0; i <= N; i++) {
    if (N % i === 0) {
      console.log(i);
      c++;
    }
  }
  return c;
}

console.log(solution(24));
