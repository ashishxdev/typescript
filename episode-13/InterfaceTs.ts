// interface is just defining structure it's not an implementation
// Interface is a template
// Give shape to object
// Can interchange with type too
interface Chai {
  flavour: string;
  price: number;
  milk?: boolean;
}
const masala: Chai = {
  flavour: "masala",
  price: 20,
};

// readonly
interface Shop {
  readonly id: number;
  name: string;
}
const s: Shop = {
  id: 2,
  name: "Chaicode",
};
// s.id = 3

// function handling in interface
interface DiscountCalculator {
  (price: number): number;
}
const apply50: DiscountCalculator = (p) => p * 0.5;

// methods
interface TeaMachine {
  start(): void;
  stop(): void;
}
const machine: TeaMachine = {
  start() {
    console.log("start");
  },
  stop() {
    console.log("stop");
  },
};

// index signature
interface ChaiRatings {
  [flavor: string]: number;
}
const ratings: ChaiRatings = {
  masala: 4.5,
  ginger: 4.5,
};

// main importance (interface merge)
interface User {
  name: string;
}
interface User {
  age: number;
}
const u: User = {
  name: "Aashish",
  age: 21,
};

// interface extend
interface A {
  a: string;
}
interface B {
  b: string;
}
interface C extends A, B {}
