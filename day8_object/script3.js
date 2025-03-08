// referencing problems
const obj1 = {
  name: "arpi",
  age: 22,
};

const obj2 = obj1;

// obj2.age = 30;

console.log(obj1);
console.log(obj2);

// there are 2 ways to overcome from the above problem
// way 1 : shallow copy (Copies for only 1 Level Deep)
const obj3 = { ...obj1 };

obj3.age = 30;

// drawback of shallow copy
const obj10 = {
  name: "arpi",
  age: 22,
  addr: {
    vill: "debagram",
  },
};

const obj20 = { ...obj10 };

// obj20.age = 30;
// obj20.addr.vill = "Knj"; // this value will be updated on OBJ10 also

// way 2 : Deep copy (Copies for n-th Level Deep)
const obj30 = JSON.parse(JSON.stringify(obj10));

obj30.age = 30;
obj30.addr.vill = "KNJ";
