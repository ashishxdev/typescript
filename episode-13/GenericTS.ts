// Generic is a template. make code reusable
// used when designing library and frameworks
function wrapInArray<T>(item: T): T[] {
  return [item];
}
wrapInArray("masala");
wrapInArray(32);
wrapInArray({ flavour: "Ginger" });

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
  //   return [b, a]; // error
}
pair("masala", "ginger");
pair("masala", 32);
pair("masala", { flavour: "Ginger" });

// generic interface
interface Box<T> {
  content: T;
}
const numberBox: Box<number> = {
  content: 2,
};
const numberBoxCup: Box<string> = {
  content: "cupboxyboxy",
};
// partial pick comit also available in this
// used in api responses
interface Apipromises<T> {
  status: number;
  data: T;
}
const res: Apipromises<{ flavour: string }> = {
  status: 4,
  data: { flavour: "ginger" },
};
