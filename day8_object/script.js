// how to create an object

let a = 5;
let obj1 = {};
// [2, 3, 4, 5, 6]; // is a storage of homogeneus elements

// [name, age, addr, phone, isVaccinated]
// ["Gourab", 22, "deb", 7001634925, true]

// key: value
let obj2 = {
  name: "Gourab",
  age: 22,
  isVaccinated: true,
  addr: "Debagram",
  pin_code: 741137,
  "pin code": 741102,
};
// console.log("obj2 = ", obj2);

// ########## accessing object
//  ### way1
// ## using dot (.) operator

// console.log(obj2.name);
// console.log(obj2.pin_code);
// console.log(obj2."pin code"); //error

//  ### way2
// ## using square braces ([]) operator

// console.log(obj2[name]);
// const addr = "age";
// // console.log(obj2[addr]);
// console.log(obj2["pin code"]);

let obj3 = {
  name: "Gourab",
  age: 22,
  isVaccinated: true,
  addr: {
    permanent: {
      vill: "debagram",
      ps: "kaliganj",
      pin: 741137,
    },
    temp: {
      vill: "slg",
      ps: "kaliganj",
      pin: 741134,
    },
  },
};

// console.log(obj3.addr.temp.pin);
// console.log(obj3["addr"]["temp"]["pin"]);

const name = "gourab";
const age = 22;
const pin = "741137";
let obj4 = {
  name: name,
  age: age,
  pin: pin,
};

let obj5 = {
  name,
  age,
  pin,
};

// true @73
// false @70
// "" @77

// let o1 = { name: "arpi" };
// let o2 = { name: "arpi" };
// let a1 = "";
// let a2 = "";
// let b1 = "abc";
// let b2 = "abc";

// console.log(b1 == b2);
// console.log(b1 === b2);
// console.log(a1 == a2);
// console.log(a1 === a2);
// console.log(o1 == o2);
// console.log(o1 === o2);
