const btn = document.querySelector("button");
const innerDiv = document.querySelector(".inner");
const outerDiv = document.querySelector(".outer");

const clickHandler = (event) => {
  console.log("btn clicked");
};
btn.addEventListener("click", clickHandler);

function handleRemove() {
  btn.removeEventListener("click", clickHandler);
}

// innerDiv.addEventListener("click", (e) => {
//   console.log("inner clicked");
//   console.log(e.target);
// });

// outerDiv.addEventListener("click", (e) => {
//   console.log("outer clicked");
//   console.log(e.target);
// });
