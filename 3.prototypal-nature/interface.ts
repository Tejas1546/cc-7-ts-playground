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

  displayInfo(sequence: number): string;
}

// ! Exercise : Create an instance of Flight.
const aFlight: Flight = {
<<<<<<< HEAD
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
=======
  date: '3-Feb-2026',
  operator: 'Indigo',
  destination: { airport: 'Mangalore', latitude: 10, longitude: 14 },
  origin: { airport: 'Bangalore', latitude: 15, longitude: 14 },
  price: 2000,
  supersonic: false,
  displayInfo(sequence: number) {
    return '';
  },
};
// ! Exercise: Create an instance of PassengerFlight. How do we implement displayInfo?
const aPassengerFlight: PassengerFlight = {
  date: '3-Feb-2026',
  operator: 'Indigo',
  destination: { airport: 'Mangalore', latitude: 10, longitude: 14 },
  origin: { airport: 'Bangalore', latitude: 15, longitude: 14 },
  price: 2000,
  supersonic: false,
  make: 'Airbus',
  countryOfOrigin: 'India',

  displayInfo(sequence: number) {
>>>>>>> eecf671e118344a40b21fefccc118c3ffe6f3570
    const that = this;
    function doStuff2(this: any) {
      console.log(that.operator);
    }
<<<<<<< HEAD
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
=======

    const doStuff3 = () => {
      console.log(that.operator);
    };

    // doStuff3();
    console.log(sequence);
    // Going to get a `this` parameter
    // When a function becomes part of an object, it is called as method.
    // return `${this.operator} flight is from ${this.origin.airport} to ${this.destination.airport}`;

    return this.operator;
  },

  //   displayInfo: () => {
  //     return `${this.operator} flight is from ${this.origin.airport} to ${this.destination.airport}`;
  //   },
};

function doStuff1(this: any) {
  // global in node, and window in browser. globalThis
  // you get implicitely the `this` argument
  console.log(this);
}

// doStuff1(); //this will be global.

console.log(aPassengerFlight.displayInfo(3));

const adder = (a: number, b: number): number => a + b;

adder(1, 2);

const displayInfo = aPassengerFlight.displayInfo;
globalThis.operator = 'Delta Airlines';
console.log(displayInfo(4)); // ? What do you think will happen now?
>>>>>>> eecf671e118344a40b21fefccc118c3ffe6f3570

console.log(aPassenger.displayInfo());
// ! Exercise
// Create an interface that has an id, name, and address. Call it Person.
// Create Employee, and Student interfaces extending from this. Employee will have company associated, and student will have an institute associated in addition to id, name, and address

<<<<<<< HEAD
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
=======
// * interfaces and types can be recursive as well
// For example tree, or linked list
>>>>>>> eecf671e118344a40b21fefccc118c3ffe6f3570
interface LinkedListNode {
  data: number;
  next: LinkedListNode | null;
}
<<<<<<< HEAD

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
=======
>>>>>>> eecf671e118344a40b21fefccc118c3ffe6f3570
