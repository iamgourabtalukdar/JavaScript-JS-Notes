// const tempInput = document.getElementById("temperature-input");
// const convertBtn = document.getElementById("convert-btn");
// const resultBox = document.getElementById("result");

// convertBtn.addEventListener("click", () => {
//   const tempInCel = Number.parseInt(tempInput.value);

//   const tempInFer = (tempInCel * 9) / 5 + 32;

//   resultBox.innerText = tempInFer;
// });

const tempForm = document.getElementById("converter-form");
const tempInput = document.getElementById("temperature-input");
const resultBox = document.getElementById("result");

tempForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const tempInCel = Number.parseInt(tempInput.value);

  const tempInFer = (tempInCel * 9) / 5 + 32;

  resultBox.innerText = `${tempInFer} °F`;
});
