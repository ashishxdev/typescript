let drink = "chai";

// Type Inferencing - where it automatically detect datatype of variable
let cups = Math.random() > 0.5 ? 10 : 5;
// let cups = Math.random() > 0.5 ? 10 : "5";

let channelName = "chaiaurcode";
// channelName = 122323 // => Type 'number' is not assignable to type 'string'.

let chaiFlavour: string = "masala chai";
chaiFlavour = "Ginger tea";

// type annotation -> where we have to tell the type of variable
// let chaiOrder:number
// let chaiOrder:boolean
