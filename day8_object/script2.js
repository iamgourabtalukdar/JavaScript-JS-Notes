// let obj1 = { name: "arpi" };
// obj1 = { age: 22 };
// obj1.age = 22; //valid

const obj2 = { name: "arpi" };
// obj2 = { age12: 22 }; //error
// obj2 = {}; //error
obj2.age = 22; //valid

// ############ ways to add new key value pair in an object
// 1 (using dot (.) operator)

obj2.pin = "741137";
// console.log(obj2);

// 2 (using square braces [] operator)

obj2["addr"] = {
  vill: "Debagram",
  ps: "Kalliganj",
};

// console.log(obj2);

// ############ ways to delete key value pair from an object
// 1  (using delete operator)

delete obj2.name;
// console.log(obj2);

// ###### spread operator (...)

const obj10 = {
  name: "arpi",
  age: 22,
};

// console.log(obj10);
// console.log({ ...obj10 });

// ###### Object Destructuring
// const name = obj10.name;
// const age = obj10.age;
// console.log(name, age);

// Object Destructuring
// const { name, age } = obj10;
// console.log(myName, age);

// Object Destructuring with Renaming
const { name: myName, age } = obj10;
console.log(myName, age);
