import { useEffect, useState } from "react";
// import { api } from "../api/api";
import "../style/OrderPage.css";

const USE_BACKEND = false;

export default function OrderPage() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    if (USE_BACKEND) {
      // ================= BACKEND =================
      const fetchOrders = async () => {
        try {
          const data = await api.get("/orders");
          setOrders(data);
        } catch (err) {
          console.error(err);
        }
      };
      fetchOrders();
    } else {
      // ================= DUMMY =================
      const dummyOrders = [
        { id: 1, customer: "Budi", total: 45000, status: "pending" },
        { id: 2, customer: "Ani", total: 30000, status: "done" },
        { id: 3, customer: "Joko", total: 25000, status: "pending" },
      ];

      setOrders(dummyOrders);
    }
  }, []);

  const updateStatus = (id: number) => {
    const updated = orders.map((o) =>
      o.id === id ? { ...o, status: "done" } : o
    );
    setOrders(updated);
  };

  return (
    <div className="order-container">
      <h2>Daftar Pesanan</h2>

      <table className="order-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Total</th>
            <th>Status</th>
            <th>Aksi</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.customer}</td>
              <td>Rp {o.total}</td>
              <td>{o.status}</td>
              <td>
                {o.status === "pending" && (
                  <button onClick={() => updateStatus(o.id)}>
                    Selesaikan
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}