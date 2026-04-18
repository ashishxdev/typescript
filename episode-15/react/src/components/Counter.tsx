// normal
// import { useState } from "react";

import { useState } from "react";

// export function Counter() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <p>Cups Ordered: {count}</p>
//       <button onClick={() => setCount((c) => c + 1)}>Order one more</button>
//     </div>
//   );
// }

// using typescript
export function Counter() {
  const [count, setCount] = useState<number | null>(0);
  //   const [count, setCount] = useState<number | null>("0"); // error not a string

  return (
    <div>
      <p>Cups Ordered: {count}</p>
      {/* <button onClick={() => setCount((count) => count + "1")}></button> // error -> string issue */}
      <button onClick={() => setCount((count) => count + 1)}>
        Order one more
      </button>
    </div>
  );
}
