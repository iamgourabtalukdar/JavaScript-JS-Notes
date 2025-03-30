// const myData = 50;

// localStorage.setItem("amarData", myData);
// localStorage.setItem("score-data", 10);

// const score = localStorage.getItem("score-data");

// console.log(score);

// localStorage.removeItem("score-data");
// localStorage.clear();
// console.log(localStorage);
// console.log(localStorage.length);
// console.log(localStorage.key(0));
// console.log(typeof localStorage);
// console.log(Array.isArray(localStorage));

// how to store an object or array in localStorage

const arr = [1, 2, 3];

localStorage.setItem("my-arr", arr);

const obj = {
  name: "hello",
  age: 40,
  city: "knj",
};
// console.log(obj.toString()); // "[object Object]"
const objStr = JSON.stringify(obj);
localStorage.setItem("my-obj", objStr);

const parsedObj = JSON.parse(localStorage.getItem("my-obj"));
console.log(parsedObj);
