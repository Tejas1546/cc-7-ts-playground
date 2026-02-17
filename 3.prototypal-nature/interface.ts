// * interface is another mechanism to create an object type.
// * differs from the type alias, where an interface can be extended by another interface, whereas
// * you can not extend a type from another type
// * We can open an interface again and few more properties and thus can augment an existing interface.
interface Flight {
  operator: string;
  origin: { airport: string; latitude: number; longitude: number };
  destination: { airport: string; latitude: number; longitude: number };
  date: string;
  price: number;
}

// * One can derive from existing interface
interface PassengerFlight extends Flight {
  make: string;
  countryOfOrigin: string;
}

// * One can augment existing interface by re opening the declaration and can add more fields
interface Flight {
  supersonic: boolean;

  displayInfo(): string;
}

// ! Exercise : Create an instance of Flight.
const aFlight: Flight = {
  date: "3-feb-2026",
  operator: "indigo",
  destination: { airport: "Mng", latitude: 10, longitude: 10 },
  origin: { airport: "bang", latitude: 10, longitude: 10 },
  price: 3000,
  supersonic: false,
  displayInfo() {
    return "";
  },
};
// ! Exercise: Create an instance of PassengerFlight. How do we implement displayInfo?
const aPassenger: PassengerFlight = {
  date: "3-feb-2026",
  operator: "indigo",
  destination: { airport: "Mng", latitude: 10, longitude: 10 },
  origin: { airport: "bang", latitude: 10, longitude: 10 },
  price: 3000,
  supersonic: false,
  make: "airbus",
  countryOfOrigin: "india",
  displayInfo() {
    // GOing to get a 'this' paarm
    // when a function becomes part of an object it is called as method
    const that = this;
    function doStuff2(this: any) {
      console.log(that.operator);
    }
    const doStuff3 = () => {
      console.log(that.operator);
    };
    doStuff3();
    return `${this.operator} flight is from ${this.origin.airport} to ${this.destination.airport}`;
  },
  // displayInfo:()=>{
  //   return `${this.operator} flight is from ${this.origin.airport} to ${this.destination.airport}`;
  // }
};
const adder = (a: number, b: number): number => {
  //console.log(this.operation)
  return a + b;
};
adder(1, 2);

console.log(aPassenger.displayInfo());
// ! Exercise
// Create an interface that has an id, name, and address.
// Create Employee, and Student interfaces extending from this. Employee will have company associated, and student will have an institute associated in addition to id, name, and address

interface Info {
  name: string;
  id: number;
  address: { street: string; pin: number };
}

interface Employe extends Info {
  company: string;
}

interface Student extends Info {
  institute: string;
}

//* interfaces and type can be recursive as well
//for example tree, or linked list
interface LinkedListNode {
  data: number;
  next: LinkedListNode | null;
}

const n1: LinkedListNode = {
  data: 1,
  next: null,
};

const n2: LinkedListNode = {
  data: 2,
  next: null,
};

const n3: LinkedListNode = {
  data: 3,
  next: null,
};

n1.next = n2;
n2.next = n3;
