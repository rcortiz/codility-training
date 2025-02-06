// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Initial Solution
function solution(A, B) {
  // Implement your solution here
  let alive = [];
  let win = 0;
  for (let i = 0; i < A.length; i++) {
    if (B[i] === 1) {
      alive.push(A[i]);
    } else {
      while (alive.length > 0) {
        if (alive[alive.length - 1] > A[i]) {
          break;
        } else {
          alive.pop();
        }
      }

      if (alive.length === 0) {
        win++;
      }
    }
  }
  console.log(win, alive);
  return win + alive.length;
}

console.log(solution([4, 3, 2, 5, 8], [0, 1, 0, 0, 1]));
