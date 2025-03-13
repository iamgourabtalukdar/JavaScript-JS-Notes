// ##### how to create an array in js

// const arr = [];

// console.log(arr);
// console.log(arr.length); //0
// console.log(typeof arr); //object

// console.log([] == []); //false
// console.log([] == ""); //true => [].toString()

// ### extra 1

// const arr = [1, 2, 3];
// console.log(arr);
// console.log("length: ", arr.length); //3
// console.log(arr[0]); //1
// console.log(arr[1]); //2
// console.log(arr[2]); //3
// console.log(arr.toString()); // 1,2,3

// ### extra 2

// const arr = [];

// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// console.log(arr);
// console.log("length: ", arr.length); //3
// console.log(arr[0]); //1
// console.log(arr[1]); //2
// console.log(arr[2]); //3
// console.log(arr.toString()); // 1,2,3

// // ### extra 3

// const arr = [];

// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// console.log(arr);
// arr[8] = 9;
// console.log(arr); // [1,2,3, empty x 5, 9]

// ### extra 4

// const arr = [];

// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// console.log(arr);
// arr.length = 8;
// console.log(arr); // [1,2,3, empty x 5]
// console.log(arr[2]); //3
// console.log(arr[6]); //undefined

// ### extra 5 -- array destructuring

// const arr = ["arpi", "gourab", "hi", "Hello"];
// const [name1, name2] = arr;
// console.log(name1, name2);
// console.log({ name1, name2 }); //just easy to debug

// ### extra 6

const arr = ["arpi", "gourab", "hi", "Hello"];

console.log(arr + " wow"); // arr.toString();
