const h1 = document.querySelector("h1");
const span = document.querySelector("span");
const form = document.querySelector("form");
const inputText = document.querySelector("input[type='text']");
const inputPassword = document.querySelector("input[type='password']");
const inputSubmit = document.querySelector("input[type='submit']");
const select = document.querySelector("select");

inputText.addEventListener("focus", () => {
  console.log("input element focused");
});
inputText.addEventListener("blur", (event) => {
  console.log("input element blur");

  if (event.target.value.length < 4) {
    event.target.style.border = "1px solid red";
  } else {
    event.target.style.border = "1px solid black";
  }
});

inputPassword.addEventListener("blur", (event) => {
  console.log("input element blur");

  if (event.target.value.length < 4) {
    event.target.style.border = "1px solid red";
  } else {
    event.target.style.border = "1px solid black";
  }
});

// inputText.addEventListener("keydown", (event) => {
//   console.log("input element keydown");
//   console.log(event);
//   span.innerText = event.target.value;
// });

inputText.addEventListener("keyup", (event) => {
  console.log("input element keyup");
  console.log(event);
  span.innerText = event.target.value;
});

const handle = (event) => {
  console.log("input element blur");

  if (event.target.value.length < 4) {
    event.target.style.border = "1px solid red";
  } else {
    event.target.style.border = "1px solid black";
  }
};
inputText.addEventListener("blur", handle);

inputPassword.addEventListener("blur", handle);
