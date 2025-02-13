// Filtering Even Numbers
// const numbers = [1, 2, 3, 4, 5, 6];
// const evens = numbers.filter((num) => num % 2 === 0);
// console.log(evens);

// Filtering Out Falsy Values
// const mixedArray = [0, 1, false, 2, "", 3, null, "hello", undefined];
// const truthyValues = mixedArray.filter(Boolean);
// console.log(truthyValues);

// Filtering Objects in an Array (By Property)
// const users = [
//   { name: "Alice", active: true },
//   { name: "Bob", active: false },
//   { name: "Charlie", active: true },
// ];

// const activeUsers = users.filter((user) => user.active === false);
// console.log(activeUsers);

// Filtering Words by Length
// const words = ["car", "bicycle", "bus", "train", "aeroplane", "test"];
// const longWords = words.filter((word) => word.length <= 4);
// console.log(longWords);

// Filtering Duplicate Values
// const nums = [1, 2, 2, 3, 4, 4, 5];

// const unique = nums.filter((num, index, arr) => arr.indexOf(num) === index);

// console.log(unique);

//  Filtering Based on a Search Query
const products = ["Laptop", "Tablet", "Phone", "Headphones"];
const searchQuery = "ap";

const filteredProducts = products.filter((product) =>
  product.toLowerCase().includes(searchQuery)
);
console.log(filteredProducts);
