// forEach, map,  every, some, find, findIndex, findLast, findLastIndex,  filter, reduce, sort, values, entries,

let arr = ["a", "b", "c", "d"];
let num = [2, 3, 4, 5, 6];

// ### forEach

// arr.forEach = function (callback) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i]);
//   }
// };

// arr.forEach((item) => {
//   console.log(item);
// });

// ### map

// const x = [];

// num.forEach((item) => {
//   x.push(item * 3);
// });

// const y = num.map((item) => {
//   return item * 3;
// });

// const z = num.map((item) => item * 3);

// // [6, 9, 12, 15, 18];

// console.log(x);
// console.log(y);
// console.log(z);

// ### every

// const x = num.every((item) => {
//   console.log(item);
//   if (item % 2 === 0) {
//     return true;
//   }
//   return false;
// });

// const x = num.every((item) => item % 2 === 0);

// console.log(x);

// ### some

// const x = num.some((item) => {
//   console.log(item);
//   if (item % 2 === 0) {
//     return true;
//   }
//   return false;
// });

// const x = num.some((item) => item % 2 === 0);

// console.log(x);

// ### find

const students = [
  {
    roll: 1,
    name: "abc",
  },
  {
    roll: 2,
    name: "xyz",
  },
  {
    roll: 3,
    name: "gfd",
  },
  {
    roll: 4,
    name: "cdf",
  },
  {
    roll: 5,
    name: "xyz",
  },
  {
    roll: 6,
    name: "xyz",
  },
];
// const x = students.find((item) => {
//   return item.roll === 3;
// });

// console.log(x);

// ### findIndex

// const x = students.findIndex((item) => {
//   return item.roll === 3;
// });

// console.log(x);

// ### filter

const x = students.filter((item) => {
  return item.name === "xyz";
});

console.log(x);
