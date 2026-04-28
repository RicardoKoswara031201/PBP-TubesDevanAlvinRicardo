import { useEffect, useState } from "react";
import "../style/OrderPage.css";

export default function OrderPage() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const dummyOrders = [
      { id: 1, total: 45000, status: "pending" },
      { id: 2, total: 30000, status: "diproses" },
      { id: 3, total: 25000, status: "selesai" },
    ];

    setOrders(dummyOrders);
  }, []);

  return (
    <div className="order-container">
      <h2>Daftar Pesanan</h2>

      <table className="order-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>Rp {o.total}</td>
              <td>{o.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}