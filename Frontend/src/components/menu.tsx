import { Product } from "../types";
import "./Menu.css";

interface Props {
  products: Product[];
  addToCart: (p: Product) => void;
}

export default function Menu({ products, addToCart }: Props) {
  return (
    <div className="menu-grid">
      {products.map(p => (
        <div key={p.id} className="card">
          <img src={p.image} alt={p.name} />

          <h3>{p.name}</h3>
          <p>Rp {p.price}</p>

          <button onClick={() => addToCart(p)}>
            + Tambah
          </button>
        </div>
      ))}
    </div>
  );
}
