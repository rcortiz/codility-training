// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
  // Implement your solution here
  let jump = new Set();

  for (let i = 0; i < A.length; i++) {
    jump.add(A[i]);
    console.log(i);
    if (jump.size === X) return i;
  }

  return -1;
}

// console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4]));
console.log(solution(3, [1, 1, 1, 2, 2, 3]));
