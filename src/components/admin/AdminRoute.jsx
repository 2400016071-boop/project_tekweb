import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
  const isLogin = localStorage.getItem("isAdminLogin");

  if (!isLogin) {
    return <Navigate to="/" replace />; // redirect ke homepage kalau belum login
  }

  return children;
}
