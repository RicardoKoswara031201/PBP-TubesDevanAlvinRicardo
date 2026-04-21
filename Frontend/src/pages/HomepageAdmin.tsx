import { Link, useNavigate } from "react-router-dom";
import '../style/AdminHomePage.css';

export default function AdminHomePage() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <div className="admin-page">
      <h1 className="admin-title">Admin Dashboard</h1>

      <div className="admin-grid">
        <Link to="/products" className="admin-card">
          <div className="admin-icon">📦</div>
          <h3>Manage Products</h3>
          <p>Tambah, edit, dan hapus produk</p>
        </Link>

        <Link to="/categories" className="admin-card">
          <div className="admin-icon">🏷️</div>
          <h3>Manage Categories</h3>
          <p>Kelola kategori produk</p>
        </Link>

        <Link to="/orders" className="admin-card">
          <div className="admin-icon">🧾</div>
          <h3>Manage Orders</h3>
          <p>Lihat dan update pesanan</p>
        </Link>

        <Link to="/users" className="admin-card">
          <div className="admin-icon">👤</div>
          <h3>Manage Users</h3>
          <p>Kelola admin & kasir</p>
        </Link>
      </div>

      <div className="admin-logout">
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}