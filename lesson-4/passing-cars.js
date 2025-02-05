// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // Implement your solution here
  let zero = 0;
  let passing = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      zero++;
      console.log("zeroes: " + zero);
    } else {
      passing += zero;
      console.log("passing cars: " + passing);
      if (passing > 1000000000) {
        return -1;
      }
    }
  }

  return passing;
}

console.log(solution([0, 1, 0, 1, 1]));
