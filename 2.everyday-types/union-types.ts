type ID = string | number; //union type

function displayID(id: ID) {
  // type narrowing
  if (typeof id === "number") {
    console.log(id.toFixed(2));
  } else {
    console.log(id.toUpperCase());
  }
}

displayID("zzz");

type Direction = "South" | "west" | "north" | "east";
function goTo(direction: Direction) {
  switch (direction) {
    case "east":
      break;
    case "South":
      break;
    case "north":
      break;
    case "west":
      break;
    default:
      break;
  }
}
