import { Navigate, Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";

export default function AdminRoute() {
  const isLogin = localStorage.getItem("isAdminLogin");

  // 🔐 PROTEKSI ROUTE
  if (!isLogin) {
    return <Navigate to="/" replace />;
  }

  // 🧱 LAYOUT ADMIN
  return (
    <div className="flex min-h-screen bg-muted/40">
      {/* Sidebar (sticky) */}
      <AdminSidebar />

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <AdminHeader />

        {/* HANYA BAGIAN INI YANG SCROLL */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
