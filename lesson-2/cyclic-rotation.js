// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Logic
// function solution(A, K) {
//   // Implement your solution here

//   let N = A.length;
//   K = K % N;

//   if (N === 0 || K === 0 || N === 1) return A;

//   let rotatedArray = new Array(N);

//   for (let i = 0; i < N; i++) {
//     let rotatedIndex = (i + K) % N;
//     rotatedArray[rotatedIndex] = A[i];
//   }

//   return rotatedArray;
// }

// let A = [3, 8, 9, 7, 6];
// let K = 3;

// console.log(solution(A, K));

// function
// function solution(A, K) {
//   // Implement your solution here
//   let N = A.length;

//   K = K % N;

//   if (N === 0 || K === 0 || N === 1) return A;

//   return [...A.slice(-K), ...A.slice(0, N - K)];
// }

// console.log(solution([5, -1000], 1)); // Expected: [-1000, 5]
// console.log(solution([3, 8, 9, 7, 6], 3)); // Expected: [9, 7, 6, 3, 8]
// console.log(solution([0, 0, 0], 1)); // Expected: [0, 0, 0]
// console.log(solution([1, 2, 3, 4], 4)); // Expected: [1, 2, 3, 4] (full rotation)
// console.log(solution([-4], 0));
