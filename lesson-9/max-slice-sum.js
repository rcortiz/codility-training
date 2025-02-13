// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Initial Solution
// function solution(A) {
//   // Implement your solution here
//   let res = A[0];

//   for (let i = 0; i < A.length; i++) {
//     let currSum = 0;
//     for (let j = i; j < A.length; j++) {
//       currSum = currSum + A[j];
//       //   console.log(currSum, A[j]);

//       res = Math.max(currSum, res);
//       console.log(res);
//     }
//   }

//   //   console.log(res);
//   return res;
// }

// console.log(solution([3, 2, -6, 4, 0]));

// Optimize Solution
function solution(A) {
  // Implement your solution here
  let res = A[0];
  let maxEnding = A[0];

  for (let i = 1; i < A.length; i++) {
    console.log(maxEnding + A[i], A[i]);
    maxEnding = Math.max(maxEnding + A[i], A[i]);

    res = Math.max(res, maxEnding);
  }

  return res;
}

console.log(solution([3, 2, -6, 4, 0]));
