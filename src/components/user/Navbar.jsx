import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#5C3A21] text-white px-6 py-4 shadow">
      <div className="flex items-center justify-between">

        <Link to="/" className="text-lg font-bold tracking-wide">
          Event Ticket
        </Link>

        <div className="flex items-center gap-4">

          <Link to="/" className="text-sm hover:text-[#F3E6DB] transition">
            Home
          </Link>

          <Link to="/about" className="text-sm hover:text-[#F3E6DB] transition">
            About
          </Link>

          <input
            type="text"
            placeholder="Search event..."
            className="w-48 px-3 py-1.5 rounded-md text-sm text-black focus:outline-none focus:ring-2 focus:ring-[#F3E6DB]"
          />

          <Link
            to="/login-admin"
            className="bg-white text-[#5C3A21] px-4 py-1.5 rounded-md text-sm font-medium hover:bg-[#F3E6DB] transition"
          >
            Login Admin
          </Link>

        </div>
      </div>
    </nav>
  );
}
