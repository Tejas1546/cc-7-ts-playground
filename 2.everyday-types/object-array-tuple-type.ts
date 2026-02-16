// * Object literal types
// We can create an object using literal syntax
const lion = {
  //? Exercise - what happens when you hover over const lion?
  name: 'Lion',
  livesInLand: true,
  isPredator: true,
  estimatedCount: 3000,
};

// * function that displays an animal
function displayStringForAnimal(animal: {
  name: string;
  livesInLand: boolean;
  isPredator: boolean;
  estimatedCount: number;
}): string {
  const displayStr = `${animal.name} is ${animal.isPredator ? 'a predator' : 'not a predator'}\n. It is ${animal.estimatedCount > 10000 ? 'not endangered' : 'endangered!'}`;
  return displayStr;
}

function displayToConsole(animal: {
  name: string;
  livesInLand: boolean;
  isPredator: boolean;
  estimatedCount: number;
}) {
  const displayStr = displayStringForAnimal(animal);
  console.log(displayStr);
}

displayToConsole(lion);

const aCat: {
  name: string;
  livesInLand: boolean;
  isPredator: boolean;
  estimatedCount: number;
} = {
  name: 'Tom',
  livesInLand: true,
  estimatedCount: 100000,
  isPredator: true,
};
displayToConsole(aCat); //! Exercise: Fix the error - few fields are missing.

// * Typescript follows structured typing.
const aDog = {
  name: 'Dog',
  livesInLand: true,
  isPredator: false,
  estimatedCount: 1000000,
  domesticated: true,
};
displayToConsole(aDog); // * TypeScript ignores additional fields. It has everything that the function is expecting and much more. All the extra fields are ignored.

// * optional properties.
function logAnimal(animal: Animal) {
  displayToConsole(animal);
  if (animal.isDomesticated) {
    //* optinal param check, if it is absent, value will be undefined.
    console.log('Domesticated!');
  }
}

logAnimal(lion);
logAnimal(aDog);

// * We can observe that, we are simply duplicating the structured type in many places
// * We can avoid this by introducing a type. Thanks to typescript's type alias expressions.
type Animal = {
  // * Animal is a type alias
  name: string;
  livesInLand: boolean;
  isPredator: boolean;
  estimatedCount: number;
  isDomesticated?: boolean; // ? Exercise: What type you see when you hover?
}; // ! Exercise, use this type in logAnimal

// ! Exercise. Can you identify the common type
// ! among the following functions and create a type
// ! and use it?

type Rectangle = {
  width: number;
  height: number;
};

const getRectangleArea = (rectangle: Rectangle) => {
  return rectangle.width * rectangle.height;
};

const getRectanglePerimeter = (rectangle: Rectangle) => {
  return 2 * (rectangle.width + rectangle.height);
};

/*
 * Arrays and Tuples
 */

// * You can also describe the types of arrays in TypeScript. There are two different syntaxes for doing this.

// * The first option is the square bracket syntax. This syntax is similar to the type annotations we've made so far, but with the addition of two square brackets at the end to indicate an array.

let albums: string[] = [
  'Rubber Soul',
  'Revolver',
  "Sgt. Pepper's Lonely Hearts Club Band",
];

let dates: number[] = [1965, 1966, 1967];

let albums1: Array<string> = [
  'Rubber Soul',
  'Revolver',
  "Sgt. Pepper's Lonely Hearts Club Band",
];

//! Exercise - try removing types and see what TS infers?
// * Arrays of objects
// When specifying an array's type, you can use any built-in types, inline types, or type aliases:
type Album = {
  artist: string;
  title: string;
  year: number;
};

let selectedDiscography: Album[] = [
  {
    artist: 'Bob dyle',
    title: 'Rubber Soul',
    year: 1965,
  },
  {
    artist: 'The Beatles',
    title: 'Revolver',
    year: 1966,
  },
];
// ! exercise try removing types and see what TS inferes

// !You can not push some differently typed object than typed or inferred earlier
selectedDiscography.push({ name: 'Karma', type: 'cat' });

//* Tuples
// * Tuples let you specify an array with a fixed number of elements, where each element has its own type.

type StringAndNumberTouple = [string, number];
let album1: StringAndNumberTouple = ['Rubber Soul', 29];
album1[1] = 'Hi'; // ! error

