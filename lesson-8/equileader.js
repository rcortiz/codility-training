// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  const N = A.length;
  let count = 0;
  let candidate = null;

  for (let i = 0; i < N; i++) {
    if (count === 0) {
      candidate = A[i];
      count = 1;
    } else {
      if (A[i] === candidate) {
        count++;
      } else {
        count--;
      }
    }
  }

  count = 0;
  for (let n of A) {
    if (n === candidate) count++;
  }

  if (count <= Math.floor(N / 2)) {
    return 0;
  }

  let leader = candidate;
  let equiLeaderCount = 0;
  let leftCount = 0;

  for (let j = 0; j < N; j++) {
    if (A[j] === leader) {
      leftCount++;
    }

    let leftSize = j + 1;
    let rightSize = N - leftSize;
    let rightCount = count - leftCount;

    if (leftCount > leftSize / 2 && rightCount > rightSize / 2) {
      equiLeaderCount++;
    }
  }

  return equiLeaderCount;
}

console.log(solution([4, 3, 4, 4, 4, 2]));
