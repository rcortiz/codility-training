// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Initial solution
// function solution(A) {
//   // Implement your solution here
//   const S = A.sort((a, b) => b - a);

//   const absM = S.slice(0, 3).reduce((a, n) => a * n);
//   const negM = S[0] * S.slice(-2).reduce((a, n) => a * n);

//   if (absM > negM) return absM;
//   else return negM;
// }

// console.log(solution([-3, 1, 2, -2, 5, 6]));

// Optimize solution
function solution(A) {
  // Implement your solution here
  const S = A.sort((a, b) => b - a);

  return Math.max(S[0] * S[1] * S[2], S[S.length - 1] * S[S.length - 2] * S[0]);
}

console.log(solution([-3, 1, 2, -2, 5, 6]));
