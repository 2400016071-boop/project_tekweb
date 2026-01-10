import { Link, useLocation, useNavigate } from "react-router-dom";

export default function AdminSidebar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const linkClass = (path) =>
    `block px-4 py-2 rounded-md font-medium transition-all duration-200 ${
      pathname === path
        ? "bg-[#F3E6DB] text-[#5C3A21] shadow"
        : "text-white hover:bg-[#8B5E3C]"
    }`;

  const handleLogout = () => {
    localStorage.removeItem("isAdminLogin");
    localStorage.removeItem("adminUsername");
    navigate("/");
  };

  return (
    <aside className="w-64 bg-[#5C3A21] text-white h-screen sticky top-0 flex flex-col">
      {/* ===== HEADER ===== */}
      <div className="p-6 text-xl font-bold border-b border-[#8B5E3C]">
        Admin Panel
      </div>

      {/* ===== MENU ===== */}
      <nav className="flex-1 px-4 py-4 space-y-2">
        <Link to="/admin/dashboard" className={linkClass("/admin/dashboard")}>
          Dashboard
        </Link>

        <Link to="/admin/events" className={linkClass("/admin/events")}>
          Data Event
        </Link>

        <Link
          to="/admin/event-create"
          className={linkClass("/admin/event-create")}
        >
          Tambah Event
        </Link>

        <Link
          to="/admin/transactions"
          className={linkClass("/admin/transactions")}
        >
          Transaksi
        </Link>

        <Link
          to="/admin/sales-report"
          className={linkClass("/admin/sales-report")}
        >
          Laporan Penjualan
        </Link>

        <Link to="/admin/profile" className={linkClass("/admin/profile")}>
          Profil Admin
        </Link>
      </nav>

      {/* ===== LOGOUT ===== */}
      <div className="p-4 border-t border-[#8B5E3C]">
        <button
          onClick={handleLogout}
          className="w-full bg-red-600 hover:bg-red-700 py-2 rounded-md font-semibold transition"
        >
          Logout
        </button>
      </div>
    </aside>
  );
}
