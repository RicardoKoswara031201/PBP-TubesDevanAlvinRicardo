import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { api } from '../api/api';
import '../style/LoginPage.css';

export const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await api.post('/auth/login', {
        email: formData.email,
        password: formData.password
      });

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);

      // 🔥 PISAH ROLE
      if (data.role === "admin") {
        navigate("/products"); // menu admin
      } else {
        navigate("/menu"); // menu customer
      }

      alert("Login berhasil!");
    } catch (err: any) {
      alert("Login gagal");
    }
  };

  return (
    <div className="login-page theme-page">
      <div className="login-container theme-form">
        <h2 className="login-title theme-text-center">Restaurant Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="login-input-group theme-input-group">
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="login-input theme-input"
              required
              onChange={handleChange}
              value={formData.email}
            />
          </div>

          <div className="login-input-group theme-input-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="login-input theme-input"
              required
              onChange={handleChange}
              value={formData.password}
            />
          </div>

          <button type="submit" className="login-button theme-btn theme-btn-success">
            Login
          </button>

          {/* 🔥 CUSTOMER BUTTON */}
          <div className="login-actions theme-flex-row">
            <Link to="/menu" className="login-register-link">
              <button type="button" className="login-register-btn theme-btn theme-btn-secondary">
                Customer
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};