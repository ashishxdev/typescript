// function makeChai(order: { type: string; sugar: number; strong: boolean }) {
//   console.log(order);
// }
// function serveChai(order: { type: string; sugar: number; strong: boolean }) {
//   console.log(order);
// }

type ChaiOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};

function makeChai(order: ChaiOrder) {
  console.log(order);
}
function serveChai(order: ChaiOrder) {
  console.log(order);
}

// where this doesn't work perfectly in classes

// type TeaRecipe = {
//   water: number;
//   milk: number;
// };
interface TeaRecipe {
  water: number;
  milk: number;
}

class MasalaChai implements TeaRecipe {
  water = 100;
  milk = 50;
}

// type CupSize = "small" | "large";
// class Chai implements CupSize {} // error and didn't sent any suggestions because cupsize has types which we have setted to solve this we use interface for hardcoded types

interface CupSize {
  size: "small" | "large";
}
class Chai implements CupSize {
  size: "small" | "large" = "large";
}

// For classes it's preferred to use instance instead of type

// Types betrayed here asw:-
// type Responsed = { ok: true } | { ok: false };
// class myRes implements Responsed {
//   ok: boolean = true; // will show error
// }
interface Responsed {
  ok: true | false;
}
class myRes implements Responsed {
  ok: boolean = true;
}

// union
type TeaType = "masala" | "ginger" | "lemon"; // we call this literal types too because we didn't gave it string boolean number type and gave literal types
function orderChai(t: TeaType) {
  console.log(t); // here t can be anyone from teatype i.e. masala, ginger, lemon we can't give coffee as value of t
}

// intersection
type BaseChai = { teaLeaves: number };
type Extra = { masala: number };

type masalaChai = BaseChai & Extra;

const cup: masalaChai = {
  teaLeaves: 10,
  masala: 20,
};

// option value
type User = {
  username: string;
  bio?: string;
  //   bio: string; // if did this it will show error for u1
};
const u1: User = { username: "Aashish" };
const u2: User = { username: "Aashish", bio: "Aashish.ai" };

// read only values
type Config = {
  readonly appName: string;
  version: number;
};

const cfg: Config = {
  appName: "ChaiAurCode",
  version: 1,
};

cfg.version = 2; // i can change this
// cfg.appName = "okbrother"; // readonly says appName should be set once only after that we can't change it's value
