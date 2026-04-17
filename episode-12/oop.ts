// class Chai {
//   flavour: string;
//   price: number;
// }
// // type suggestion
// const masalachai = new Chai();
// masalachai.flavour = "masala";

// class Chai {
//   flavour: string;
//   price: number;

//   // here this is recommended too
//   constructor(flavour: string, price: number) {
//     ((this.flavour = flavour),
//     (this.price = price));
//     // this refers to new object
//   }
// }
// // type suggestion
// const masalachai = new Chai("ginger chai", 3); // now we have to give values here
// masalachai.flavour = "masala";

class Chai {
  flavour: string;
  price: number;
  constructor(flavour: string) {
    this.flavour = flavour;
  }
}
const masalachai = new Chai("ginger chai");
masalachai.flavour = "masala";

// access modifiers - private, public, protected
class chai {
  public flavour: string = "Masala";
  private secretIngredients = "Cardamon";
  // we associate method with private to access the private values
  reveal() {
    return this.secretIngredients;
  }
}
const masalaop = new chai();
masalaop.reveal();

// protected
class shop {
  protected shopName = "Chai corner";
}
class Branch extends shop {
  getName() {
    this.shopName;
  }
}
new Branch().getName;

// private again
class walet {
  #balance = 100; // support private - less preffered
  getBalance() {
    return this.#balance;
  }
}
const w = new walet();
w.getBalance();

// read only property - can't change once assigned
class Cup {
  readonly capacity: number = 250;

  constructor(capacity: number) {
    this.capacity = capacity;
  }
}

// controlled gates- getter setter - getter get values - setter set values
class modernChai {
  private _sugar = 2; // preffered to name with underscore i.e. _sugar
  get sugar() {
    return this._sugar;
  }
  set sugar(value: number) {
    if (value > 5) throw new Error("Too Sweet");
    this._sugar = value;
  }
}
const c = new modernChai();
c.sugar = 4;

// static
class EkChai {
  static shopName = "Chaicode Cafe";
  constructor(public flavour: string) {}
}
console.log(EkChai.shopName); // when Class.static_variable meaning we used static var

// sometimes we want to make classes but dont want that objects get created thru it we use abstract classes. in abstract classes implementation are less only syntax or methods or functionalites are defined
abstract class Drink {
  abstract make(): void;
}
class MyChai extends Drink {
  make() {
    console.log("Brewing chai");
  } // if we didn't made make() it would have showed error
}

// composition
class Heater {
  heat() {}
}
class chaiMaker {
  constructor(private heater: Heater) {}
  make() {
    this.heater.heat;
  }
}
