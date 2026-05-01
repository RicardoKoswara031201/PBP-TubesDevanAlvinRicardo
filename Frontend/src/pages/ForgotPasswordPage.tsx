import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";

export default function ForgotPasswordPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    newPassword: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await api.post(
        "/auth/reset-password",
        {
          username: form.username,
          newPassword: form.newPassword,
        },
        false
      );

      alert("Password berhasil direset");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Reset password gagal");
    }
  };

  return (
    <div className="login-page theme-page">
      <div className="login-container theme-form">
        <h2>Reset Password</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={(e) =>
              setForm({ ...form, username: e.target.value })
            }
            required
          />

          <input
            type="password"
            placeholder="New Password"
            value={form.newPassword}
            onChange={(e) =>
              setForm({ ...form, newPassword: e.target.value })
            }
            required
          />

          <button type="submit">Reset Password</button>
        </form>
      </div>
    </div>
  );
}