const h1 = document.getElementById("heading1");

// 1
// console.log(h1.childNodes);
// console.log(h1.children);

// const pElem = document.createElement("p");
// pElem.innerText = "Hello";
// h1.append(pElem);

// console.log(h1.childNodes); // live
// console.log(h1.children); // live

// 2

console.dir(h1);
h1.classList.add("new1");
h1.classList.remove("cm2");
console.log(h1.classList.contains("new4"));

// function change() {
//   h1.style.color = "red";
//   h1.style.backgroundColor = "white";
// }

function addBg() {
  h1.classList.add("change-bg");
}
function removeBg() {
  h1.classList.remove("change-bg");
}

function changeBg() {
  //   if (h1.classList.contains("change-bg")) {
  //     h1.classList.remove("change-bg");
  //   } else {
  //     h1.classList.add("change-bg");
  //   }

  h1.classList.toggle("change-bg");
}
