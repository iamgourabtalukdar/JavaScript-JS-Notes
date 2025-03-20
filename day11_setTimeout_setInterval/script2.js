console.log("Hi");

const b = setInterval(function () {
  console.log("inside setInterval 8");
  // console.log(b);
}, 8000);

const a = setInterval(function () {
  console.log("inside setInterval 4");
}, 4000);

setTimeout(() => {
  clearInterval(a);
  clearInterval(b);
}, 14000);

function abc() {
  for (let i = 1; i < 12; i++) {
    console.log(i);
  }
}
abc();
console.log("hi end");
