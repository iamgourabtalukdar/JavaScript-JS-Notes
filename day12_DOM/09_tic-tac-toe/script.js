const statusElem = document.querySelector("#status");
const restartBtn = document.querySelector("#restart-btn");
const board = document.querySelector("#board");
let player;
const player1Symbol = "X";
const player2Symbol = "O";
let boardInputArr = Array.from({ length: 9 });

function initGame() {
  player = true;
  boardInputArr.fill(undefined);
  statusElem.innerText = `Player ${player1Symbol}'s turn`;
}

function checkWin() {
  // row check
  for (let i = 0; i < 3; i++) {
    const index = 2 * i + i;
    if (
      boardInputArr[index] !== undefined &&
      boardInputArr[index] === boardInputArr[index + 1] &&
      boardInputArr[index] === boardInputArr[index + 2]
    ) {
      return index;
    }
  }
  // col check
  for (let i = 0; i < 3; i++) {
    if (
      boardInputArr[i] !== undefined &&
      boardInputArr[i] === boardInputArr[i + 3] &&
      boardInputArr[i] === boardInputArr[i + 6]
    ) {
      return i;
    }
  }

  // diagonal check 1 (left to right)
  if (
    boardInputArr[0] !== undefined &&
    boardInputArr[0] === boardInputArr[4] &&
    boardInputArr[0] === boardInputArr[8]
  ) {
    return 0;
  }
  // diagonal check 1 (right to left)
  if (
    boardInputArr[2] !== undefined &&
    boardInputArr[2] === boardInputArr[4] &&
    boardInputArr[2] === boardInputArr[6]
  ) {
    return 2;
  }

  // if match is going
  return -1;
}

function resetGame() {
  initGame();
  const boardCells = board.querySelectorAll(".cell");
  boardCells.forEach((cell) => {
    cell.innerText = "";
  });

  board.onclick = checkClick;

  // board.removeEventListener("click", resetGame);
  // board.addEventListener("click", checkClick);
}
function isGameDraw() {
  return !boardInputArr.includes(undefined);
}
function checkClick(e) {
  if (!e.target.classList.contains("cell")) {
    return;
  }
  if (boardInputArr[e.target.dataset.index] !== undefined) {
    alert("Cell is already filled");
    return;
  }
  e.target.innerText = player ? player1Symbol : player2Symbol;
  boardInputArr[e.target.dataset.index] = player;

  if (isGameDraw()) {
    statusElem.innerText = `Game is Draw`;
    board.onclick = resetGame;
    return;
  }
  const index = checkWin();
  if (index !== -1) {
    statusElem.innerText = `Winner is : ${
      boardInputArr[index] ? player1Symbol : player2Symbol
    }`;
    board.onclick = resetGame;
    // board.removeEventListener("click", checkClick);
    // board.addEventListener("click", resetGame);
    return;
  }

  statusElem.innerText = `Player ${
    player ? player2Symbol : player1Symbol
  }'s turn`;
  player = !player;
}

// start
initGame();
board.onclick = checkClick;
// board.addEventListener("click", checkClick);
restartBtn.addEventListener("click", resetGame);
