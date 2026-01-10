import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getAdmin } from "@/components/admin/adminAuth";

export default function AdminHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const [admin, setAdmin] = useState(null);

  // Ambil data admin dari localStorage
  useEffect(() => {
    const adminData = getAdmin();
    if (adminData) {
      setAdmin(adminData);
    }
  }, []);

  const goToProfile = () => {
    navigate("/admin/profile");
  };

  // Judul dinamis sesuai halaman
  const pageTitle = () => {
    if (location.pathname.includes("event-create")) return "Tambah Event";
    if (location.pathname.includes("transactions")) return "Daftar Transaksi";
    if (location.pathname.includes("profile")) return "Profil Admin";
    return "Dashboard";
  };

  return (
    <header className="bg-white border-b px-6 py-4 flex justify-between items-center sticky top-0 z-10">
      {/* TITLE */}
      <h1 className="text-lg font-semibold text-[#5C3A21]">{pageTitle()}</h1>

      {/* USER INFO */}
      <div className="flex items-center gap-3">
        <span className="text-sm text-muted-foreground">
          {admin ? admin.username : "Admin"}
        </span>

        {/* AVATAR → KE PROFILE */}
        <button
          onClick={goToProfile}
          title="Profil Admin"
          className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#5C3A21] hover:ring-2 hover:ring-[#5C3A21] transition"
        >
          <img
            src={`https://ui-avatars.com/api/?name=${
              admin?.username || "Admin"
            }&background=5C3A21&color=fff`}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </button>
      </div>
    </header>
  );
}
