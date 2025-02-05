// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // Implement your solution here

  let left = 0,
    right = 0;
  let minDiff = Infinity;
  let t = A.reduce((a, c) => a + c);

  for (let i = 0; i < A.length - 1; i++) {
    left += A[i];
    right = t - left;
    let currDiff = Math.abs(left - right);
    if (minDiff > currDiff) minDiff = currDiff;
  }

  return minDiff;
}

console.log(solution([3, 1, 2, 4, 3]));
