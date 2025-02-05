// function solution(A, K) {
//   //Implement your solution here
//   let sort = A.sort((a, b) => a - b);
//   console.log(sort);
//   let left = 0;
//   let right = A.length - 1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (A[mid] === K) {
//       console.log(mid);
//       return mid;
//     } else if (A[mid] < K) left = mid + 1;
//     else right = mid - 1;
//   }
//   return "Not Found";
// }

// console.log(solution([2, 5, 3, 1, 6, 7, 10, 31], 69));

function solution(A, K) {
  //Implement your solution here
  //   return A.filter((a) => {
  //     if (a === K) return a;
  //     else "Not Found";
  //   });

  return A.findIndex((e) => e === K);
}

console.log(solution([1, 2, 3, 5, 6, 7, 10, 31], 69));
