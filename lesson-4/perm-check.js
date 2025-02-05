// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// function solution(A) {
//   // Implement your solution here
//   let s1 = new Set();
//   let s2 = new Set(A);
//   for (let i = 1; i <= A.length; i++) {
//     s1.add(i);
//   }
//   console.log(s1);
//   console.log(s2);
//   const difference = new Set([...s1].filter((e) => !s2.has(e)));
//   console.log(difference);
//   if (difference.size === 0) return 1;
//   else return 0;
// }

// console.log(solution([4, 1, 3]));
// console.log(solution([2, 1, 3]));

function solution(A) {
  // Implement your solution here
  let s = new Set(A);
  for (let i = 1; i <= A.length; i++) {
    if (!s.has(i)) {
      return 0;
    }
  }

  return 1;
}

console.log(solution([4, 1, 3]));
console.log(solution([2, 1, 3]));
