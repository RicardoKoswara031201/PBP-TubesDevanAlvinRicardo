import type { CartItem } from "../types";

interface Props {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

export default function Cart({ cart, setCart }: Props) {
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  const addQty = (id: number) => {
    setCart(cart.map(i =>
      i.productId === id ? { ...i, qty: i.qty + 1 } : i
    ));
  };

  const removeQty = (id: number) => {
    setCart(cart
      .map(i =>
        i.productId === id ? { ...i, qty: i.qty - 1 } : i
      )
      .filter(i => i.qty > 0)
    );
  };

  const checkout = async () => {
    await fetch("http://localhost:3000/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        total,
        items: cart.map(c => ({
          productId: c.productId,
          qty: c.qty
        }))
      })
    });

    alert("Order berhasil!");
    setCart([]);
  };

  return (
  <div style={{
    background: "white",
    padding: 20,
    borderRadius: 10,
    minWidth: 250
  }}>
    <h2>Cart</h2>

    {cart.map(item => (
      <div key={item.productId} style={{ marginBottom: 10 }}>
        <b>{item.name}</b>
        <p>Qty: {item.qty}</p>

        <button onClick={() => addQty(item.productId)}>+</button>
        <button onClick={() => removeQty(item.productId)}>-</button>
      </div>
    ))}

    <h3>Total: Rp {total}</h3>

    <button
      style={{ background: "green", color: "white", width: "100%" }}
      onClick={checkout}
    >
      Checkout
    </button>
  </div>
);
}
