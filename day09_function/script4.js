// callback (passing a function as a parameter)

// ##### passing a number as a parameter
// function abc(age) {
//   return age > 20;
// }
// abc(22);

// here myFun function is a higher order function
// here printHello function is a callback function

function myFun(callback) {
  console.log(callback());
}
function printHello() {
  console.log("hello");
}
// myFun(printHello());
myFun(printHello);
