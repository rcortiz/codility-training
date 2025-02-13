// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');   

function solution(A) {
  // Implement your solution here

  let min_price = A[0];
  let max_profit = 0;

  for (let i = 1; i < A.length; i++) {
    let current_price = A[i];

    let profit = current_price - min_price;
    max_profit = Math.max(max_profit, profit);
    min_price = Math.min(min_price, current_price);

  }

  return max_profit;
}

console.log(solution([23171, 21011, 21123, 21366, 21013, 21367])); // 356
