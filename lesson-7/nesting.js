// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  // Implement your solution here
  if (S.length === 0) return 1;

  let stack = [];
  for (let i = 0; i < S.length; i++) {
    if (S[i] === "(") {
      stack.push(S[i]);
    } else {
      if (stack.length !== 0) stack.pop();
      else return 0;
    }
  }

  return stack.length === 0 ? 1 : 0;
}

console.log(solution("()()()")); // Valid
console.log(solution("(()(())())")); // Valid
console.log(solution("())")); // Invalid
