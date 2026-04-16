let response: any = "42";

// let numericLength: number = response.length; // forceful type assertion
let numericLength: number = (response as string).length; // forceful assertion

// second example (bookString saved in local storage)
type book = {
  name: string;
};

let bookString = '{"name": "who moved my cheese"}';
let bookObject = JSON.parse(bookString) as book;

console.log(bookObject);
// let bookObject = JSON.parse(bookString)
// console.log(bookObject)

// Type assertion
const inputElement = document.getElementById("username") as HTMLInputElement;

// any and unknown difference
let value: any;
value = "42";
value = 3;
value = 4.3;
value = [12, 23, 23];
value.toUpperCase(); // No error

let newvalue: unknown;
newvalue = "42";
newvalue = 3;
newvalue = 4.3;
newvalue = [12, 23, 23];
// newvalue.toUpperCase(); // show error
if (typeof newvalue === "string") {
  newvalue.toUpperCase();
}

// try catch block
// try {
// } catch (error: any) {
//   console.log(error.message);
// }
// handling type assertion
try {
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
  console.log("Error", error);
}

const data: unknown = "chai aur code";
// const strData:string = data // error
const strData: string = data as string;

// type: never
type Role = "admin" | "user" | "superadmin";
function redirectBasedOnRole(role: Role): void {
  role; // type: Role
  if (role === "admin") {
    console.log("Redirecting to admin dashboard");
    return;
  }
  role; // type:user
  if (role === "user") {
    console.log("Redirecting to user dashboard");
    return;
  }
  role; // type: never if superadmin isn't added in type of Role if added role type will be superadmin now. It helps us to know what mistake we have done
}

// there are few functions which never return anything
function neverReturn(): never {
  while (true) {} // infinite loop - web servers are infinite loop which wait if request come they serve it
}
