// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // Implement your solution here

  let s = new Set();
  for (let n of A) {
    if (n > 0) {
      s.add(n);
    }
    // console.log(n);
  }
  let smallest = 1;
  while (s.has(smallest)) {
    smallest++;
    console.log(smallest);
  }

  return smallest;
}

console.log(solution([1, 3, 6, 4, 1, 2]));
// console.log(solution([1, 2, 3]));
// console.log(solution([-1, -3]));
