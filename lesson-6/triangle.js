// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // Implement your solution here

  const S = A.sort((a, b) => a - b);
  console.log(S);
  for (let i = 0; i < A.length - 2; i++) {
    const triplet = S[i] + S[i + 1] > S[i + 2];
    if (triplet) return 1;
  }

  return 0;
}

console.log(solution([10, 2, 5, 1, 8, 20]));
console.log(solution([10, 50, 5, 1]));

