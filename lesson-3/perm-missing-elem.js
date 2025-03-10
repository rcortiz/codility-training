// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Initial solution
// function solution(A) {
//   // Implement your solution here
//   let N = A.length + 1;
//   let sortArr = A.sort();
//   for (let i = 0; i < sortArr.length; i++) {
//     if (sortArr[i] !== i + 1) {
//       return i + 1;
//     }
//   }

//   return N;
// }

// console.log(solution([2, 3, 1, 5]));

// // Guided solutions
// function solution(A) {
//   // Implement your solution here
//   let N = A.length + 1;
//   let sum = (N * (N + 1)) / 2;
//   let total = 0;

//   for (let i = 0; i < A.length; i++) {
//     total += A[i];
//   }

//   return sum - total;
// }

// console.log(solution([2, 3, 1, 5]));

// Guided solutions
function solution(A) {
  // Implement your solution here
  let n = A.length + 1;

  let expectedSum = (n * (n + 1)) / 2;
  console.log(expectedSum);
  let total = A.reduce((a, c) => a + c);
  console.log(total);
  return expectedSum - total;
}

console.log(solution([4, 2, 1, 9, 8, 5, 6, 3]));
