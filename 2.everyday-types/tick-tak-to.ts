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

// ? We want a student DB
// ? A student is going to have a name, he can be undergrad, graduate, post graduate
// ? He can subscribe to few subjects. We do not know all subjects in advance. Ex: Math, Science, Kannada, English, Chemistry
// ? He can have score out of 100
// ? Student should have an address. Address must have street, city, state and pincode (in number)
// ? For now our DB simply resides in an array. That is our DB

// TODO: What is the type of student?
// TODO: What is the type of the DB?

type StudentGrade = "UNDER GRADUATE" | "GRADUATE" | "POST GRADUATE";

type Address = {
  street: string;
  city: string;
  state: string;
  pincode: number;
};

type Student = {
  name: string;
  grade: StudentGrade;
  subject: string[];
  score: number;
  address: Address;
};

type DB = {
  student: Student[];
};

const student1: Student = {
  name: "Tejas",
  grade: "UNDER GRADUATE",
  subject: ["Maths", "Science", "English", "Kannada"],
  score: 100,
  address: {
    street: "Street1",
    city: "Mangalore",
    state: "Karnataka",
    pincode: 575004,
  },
};

const dataBase: DB = {
  student: [student1],
};

// ! exercise
// we want a dealership chain across country for a vehicle brand. And we want the dealership in only in mumbai delhi chennai banglore. and each location maintains the vehicles in stock. a vehicle has a name optional rn fuel type (petrol, diesel, electric). we need to be able to maintiaon the inventory for all these 4 cities i na ds
