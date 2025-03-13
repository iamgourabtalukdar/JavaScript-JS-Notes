// anonymous function (which has no name)

function myFunc(callback) {
  console.log(callback);
}

// ### normal way - traditional function
// function abc() {
//     console.log("abc");
// }
// myFunc(abc);

//### normal way - arrow function
// const abc = () => {
//   console.log("abc");
// };
// myFunc(abc);

//### anonymous way - arrow function

myFunc(() => {
  console.log("abc");
});

//### anonymous way - traditional function

myFunc(function () {
  console.log("abc");
});
