// Scope & CallStack of function

// ##### 1
// let a = 5; //add a debugger

// function abc() {
//   a = 6;
//   console.log("Hiiii");
// }
// abc();

// // ### 2

// let a = 5; //add a debugger

// function abc() {
//   let a = 6;
//   console.log("Hiiii");
// }
// abc();

// ### 3

var c = 10; //add a debugger
const a = 6;
let b = 8;

function abc() {
  const a = 6;
  let b = 8;
  var c = 10;

  abc2();
  function abc2() {
    const a = 6;
    let b = 8;
    var c = 10;
  }
}
abc();
