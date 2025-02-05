// // Initial solution
// function solution(A) {
//   // Implement your solution here

//   let countMap = {};

//   for (let num of A) {
//     countMap[num] = (countMap[num] || 0) + 1;
//   }

//   console.log(countMap);

//   for (let d in countMap) {
//     if (countMap[d] % 2 !== 0) {
//       return Number(d);
//     }
//   }

//   return 0;
// }

// console.log(solution([9, 3, 9, 3, 9, 7, 9]));

// Optimize solution
// function solution(A) {
//   // Implement your solution here

//   let result = 0;

//   for (let num of A) {
//     result ^= num;
//   }

//   return result;
// }

// console.log(solution([9, 3, 9, 3, 9, 7, 9]));

// console.log(solution([9, 3, 9, 3, 9, 7, 9]));

// Using reduce function solution
function solution(A) {
  // Implement your solution here
  const k = [];
  const test = A.reduce((a, c) => {
    a[c] = (a[c] || 0) + 1;
    return a;
  }, {});

  for (const [key, value] of Object.entries(test)) {
    if (value === 1) {
      // return key;
      console.log(key);
    }
  }

  // Optimize by using XOR operator
  // return A.reduce((a, c) => a ^ c, 0);
}

console.log(solution([9, 3, 9, 3, 9, 7, 9, 4, 1]));
