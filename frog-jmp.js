// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Initial implenetation
// function solution(X, Y, D) {
//   // Implement your solution here

//   let dist = Y - X;
//   let moves = dist / D;

//   if (dist % D !== 0) {
//     return parseInt(moves) + 1;
//   } else {
//     return parseInt(moves);
//   }
// }

// console.log(solution(5, 300, 25));

// Optimize solution
function solution(X, Y, D) {
  // Implement your solution here
  return Math.ceil((Y - X) / D);
}

console.log(solution(5, 300, 25));
