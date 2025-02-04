// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

//  Logic based solution
// function solution(N) {
//   // Implement your solution here

//   let binaryN = N.toString(2);
//   let counting = false;
//   let currentGap = 0;
//   let maxGap = 0;

//   console.log(binaryN);
//   for (let bit of binaryN) {
//     if (bit == "1") {
//       if (currentGap > maxGap) maxGap = currentGap;
//       counting = true;
//       currentGap = 0;
//     } else if (counting) {
//       currentGap++;
//     }
//   }

//   return maxGap;
// }

// console.log(solution(1041));

// Function based solution
function solution(N) {
  // Implement your solution here

  let binaryN = N.toString(2);
  let counting = false;
  let currentGap = 0,
    maxGap = 0;

  console.log(binaryN);
  for (let bit of binaryN) {
    if (bit == "1") {
      maxGap = Math.max(currentGap, maxGap);
      counting = true;
      currentGap = 0;
    } else if (counting) {
      currentGap++;
    }
  }

  return maxGap;
}

console.log(solution(1041));
