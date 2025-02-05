// Summing Up values

// console.log([1, 2, 3, 4, 5].reduce((acc, curr) => acc + curr, 5));

// Finding the max / min numbers

// let numbers = [10, 2, 117, 46, 72];
// const max = numbers.reduce((acc, curr) => {
//   console.log("Acc:" + acc, "Current:" + curr);
//   return curr > acc ? curr : acc;
// });

// console.log(max);

// Flattening of an Array

// const nestedArr = [
//   [2, 1],
//   [3, 4],
//   [7, 8],
// ];

// // const flatArr = nestedArr.reduce((acc, curr) => {
// //   console.log("Acc:" + acc, "Current:" + curr);
// //   return acc.concat(curr);
// // });

// console.log(flatArr);

// Counting Occurences in Array
// let numbers = [10, 2, 117, 46, 72, 2, 7, 45, 13, 10];

// let count = numbers.reduce((acc, num) => {
//   acc[num] = (acc[num] || 0) + 1;

//   return acc;
// }, {});

// console.log(count);