// * Tuples are useful for grouping related information together without having to create a new type.
let albumWithPlayCount: [Album, number] = [
  {
    artist: 'The Beatles',
    title: 'Revolver',
    year: 1965,
  },
  10000,
];

// * Named tuples
// * To add more clarity to the tuple, names for each of the types can be added inside of the square brackets:

type NamedTuple = [album: Album, playCount: number];
const albumWithPlayCount1: NamedTuple = [
  {
    artist: 'The Beatles',
    title: 'Revolver',
    year: 1965,
  },
  10000,
];

// ! Exercise
type ShoppingCart = {
  userId: string;
  items: string[];
};

const processCart = (cart: ShoppingCart) => {
  // Do something with the cart in here
};

processCart({
  userId: 'user123',
  items: ['item1', 'item2', 'item3'], // ! fixme
});

type Ingredient = {
  name: string;
  quantity: string;
};

// !Exercise
type Recipe = {
  title: string;
  instructions: string;
  ingredients?: Ingredient[];
};

const processRecipe = (recipe: Recipe) => {
  console.log(recipe.title);
  console.log('Instructions: ', recipe.instructions);
  if (recipe.ingredients) {
    // !fixme
    for (let ingredient of recipe.ingredients) {
      console.log(ingredient);
    }
  }
};

processRecipe({
  title: 'Chocolate Chip Cookies',
  ingredients: [
    { name: 'Flour', quantity: '2 cups' },
    { name: 'Sugar', quantity: '1 cup' },
  ],
  instructions: 'Mix flour and sugar',
});

//! fixme, ensure someone can pass only two numbers
//! as a tuple
const setRange = (range: [number, number]) => {
  const x = range[0];
  const y = range[1];

  // Do something with x and y in here
  // x and y should both be numbers!
};

setRange([1, 2]); //

//! Fixme
const goToLocation = (coordinates: [number, number, number?]) => {
  const latitude = coordinates[0];
  const longitude = coordinates[1];
  const elevation = coordinates[2];

  // Do something with latitude, longitude, and elevation in here
  if (elevation) {
    console.log(elevation);
  }
};

goToLocation([2, 3, 3]);

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

// ? Dont you think, the board can be potentially be an array containing moves at any given point of time?

// ? What are the outcomes of the check that we make?  winner x, winner o, draw, progress  ??

type Move = 'x' | 'o' | undefined;
type Board = [Move, Move, Move, Move, Move, Move, Move, Move, Move];
type Status = 'x wins' | 'o wins' | 'drawn' | 'in progress';

function statusOfTicTacToeBoard(board: Board): Status {
  / * I am not bothered about implementing */;
  return 'drawn';
}

const winningX: Board = ['x', 'o', 'x', 'x', 'x', 'o', 'o', 'x', 'o'];

statusOfTicTacToeBoard(winningX);

const winningO: Board = ['x', 'o', 'x', 'o', 'o', 'o', 'o', 'x', 'o'];
statusOfTicTacToeBoard(winningO);

const drawn: Board = ['x', 'o', 'x', 'x', 'o', 'x', 'o', 'x', 'o'];
statusOfTicTacToeBoard(drawn);

const progress: Board = [undefined, 'x', 'o', 'x', 'o', 'x', 'o', 'x', 'o'];
statusOfTicTacToeBoard(progress);

// We want a student database.
// A student is going to have a name, he can be undergrad, graduate, post graduate.
// he can subsribe to few subjects. We do not know all subjects in advance. Example: maths, science, kannada, english, chemistry.
// He can have a score out of 100.
// Student should have an address. Address should have street, city, and state, and pincode (a number)
// For now, our database simply resides in memory in an array. That is our database.

// ? What is the type of student?
// ? What is the type of the database?

// ! Exercise

// We want a dealership chain across country for a vehicle brand.  And we want the dealership in only in "Mumbai", "Delhi", "Chennai", "Bangalore". And each location maintains the vehicles in stock. A vehicle has a name, optional registration number, fuel type (petrol, diesel, electric). we need to be able to maintain the inventory for all these 4 cities in a single data structure.

// ? can we have our type for VehicleInventory that captures vehciles in stock for these exact
// ? cities?
