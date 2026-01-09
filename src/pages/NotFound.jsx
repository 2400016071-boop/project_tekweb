import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8F1EA]">
      <h1 className="text-6xl font-bold text-[#5C3A21]">404</h1>
      <p className="text-lg mt-4 mb-6">Halaman tidak ditemukan</p>
      <Link
        to="/"
        className="bg-[#5C3A21] text-white px-4 py-2 rounded hover:bg-[#8B5E3C]"
      >
        Kembali ke Home
      </Link>
    </div>
  );
}
