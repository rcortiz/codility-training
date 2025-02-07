// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // Implement your solution here
  let N = A.length;

  if (N === 0) return -1;

  let S = [...A].sort((a, b) => a - b);

  let candidate = S[Math.floor(N / 2)];
  let count = 0;
  //   let test = [];

  for (let [k, v] of S.entries()) {
    if (v === candidate) {
      //   console.log(v, k);
      //   test.push(k);
      count++;
    }
  }

  if (count > Math.floor(N / 2)) {
    // console.log(test);

    return A.indexOf(candidate);
  }

  return -1;
}

console.log(solution([3, 4, 3, 2, 3, -1, 3, 3]));
