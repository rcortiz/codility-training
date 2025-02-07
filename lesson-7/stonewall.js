// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(H) {
  const N = H.length;
  let wall = [];
  let count = 0;
  // Implement your solution here
  for (let i = 0; i < N; i++) {
    while (wall.length > 0 && wall[wall.length - 1] > H[i]) {
      wall.pop();
      console.log("while trigger");
    }

    console.log(wall);

    if (wall.length === 0 || wall[wall.length - 1] !== H[i]) {
      wall.push(H[i]);
      console.log("if trigger");

      count++;
    }
  }

  console.log(wall);
  console.log(count);
  return count;
}

console.log(solution([8, 8, 5, 7, 9, 8, 7, 4, 8]));
