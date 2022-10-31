const player = {
  x: 0,
  y: 1,
  direction: "right"
};

const targetCell = {
  x: 5,
  y: 3
};

const boardSettings = {
  nbRows: 4,
  nbCells: 6
};

let isGameOver = false;
let moveCount = 0;

init();

// -- Implementation --

function init() {
  drawBoard();
  bindKeyboardEvents();
}

function drawBoard() {
  const boardElement = document.getElementById("board");

  for (let rowIndex = 0; rowIndex < boardSettings.nbRows; rowIndex++) {
    const rowElement = document.createElement("div");
    rowElement.classList.add("row");

    for (let cellIndex = 0; cellIndex < boardSettings.nbCells; cellIndex++) {
      const cellElement = document.createElement("div");
      cellElement.classList.add("cell");

      if (rowIndex === targetCell.y && cellIndex === targetCell.x) {
        cellElement.classList.add("target");
      }

      if (rowIndex === player.y && cellIndex === player.x) {
        cellElement.classList.add("player");
        cellElement.classList.add(player.direction);
      }

      rowElement.appendChild(cellElement);
    }

    boardElement.appendChild(rowElement);
  }

  if (isWinningPosition()) {
    isGameOver = true;
    setTimeout(displayMoveCount, 0); // SetTimeout to wait for view re-render
    setTimeout(askForReplay, 0); // SetTimeout to wait for view re-render
  }

  function isWinningPosition() {
    return player.x === targetCell.x && player.y === targetCell.y;
  }
}

function redrawBoard() {
  clearBoard();
  drawBoard();
}

function clearBoard() {
  document.getElementById("board").innerHTML = "";
}

function bindKeyboardEvents() {
  document.addEventListener("keyup", (event) => {
    if (isGameOver) { return; }

    switch(event.code) {
      case "Space":
      case "ArrowUp":
        moveForward(); break;
      case "ArrowRight":
        turnRight(); break;
      case "ArrowLeft":
        turnLeft(); break;
      default: break;
    }
  });
}

function moveForward() {
  if (! canMove()) {
    return;
  }

  moveCount++;

  switch(player.direction) {
    case "right": 
      player.x++; break;
    case "left":
      player.x--; break;
    case "up":
      player.y--; break;
    case "down":
      player.y++; break;
    default:
      console.error("Invalid direction value");
  }

  redrawBoard();

  function canMove() {
    return (player.direction === "right" && player.x < boardSettings.nbCells - 1)
      || (player.direction === "left" && player.x > 0)
      || (player.direction === "up" && player.y > 0)
      || (player.direction === "down" && player.y < boardSettings.nbRows - 1);
  }
}

function turnLeft() {
  moveCount++;

  switch(player.direction) {
    case "right": 
      player.direction = "up"; break;
    case "left":
      player.direction = "down"; break;
    case "up":
      player.direction = "left"; break;
    case "down":
      player.direction = "right"; break;
    default:
      console.error("Invalid direction value");
  }

  redrawBoard();
}

function turnRight() {
  moveCount++;

  switch(player.direction) {
    case "right": 
      player.direction = "down"; break;
    case "left":
      player.direction = "up"; break;
    case "up":
      player.direction = "right"; break;
    case "down":
      player.direction = "left"; break;
    default:
      console.error("Invalid direction value");
  }

  redrawBoard();
}

function displayMoveCount() {
  document.getElementById("result").innerHTML = `<h1>Felicitation. Vous avez gagné en ${moveCount} coups !</h1>`;
}

function askForReplay() {
  const shouldReplay = confirm("Voulez-vous recommencer?");
  if (shouldReplay) {
    alert("Let's go again");
    resetGame();

  } else {
    alert("Ok on s'arrête");
  }
}

function resetGame() {
  player.x = 0;
  player.y = 0;
  moveCount = 0;
  isGameOver = false;
  redrawBoard();
  removeWinningMessage();

}

function removeWinningMessage() {
  document.getElementById("result").innerHTML = "";
}
