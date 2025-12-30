import { Link } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen">
      <div className="p-6 font-bold text-xl">Admin Panel</div>

      <nav className="px-4 space-y-2">
        <Link
          to="/admin"
          className="block px-4 py-2 rounded hover:bg-gray-700"
        >
          Dashboard
        </Link>

        <Link
          to="/admin/events/create"
          className="block px-4 py-2 rounded hover:bg-gray-700"
        >
          Tambah Event
        </Link>
      </nav>
    </aside>
  );
}