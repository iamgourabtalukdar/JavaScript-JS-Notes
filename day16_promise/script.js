// promise is a special type of object in js
const resolveBtn = document.querySelector("button:nth-child(2)");
const rejectBtn = document.querySelector("button:nth-child(3)");

const p1 = new Promise(function (resolve, reject) {
  console.log("hello");

  resolveBtn.addEventListener("click", () => {
    resolve("Hurray");
  });
  rejectBtn.addEventListener("click", () => {
    reject("Oh no");
  });
});
