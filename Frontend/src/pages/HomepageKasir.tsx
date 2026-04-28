import { Link, useNavigate } from "react-router-dom";
import "../style/AdminHomePage.css";
export default function KasirHomePage() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <div className="admin-page">
      <h1 className="admin-title">Kasir Dashboard</h1>

      <div className="admin-grid">

        <Link to="/orders" className="admin-card">
          <div className="admin-icon">🧾</div>
          <h3>Orders</h3>
          <p>Lihat & update pesanan</p>
        </Link>

        <Link to="/income" className="admin-card">
          <div className="admin-icon">💰</div>
          <h3>Penghasilan</h3>
          <p>Lihat total pemasukan</p>
        </Link>

      </div>

      <div className="admin-logout">
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}