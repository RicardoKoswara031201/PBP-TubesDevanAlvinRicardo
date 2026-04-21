import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children, roles }: any) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token) return <Navigate to="/login" />;

  // cek role
  if (roles && !roles.includes(role)) {
    return <Navigate to="/menu" />;
  }

  return children;
};