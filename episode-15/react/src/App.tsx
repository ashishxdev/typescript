import "./App.css";
import { ChaiCard } from "./components/ChaiCard.tsx";
import { Counter } from "./components/Counter.tsx";

import { type Chai } from "./assets/types/types.ts";
import { ChaiList } from "./components/ChaiList.tsx";
import { OrderForm } from "./components/OrderForm.tsx";
import { Card } from "./components/Card.tsx";

const menu: Chai[] = [
  { name: "Masala", id: 1, price: 40 },
  { id: 2, name: "Ginger", price: 20 },
  { id: 3, name: "Green", price: 60 },
];

function App() {
  return (
    <>
      <div>
        <h1>Vite + React</h1>
        {/* <ChaiCard name="Headphone" price="2000" /> -> when normal component was there*/}
        <ChaiCard name="Headphone" price={2000} isSpecial />
        <ChaiCard name="Iphone" price={50000} isSpecial={false} />
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <ChaiList items={menu} />
      </div>
      <div>
        <OrderForm
          onSubmit={(order) => {
            console.log("Placed:", order.name, order.cups);
          }}
        />
      </div>
      <div>
        {/* <Card title="Chai aur typescript" children={12} footer="Aashish" /> // this is wrong because footer type is react node */}
        <Card title="Chai aur typescript" footer={<button>Order Now</button>} />
      </div>
    </>
  );
}

export default App;
