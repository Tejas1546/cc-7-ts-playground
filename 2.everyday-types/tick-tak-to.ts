// Design a function to check if there is a winner in a board of tic-tac-toe
// Tic tac toe board. It should take the board as input, and return winner x or o, or if the game is drawn, then return 'drawn'
//  * draw
//  x  o  x
//  x  x  o
//  o  x  o
// ! x wins!
//  x  x  o
//  o  x  o
//. o  o  x
// ! o wins
//  x  o  x
//  o  x  x
//  o  o  o

// ? What are the different values that can go into each cell? If we call it as Move,
// ? Can we have a type for it?

// ? Don't you think, the board can be potentially be an array containing moves at any given point of time?

// ? What are the outcomes of the check that we make? winner x, winner o, draw, progress ??

// * function statusOfTicTacToeBoard(board: Board): Status {/* I am not bothered about implementing */}

type Cell = "x" | "o" | undefined;
type Board = [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell];
type Status = "winner x" | "Winner o" | "draw" | "progress";

function statusOfTicTacToeBoard(board: Board): Status {
  return "Winner o";
}

const draw: Board = ["x", "o", "x", "x", "x", "o", "o", "x", "o"];

statusOfTicTacToeBoard(draw);
