import type { Product } from "../types";

interface Props {
  products: Product[];
  addToCart: (p: Product) => void;
}

export default function Menu({ products, addToCart }: Props) {
  return (
    <div>
      <h2>Menu</h2>

      {products.map(p => (
        <div key={p.id} style={{ border: "1px solid gray", margin: 10 }}>
          <h3>{p.name}</h3>
          <p>Rp {p.price}</p>
          <button onClick={() => addToCart(p)}>Tambah</button>
        </div>
      ))}
    </div>
  );
}