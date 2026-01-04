import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#5C3A21] text-white px-6 py-4 flex justify-between items-center shadow">
      {/* LOGO */}
      <Link to="/" className="text-lg font-bold tracking-wide">
        Event Ticket
      </Link>

      {/* LOGIN ADMIN */}
      <Link
        to="/login-admin"
        className="bg-white text-[#5C3A21] px-4 py-1.5 rounded-md text-sm font-medium hover:bg-[#F3E6DB] transition"
      >
        Login Admin
      </Link>
    </nav>
  );
}
