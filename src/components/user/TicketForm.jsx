import { useState } from "react";
import Navbar from "../../components/user/Navbar";
import Footer from "../../components/user/Footer";

export default function TicketForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(false);

  // ✅ DATA EVENT (sementara hardcode)
  const eventName = "Nama Event Kamu";

  const price = 50000;
  const total = price * qty;

  const whatsappNumber = "6281388609934";

  const handleSubmit = async () => {
    if (!name || !phone) return;

    setLoading(true);

    try {
      // 1️⃣ SIMPAN KE BACKEND
      const res = await fetch("http://localhost:3000/api/tickets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          qty,
          total,
          eventName,
        }),
      });

      if (!res.ok) throw new Error("Gagal simpan data");

      // 2️⃣ PESAN WHATSAPP
      const message = `
Halo, saya mau beli tiket.

Event: ${eventName}
Nama: ${name}
No WhatsApp: ${phone}
Jumlah Tiket: ${qty}
Total Harga: Rp ${total.toLocaleString("id-ID")}
      `;

      // 3️⃣ REDIRECT KE WA
      const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message
      )}`;

      window.open(whatsappLink, "_blank");
    } catch (error) {
      console.error(error);
      alert("Gagal menyimpan data!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F8F1EA] flex justify-center items-center px-4 py-10">
        <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6 space-y-4">
          <h1 className="text-xl font-bold text-[#5a3a22]">
            Form Pembelian Tiket
          </h1>

          {/* NAMA EVENT */}
          <p className="text-sm text-gray-600">
            Event: <span className="font-semibold">{eventName}</span>
          </p>

          {/* NAMA */}
          <div>
            <label className="text-sm">Nama Lengkap</label>
            <input
              type="text"
              className="w-full border rounded-md px-3 py-2 mt-1 text-sm"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* WHATSAPP */}
          <div>
            <label className="text-sm">Nomor WhatsApp</label>
            <input
              type="text"
              className="w-full border rounded-md px-3 py-2 mt-1 text-sm"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          {/* JUMLAH */}
          <div>
            <label className="text-sm">Jumlah Tiket</label>
            <input
              type="number"
              min="1"
              className="w-full border rounded-md px-3 py-2 mt-1 text-sm"
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
            />
          </div>

          {/* TOTAL */}
          <div className="bg-[#f3e9dd] p-3 rounded-md">
            <p className="text-sm text-gray-500">Total Harga</p>
            <p className="font-bold text-[#6b4226]">
              Rp {total.toLocaleString("id-ID")}
            </p>
          </div>

          {/* BUTTON */}
          <button
            onClick={handleSubmit}
            disabled={!name || !phone || loading}
            className={`w-full py-2 rounded-md text-white transition ${
              !name || !phone || loading
                ? "bg-gray-400"
                : "bg-[#6b4226] hover:bg-[#56321c]"
            }`}
          >
            {loading ? "Memproses..." : "Lanjut ke WhatsApp"}
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
}
