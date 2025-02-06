// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Initial solution
function solution(A) {
  // Implement your solution here
  const S = A.sort((a, b) => a - b);
  const N = [];

  for (let i = 0; i < S.length; i++) {
    if (S[i] !== S[i + 1]) N.push(S[i]);
  }
  return N.length;
}

console.log(solution([2, 1, 1, 2, 3, 1]));

// Optimize solution
// function solution(A) {
//   // Implement your solution here
//   const s = new Set([...A]);
//   return s.size;
// }

// console.log(solution([2, 1, 1, 2, 3, 1]));
