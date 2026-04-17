const chaiFlavour: string[] = ["Masala", "Adrak"];
const chaiPrice: number[] = [23, 20];

const rating: Array<number> = [23, 20];

// Array of objects
type Chai = {
  name: string;
  price: number;
};
const menu: Chai[] = [
  { name: "Masala Chai", price: 32 },
  { name: "Adrak Chai", price: 12 },
];
menu.push({ name: "Green tea", price: 83 });

// read only array - define but can't modify
const cities: readonly string[] = ["Delhi", "Mumbai"];
// cities.push("Afghanistan"); // error we can't push

// multi dimensional array
const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

// tuple - order should be same
let chaiTuple: [string, number];
chaiTuple = ["Masala", 25];
chaiTuple = ["Adrak", 25];
// chaiTuple = [25, "Adrak"]; // error

let userInfo: [string, number, boolean?];
userInfo = ["ashish", 10]; // if no option boolean? it'll give error
userInfo = ["rokhan", 20, true];

// read only tuple
const locations: readonly [number, number] = [12, 23];
const chaiItems: [name: string, price: number] = ["Masala Chai", 32];

// enums - restrict choices
enum CupSize {
  SMALL,
  MEDIUM,
  LARGE,
}
const c = CupSize.LARGE;

// auto increament values in enum
enum Status {
  PENDING = 100,
  SERVED, // Automatically assigned 101
  CANCELLED, // Automatically assigned 102
}

// enums helpful in string vals
enum ChaiType {
  MASALA = "masala",
  GINGER = "ginger",
}
function makeChai(type: ChaiType) {
  console.log(`Making: ${type}`);
}
makeChai(ChaiType.GINGER);
// makeChai("masala"); // error

// we can give heterogenous values too not a good practice tho. No error tho
enum RandomEnum {
  ID = 1,
  NAME = "chai",
}

// we can use const too our wish. We can't change values tho
const enum Sugars {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}
const s = Sugars.HIGH;

//
let t: [string, number] = ["chai", 9];
t.push("extra"); // unexpected behaviour as this is tuple but it's an array so we can push values tho. avoid this mistake
