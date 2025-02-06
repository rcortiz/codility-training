// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  // Implement your solution here
  if (S.length === 0) return 1;
  let myS = [];
  for (let i = 0; i < S.length; i++) {
    if (S[i] === "(" || S[i] === "{" || S[i] === "[") {
      myS.push(S[i]);
    } else if (S[i] === "]" || S[i] === "}" || S[i] === ")") {
      if (myS.length === 0) return 0;

      if (S[i] === "]" && myS[myS.length - 1] === "[") {
        myS.pop();
      } else if (S[i] === "}" && myS[myS.length - 1] === "{") {
        myS.pop();
      } else if (S[i] === ")" && myS[myS.length - 1] === "(") {
        myS.pop();
      } else {
        return 0;
      }
    }
  }
  return myS.length === 0 ? 1 : 0;
}

console.log(solution(""));
console.log(solution("{[()()]}"));
console.log(solution("([)()]"));
