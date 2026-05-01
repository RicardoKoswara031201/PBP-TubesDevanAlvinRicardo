import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { api } from "../api/api";
import "../style/LoginPage.css";

export default function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // HANDLE INPUT
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // HANDLE LOGIN
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = await api.post("/auth/login", {
        username: formData.username,
        password: formData.password,
      });

      console.log("LOGIN RESPONSE:", data);

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.user.role);

      alert("Login berhasil!");

      if (data.user.role === "admin") {
        navigate("/admin");
      } else if (data.user.role === "kasir") {
        navigate("/kasir");
      } else {
        navigate("/menu");
      }
    } catch (error: any) {
      console.error(error);
      alert("Login gagal");
    }
  };

  return (
    <div className="login-page theme-page">
      <div className="login-container theme-form">
        <h2 className="login-title theme-text-center">
          Burger Queen Login
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="login-input-group theme-input-group">
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="login-input theme-input"
              required
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          <div className="login-input-group theme-input-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="login-input theme-input"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="forgot-password-link">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>

          <button
            type="submit"
            className="login-button theme-btn theme-btn-success"
          >
            Login
          </button>

          <div className="login-actions theme-flex-row">
            <Link to="/menu">
              <button
                type="button"
                className="login-register-btn theme-btn theme-btn-secondary"
              >
                Continue as Customer
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}