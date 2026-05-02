import { useEffect, useState } from "react";
import { api } from "../api/api";
import "../style/OrderPage.css";

export default function OrderPage() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await api.get<any[]>("/orders");

        console.log("ORDERS:", data);

        setOrders(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Failed fetch orders:", err);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="order-container">
      <h2>Daftar Pesanan</h2>

      <table className="order-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td>{o.id}</td>

              <td>
                Rp {o.total ?? o.total_price ?? 0}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}