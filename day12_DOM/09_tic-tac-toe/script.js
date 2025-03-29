function checkClick(e) {
  e.target.innerText = player ? "😂" : "❤️";
  boardInputArr[e.target.dataset.index] = player;
  player = !player;
  console.log(boardInputArr);
}

let player = true;
// let boardInputArr = ["", "", "", "", "", "", "", "", ""];
let boardInputArr = Array.from({ length: 9 });
console.log(boardInputArr);

const board = document.querySelector("#board");

board.addEventListener("click", checkClick);
