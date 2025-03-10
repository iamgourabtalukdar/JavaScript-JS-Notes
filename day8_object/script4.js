//Optional chaining (?)
const obj1 = {
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
const obj2 = {
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
      city: {
        shortname: "slg2",
        fullname: "Siliguri",
      },
    },
  },
};

// without optional chaining
console.log(obj1.addr.temp.city.shortname); //error
console.log(obj2.addr.temp.city.shortname);
// with optional chaining
console.log(obj1.addr.temp.city?.shortname);
console.log(obj2.addr.temp.city?.shortname);
