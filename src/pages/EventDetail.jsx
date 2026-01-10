import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/user/Navbar";
import Footer from "../components/user/Footer";
import { useEvents } from "../hooks/useEvents";

export default function EventDetail() {
  const { id } = useParams();
  const { getEventById } = useEvents();
  const event = getEventById(Number(id));

  const [showModal, setShowModal] = useState(false);
  const [qty, setQty] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmed, setConfirmed] = useState(false); // 🔹 STEP MODAL
  const [loading, setLoading] = useState(false);

  if (!event) {
    return (
      <>
        <Navbar />
        <p className="p-6">Event tidak ditemukan</p>
        <Footer />
      </>
    );
  }

  const total = event.price * qty;

  // 🔹 STEP 1: BELI TIKET DI MODAL
  const handleConfirmTicket = () => {
    if (!name || !phone) {
      alert("Nama dan nomor WhatsApp wajib diisi");
      return;
    }
    setConfirmed(true);
  };

  // 🔹 STEP 2: KIRIM KE BACKEND + WHATSAPP
  const handleWhatsApp = async () => {
    try {
      setLoading(true);

      const res = await fetch("http://localhost:3000/api/transactions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer_name: name,
          phone,
          event_name: event.name,
          ticket_qty: qty,
          total_price: total,
          payment_method: "Transfer Bank",
          channel: "WhatsApp",
        }),
      });

      const data = await res.json();

      const text = `
Halo Admin,
Saya ingin membeli tiket event.

ID Transaksi: ${data.id}
Nama: ${name}
Event: ${event.name}
Jumlah Tiket: ${qty}
Total: Rp ${total.toLocaleString("id-ID")}
      `;

      window.open(
        `https://wa.me/6281388609934?text=${encodeURIComponent(text)}`,
        "_blank"
      );

      setShowModal(false);
      setConfirmed(false);
    } catch (err) {
      alert("Gagal membuat transaksi");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F8F1EA] p-6">
        <h1 className="text-2xl font-bold">{event.name}</h1>
        <p className="mt-1">Rp {event.price.toLocaleString("id-ID")}</p>

        {/* 🔹 TOMBOL HALAMAN */}
        <button
          onClick={() => setShowModal(true)}
          className="mt-6 w-full bg-[#5C3A21] text-white py-3 rounded-lg"
        >
          Beli Tiket
        </button>
      </main>

      {/* 🔹 MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-[360px] p-4 rounded-lg shadow">
            <h2 className="font-bold text-lg mb-3">Pembelian Tiket</h2>

            <input
              type="text"
              placeholder="Nama Lengkap"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border p-2 mb-2 rounded"
              disabled={confirmed}
            />

            <input
              type="text"
              placeholder="Nomor WhatsApp"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border p-2 mb-3 rounded"
              disabled={confirmed}
            />

            <div className="flex justify-between mb-3">
              <span>Jumlah Tiket</span>
              <div className="flex gap-2">
                <button
                  disabled={confirmed}
                  onClick={() => setQty((p) => Math.max(1, p - 1))}
                  className="px-2 bg-gray-200 rounded"
                >
                  -
                </button>
                <span>{qty}</span>
                <button
                  disabled={confirmed}
                  onClick={() => setQty((p) => p + 1)}
                  className="px-2 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>
            </div>

            <p className="text-sm mb-4">
              Total:{" "}
              <b>Rp {total.toLocaleString("id-ID")}</b>
            </p>

            {/* 🔹 TOMBOL MODAL */}
            {!confirmed ? (
              <button
                onClick={handleConfirmTicket}
                className="w-full bg-[#5C3A21] text-white py-2 rounded font-semibold"
              >
                Beli Tiket
              </button>
            ) : (
              <button
                onClick={handleWhatsApp}
                disabled={loading}
                className="w-full bg-[#25D366] text-white py-2 rounded font-semibold"
              >
                {loading ? "Memproses..." : "Lanjut via WhatsApp"}
              </button>
            )}

            <button
              onClick={() => {
                setShowModal(false);
                setConfirmed(false);
              }}
              className="w-full mt-2 text-sm text-gray-500"
            >
              Batal
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
