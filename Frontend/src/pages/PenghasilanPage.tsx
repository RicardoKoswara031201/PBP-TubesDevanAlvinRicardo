import { useEffect, useState } from "react";
import "../style/OrderPage.css";

export default function IncomePage() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const dummyOrders = [
      { id: 1, total: 45000, status: "pending" },
      { id: 2, total: 30000, status: "diproses" },
      { id: 3, total: 25000, status: "selesai" },
    ];

    setOrders(dummyOrders);
  }, []);

  const totalIncome = orders
    .filter((o) => o.status === "selesai")
    .reduce((sum, o) => sum + o.total, 0);

  return (
    <div className="order-container">
      <h2>Penghasilan Kasir</h2>

      <h1 style={{ marginTop: "20px" }}>
        Rp {totalIncome}
      </h1>
    </div>
  );
}