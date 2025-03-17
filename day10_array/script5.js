// sort, reduce,  values, entries,

let arr = ["a", "b", "c", "d"];
let num = [2, 3, 4, 5, 6];

const students = [
  {
    roll: 1,
    name: "abc",
  },
  {
    roll: 6,
    name: "xyz",
  },
  {
    roll: 2,
    name: "xyz",
  },
  {
    roll: 5,
    name: "xyz",
  },
  {
    roll: 4,
    name: "cdf",
  },

  {
    roll: 3,
    name: "gfd",
  },
];

// callback
// whenever the Reference of a function  is using as an argument of another function

// function e() {}
// function abc(x) {
//   x();
// }

// abc(e);

// higher order function

// 1. it takes a function as an argument
// function abc(x){

// }
// or
// 2. it should return a function

// function abc(){
//   return ()=>{}
// }

// num = [1, 6, 15, 2, 3, 30];

// 1, 6; //1
// 6, 15; // 15
// 6, 2; //2
// 6, 3; //3
// 6, 30; //30
// 6

// ### sort

// function abc(a, b) {
//   return b - a;
// }
// console.log(num.sort(abc));
// console.log(num.sort((a, b) => a - b));
// console.log(num);

// ### reduce  (it will narrow down the array elements into a single value)

// num = [1, 6, 15, 2, 3, 30];
// const x = num.reduce((a, b) => {
//   return a * b;
// }, 1);

// // const x = num.reduce((a, b) => a + b);

// console.log(x);

// const filteredData = students.filter((student) => student.name === "xyz");
// console.log(filteredData);
// const sortedData = filteredData.sort((a, b) => a.roll - b.roll);
// console.log(sortedData);

students
  .filter((student) => student.name === "xyz")
  .sort((a, b) => a.roll - b.roll)
  .forEach((student) => {
    // console.log("Roll = " + student.roll + " Name = " + student.name);
    console.log(`Roll = ${student.roll} Name = ${student.name}`);
  });
