function makeChai(type: string, cups: number) {
  console.log(`Making ${cups} cups of ${type}`);
}
makeChai("Masala Chai", 3);

//
function getChai(): number {
  // automatically typecast if type number not mentioned
  return 32;
  // return "ok" // error
}

//
function makeOrder(order: string) {
  if (!order) return null;
  return order;
}
// function makeOrder2(order: string): string {
//   if (!order) return null; // error
//   return order;
// }

// Logger Functions
function logChai(): void {
  console.log("Chai is ready");
}

// optional functions
function orderChai(type?: string) {}
// default
function orderChai2(type: string = "Masala Chai") {}

// function with parameters
function createChai(order: {
  type: "string";
  sugar: number;
  size: "small" | "large";
}): number {
  return 4;
}
