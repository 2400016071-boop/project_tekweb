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

  if (!event) return <p>Event tidak ditemukan</p>;

  const getWhatsappLink = () => {
    const total = event.price * qty;

    const text =
      `Halo Admin, saya ingin membeli tiket event:\n\n` +
      `Nama: ${event.name}\n` +
      `Lokasi: ${event.location}\n` +
      `Tanggal: ${event.date}\n` +
      `Jumlah: ${qty}\n` +
      `Total: Rp ${total}\n\n` +
      `Mohon info pembayaran.`;

    return `https://wa.me/628xxxxxxxxxx?text=${encodeURIComponent(text)}`;
  };

  const handleConfirm = () => {
    window.open(getWhatsappLink(), "_blank");
  };

  return (
    <>
      <Navbar />

      {/* IMAGE HEADER */}
      <section className="relative h-[320px] flex items-end">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={event.image}
            alt={event.name}
            className="w-full h-full object-cover scale-110 blur-xl opacity-70"
          />
        </div>

        <div className="relative w-full flex justify-center pb-4">
          <img
            src={event.image}
            alt={event.name}
            className="h-[260px] w-[90%] object-cover rounded-lg shadow-xl"
          />
        </div>
      </section>

      {/* CONTENT */}
      <main className="min-h-screen bg-[#F8F1EA] p-6">
        <h1 className="text-2xl font-bold mb-2">{event.name}</h1>

        <p className="mb-1">Lokasi: {event.location}</p>
        <p className="mb-1">Tanggal: {event.date}</p>

        <p className="font-bold text-lg mt-2 text-[#6b4226]">
          Rp {event.price.toLocaleString("id-ID")}
        </p>

        <p className="mt-4">{event.description}</p>

        {/* 🟤 TOMBOL BELI – WARNA COKLAT */}
        <button
          onClick={() => setShowModal(true)}
          className="mt-6 w-full bg-[#5C3A21] text-white py-3 rounded-lg hover:opacity-90 transition"
        >
          Beli Tiket
        </button>
      </main>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded shadow w-[320px]">
            <h2 className="font-bold text-lg mb-2">Pembelian Tiket</h2>

            <p className="text-sm mb-1">{event.name}</p>
            <p className="text-sm mb-2">{event.location}</p>

            <div className="flex items-center gap-2 mb-3">
              <button
                className="bg-gray-200 px-2 rounded"
                onClick={() => setQty((p) => Math.max(1, p - 1))}
              >
                -
              </button>

              <input
                type="number"
                value={qty}
                min="1"
                onChange={(e) =>
                  setQty(Math.max(1, Number(e.target.value)))
                }
                className="border p-1 w-16 text-center"
              />

              <button
                className="bg-gray-200 px-2 rounded"
                onClick={() => setQty((p) => p + 1)}
              >
                +
              </button>
            </div>

            <p className="text-xs mb-3">
              Total: Rp{" "}
              {(event.price * qty).toLocaleString("id-ID")}
            </p>

            <div className="flex gap-2 justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-3 py-1 bg-gray-300 rounded hover:opacity-90 transition"
              >
                Batal
              </button>

              {/* 🟢 KONFIRMASI WA – WARNA HIJAU */}
              <button
                onClick={handleConfirm}
                className="px-3 py-1 bg-[#25D366] text-white rounded hover:opacity-90 transition"
              >
                Konfirmasi WA
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
