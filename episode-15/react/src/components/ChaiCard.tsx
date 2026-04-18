// normal component
// export function ChaiCard({ name, price, isSpecial = false }) {
//   return (
//     <article>
//       <div>
//         <h2>
//           {name} {isSpecial && <span>🤩</span>}
//         </h2>
//         <p>{price}</p>
//       </div>
//     </article>
//   );
// }

// using typescript
interface ChaiCardProp {
  name: string;
  price: number;
  isSpecial: boolean;
}
export function ChaiCard({ name, price, isSpecial = false }: ChaiCardProp) {
  return (
    <article>
      <div>
        <h2>
          {name} {isSpecial && <span>🤩</span>}
        </h2>
        <p>{price}</p>
      </div>
    </article>
  );
}
