import { Link, useLocation, useNavigate } from "react-router-dom";

export default function AdminSidebar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const linkClass = (path) =>
    `block px-4 py-2 rounded transition ${
      pathname === path
        ? "bg-[#8B5E3C] text-white"
        : "text-[#F3E6DB] hover:bg-[#8B5E3C]"
    }`;

  const handleLogout = () => {
    localStorage.removeItem("isAdminLogin");
    localStorage.removeItem("adminUsername");
    navigate("/");
  };

  return (
    <aside className="w-64 bg-[#5C3A21] text-white min-h-screen">
      <div className="p-6 font-bold text-xl border-b border-[#8B5E3C]">
        Admin Panel
      </div>

      <nav className="px-4 py-4 space-y-2">
        <Link to="/admin" className={linkClass("/admin")}>
          Dashboard
        </Link>

        <Link
          to="/admin/events/create"
          className={linkClass("/admin/events/create")}
        >
          Tambah Event
        </Link>
      </nav>

      <div className="px-4 mt-6">
        <button
          onClick={handleLogout}
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </aside>
  );
}
