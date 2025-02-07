// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// A =  [1, 3, 5, 2, 8, 7] dislike dish
// B =  [7, 1, 9, 8, 5, 7] current dish
// A !== B

// unshift () -> put the A[i] at the first
// pop() -> remove the N - A[i]

function solution(A, B) {
  // Implement your solution here

  for (let i = 0; i < A.length; i++) {
    let valid = true;

    for (let j = 0; j < A.length; j++) {
      if (A[j] === B[j]) {
        // console.log(A[i], B[i]);
        valid = false;
        break;
      }
    }

    if (valid) return i;

    B.unshift(B.pop());
  }

  return -1;
}

console.log(solution([1, 3, 5, 2, 8, 7], [7, 1, 9, 8, 5, 7]));
