// function in JS

// ##### Definition
// function fun1() {}

// ##### Definition with Call
// function fun1() {
//   console.log("inside fun1");
// }
// fun1();

// ##### Definition with Call with Return value
// function fun1() {
//   console.log("inside fun1");
//   return { name: "gourab" };
// }
// const returnValue = fun1();

// ### functions in JS get Hoisted
// const returnValue = fun1();
// function fun1() {
//   console.log("inside fun1");
//   return { name: "gourab" };
// }

// // ### passing arguments
// function fun1(age) {
//   // ---- way1
//   // if (age >= 18) {
//   //   return true;
//   // } else {
//   //   return false;
//   // }
//   // ---- way2
//   // return age >= 18 ? true : false;
//   // ---- way3
//   return age >= 18;
// }
// const isEligible = fun1(20);
// console.log(isEligible);

// ### default parameter
// function fun1(age = 10) {
//   return age >= 18;
// }
// const isEligible = fun1();
// const isEligible2 = fun1(20);
// console.log(isEligible);
// console.log(isEligible2);
