let player = 1;
let symbol = "x";
let board = [null, null, null, null, null, null, null, null, null];
let winner = false;

function playerMove(id) {
  if (board[id] === null && winner === false) {
    console.log(player, symbol, id);
    document.getElementById(id).innerHTML = symbol;
    board[id] = symbol;
    console.log(board);

    if (checkWinner()) {
      document.querySelector(
        ".board__title"
      ).innerHTML = `Player ${player} Won!`;
    } else {
      changePlayer();
    }
    if (!board.includes(null) && !winner) {
      document.querySelector(".board__title").innerHTML = `Match is a draw!`;
      console.log("match is a draw");
    }
  }
}

function checkWinner() {
  for (let boardBox = 0; boardBox < board.length; boardBox++) {
    if (
      (boardBox === 0 || boardBox === 3 || boardBox === 6) &&
      board[boardBox] != null
    ) {
      if (
        board[boardBox] === board[boardBox + 1] &&
        board[boardBox] === board[boardBox + 2]
      ) {
        winner = true;
        console.log("winner", winner);
        return winner;
      }
    }
    if (
      (boardBox === 0 || boardBox === 1 || boardBox === 2) &&
      board[boardBox] != null
    ) {
      if (
        board[boardBox] === board[boardBox + 3] &&
        board[boardBox] === board[boardBox + 6]
      ) {
        winner = true;
        console.log("winner", winner);
        return winner;
      }
    }
    if ((boardBox === 0) && board[boardBox] != null) {
      if (
        board[boardBox] === board[4] &&
        board[boardBox] === board[boardBox + 8]
      ) {
        winner = true;
        console.log("winner", winner);
        return winner;
      }
    }
    if ((boardBox === 2) && board[boardBox] != null) {
      if (
        board[boardBox] === board[4] &&
        board[boardBox] === board[boardBox + 4]
      ) {
        winner = true;
        console.log("winner", winner);
        return winner;
      }
    }
  }
  return winner;
}

function restartGame() {
  player = 1;
  symbol = "x";
  winner = false;
  document.querySelector(
    ".board__title"
  ).innerHTML = `${symbol.toUpperCase()}'s Turn`;
  for (let id = 0; id < 9; id++) {
    board[id] = null;
    document.getElementById(id).innerHTML = "";
  }
}

function changePlayer() {
  if (player === 1) {
    player = 2;
    symbol = "o";
    document.querySelector(
      ".board__title"
    ).innerHTML = `${symbol.toUpperCase()}'s Turn`;
  } else {
    player = 1;
    symbol = "x";
    document.querySelector(
      ".board__title"
    ).innerHTML = `${symbol.toUpperCase()}'s Turn`;
  }
}
