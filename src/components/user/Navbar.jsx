import { Link } from "react-router-dom";
import LoginAdminDialog from "@/components/admin/LoginAdminDialog";

export default function Navbar({ onSearch }) { // ⬅️ TAMBAH props
  return (
    <nav className="bg-[#5C3A21] text-white px-3 sm:px-6 py-3 sm:py-4 shadow sticky top-0 z-50">
      <div className="flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap">

        <Link to="/" className="text-sm sm:text-lg font-bold tracking-wide whitespace-nowrap">
          Event Ticket
        </Link>

        <div className="flex items-center gap-2 sm:gap-4 flex-wrap justify-end w-full sm:w-auto">

          <Link to="/" className="text-xs sm:text-sm hover:text-[#F3E6DB] transition whitespace-nowrap">
            Home
          </Link>

          <Link to="/about" className="text-xs sm:text-sm hover:text-[#F3E6DB] transition whitespace-nowrap">
            About
          </Link>

          {/* 🔍 TAMBAHAN LOGIC SEARCH */}
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => onSearch(e.target.value)} // ⬅️ TAMBAH
            className="w-32 sm:w-48 px-2 sm:px-3 py-1.5 rounded-md text-xs sm:text-sm text-black focus:outline-none focus:ring-2 focus:ring-[#F3E6DB]"
          />

          <LoginAdminDialog />

        </div>
      </div>
    </nav>
  );
}
