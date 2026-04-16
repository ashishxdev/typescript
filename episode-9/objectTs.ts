const chai = {
  name: "Masala Chai",
  price: 20,
  isHot: true,
};
// typescript always infer bts
// {
//   name: string;
//   price: number;
//   isHot: boolean;
// }

// declaring object types
let tea: {
  name: string;
  price: number;
  isHot: boolean;
};
tea = {
  name: "Masala Chai",
  price: 20,
  isHot: true,
};

// alias objects
type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};
const adrakChai: Tea = {
  name: "Adrak Chai",
  price: 20,
  ingredients: ["ginger", "tea", "leaves"],
};

// Duck typing
type Cup = { size: string };
let smallCup: Cup = { size: "200ml" };
let bigCup = { size: "500ml", material: "steel" };
smallCup = bigCup;

type brew = { brewTime: number };
const coffee = { brewTime: 5, beans: "Arabica" };
const childBrew: brew = coffee;

// error if not filled
type User = {
  username: string;
  password: string;
};

const u: User = {
  username: "ChaiaurCode",
  password: "123", // error if commented or not filled
};

// Split out gigatype
type Item = { name: string; quantity: number };
type Address = { street: string; pin: number };
type Order = {
  id: string;
  items: Item[];
  address: Address;
};

// partial
type Chai = {
  name: string;
  price: number;
  isHot: boolean;
};
const updateChai = (updates: Partial<Chai>) => {
  console.log(`updating chai with`, updates);
};
updateChai({ price: 25 });
updateChai({ isHot: true });
updateChai({}); // we can do this too but this is a mistake or disadvantage

// required
type ChaiOrder = {
  name?: string;
  quantity?: number;
};
const placeOrder = (order: Required<ChaiOrder>) => {
  console.log(order);
};
// all properties should be used
placeOrder({
  name: "Masala Chai",
  quantity: 20,
});

// pick
type chai = {
  name: string;
  price: number;
  isHot: boolean;
  ingredients: string[];
};
type BasicChaiInfo = Pick<chai, "name" | "price">;
const chaiInfo: BasicChaiInfo = {
  name: "Masala Chai",
  price: 20,
};

// omit
type chainewInfo = {
  name: string;
  price: number;
  isHot: boolean;
  secretIngredients: string;
};
type PublicChai = Omit<chainewInfo, "secretIngredients">;
const chaichai: PublicChai = {
  name: "Masala Chai",
  price: 20,
  isHot: false,
};
