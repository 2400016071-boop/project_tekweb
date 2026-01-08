import { Link, useLocation, useNavigate } from "react-router-dom";

export default function AdminSidebar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const linkClass = (path) =>
    `block px-4 py-2 rounded-md font-medium transition-all duration-200 ${
      pathname === path
        ? "bg-[#F3E6DB] text-[#5C3A21] shadow"
        : "text-white hover:bg-[#8B5E3C] hover:text-white"
    }`;

  const handleLogout = () => {
    localStorage.removeItem("isAdminLogin");
    localStorage.removeItem("adminUsername");
    navigate("/");
  };

  return (
    <aside className="w-64 bg-[#5C3A21] text-white min-h-screen flex flex-col">
      {/* HEADER */}
      <div className="p-6 font-bold text-xl border-b border-[#8B5E3C]">
        Admin Panel
      </div>

      {/* NAVIGATION */}
      <nav className="flex-1 px-4 py-4 space-y-2">
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

      {/* LOGOUT */}
      <div className="px-4 pb-6">
        <button
          onClick={handleLogout}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md font-semibold transition"
        >
          Logout
        </button>
      </div>
    </aside>
  );
}
