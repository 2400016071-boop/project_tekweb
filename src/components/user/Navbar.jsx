import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoginAdminDialog from "@/components/admin/LoginAdminDialog";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-[#5C3A21] text-white shadow w-full relative z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link to="/" className="text-lg font-bold">
          Event Ticket
        </Link>

        {/* DESKTOP MENU */}
        {!isMobile && (
          <div className="flex items-center gap-6">
            <Link to="/" className="hover:text-[#F3E6DB]">Home</Link>
            <Link to="/about" className="hover:text-[#F3E6DB]">About</Link>
            <LoginAdminDialog />
          </div>
        )}

        {/* HAMBURGER */}
        {isMobile && (
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        )}
      </div>

      {/* MOBILE MENU → KE BAWAH */}
      {isMobile && open && (
        <div className="bg-[#5C3A21] flex flex-col px-6 py-4 space-y-4">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <LoginAdminDialog />
        </div>
      )}
    </nav>
  );
}
