console.log("Hi");

const b = setTimeout(function () {
  console.log("inside setTimeout 12");
  console.log(b);
}, 12000);

const a = setTimeout(function () {
  console.log("inside setTimeout 8");
  clearTimeout(b);
}, 8000);

function abc() {
  for (let i = 1; i < 12; i++) {
    console.log(i);
  }
}
abc();
console.log("hi end");
