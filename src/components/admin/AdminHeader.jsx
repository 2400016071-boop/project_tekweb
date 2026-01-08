import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getAdmin, logoutAdmin } from "./adminAuth";

export default function AdminHeader() {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(null);

  // ambil data admin dari localStorage saat header dimount
  useEffect(() => {
    const adminData = getAdmin();
    if (adminData) {
      setAdmin(adminData);
    }
  }, []);

  const handleLogout = () => {
    logoutAdmin();
    navigate("/"); // redirect ke homepage setelah logout
  };

  return (
    <header className="bg-background shadow px-6 py-4 flex justify-between items-center rounded-lg mb-6">
      <h1 className="text-lg font-semibold text-[#5C3A21]">
        Dashboard
      </h1>

      <div className="flex items-center gap-3">
        <span className="text-sm text-muted-foreground">
          {admin ? admin.username : "Admin"}
        </span>

        <Button
          variant="secondary"
          size="icon"
          className="rounded-full bg-[#5C3A21] text-white hover:bg-[#7a4a2a]"
          onClick={handleLogout}
        >
          {admin ? admin.username[0].toUpperCase() : "A"}
        </Button>
      </div>
    </header>
  );
}
