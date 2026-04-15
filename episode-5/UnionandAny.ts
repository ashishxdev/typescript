// Union
let subs: string | number = "1M";

// Use of union (we can create our own data types)
let apiRequestStatus: "pending" | "success" | "error" = "pending";
// apiRequestStatus = "done" // wrong as there's no type named "done"
apiRequestStatus = "success";
// console.log(apiRequestStatus)

let airlineSeat: "aisle" | "window" | "middle" = "aisle";
airlineSeat = "window";

// any
const orders = ["23", "24", "28", "21"];

// let currentorder; // type: any -> bad thing -> it should be written as string -> avoid any as much as possible

let currentorder: string | undefined; // here undefined because it might be possible there will be value or no that's why we added undefined data type

for (let order of orders) {
  if (order === "28") {
    currentorder = order;
    break;
  }
  currentorder = "11";
}

// currentorder = 11; // due to type:any
console.log(currentorder);
