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

  if (!event) {
    return (
      <>
        <Navbar />
        <p className="p-6">Event tidak ditemukan</p>
        <Footer />
      </>
    );
  }

  const getWhatsappLink = () => {
    const total = event.price * qty;

    const text =
      `Halo Admin, saya ingin membeli tiket event:\n\n` +
      `Nama: ${event.name}\n` +
      `Lokasi: ${event.location || "-"}\n` +
      `Tanggal: ${event.date}\n` +
      `Jumlah: ${qty}\n` +
      `Total: Rp ${total.toLocaleString("id-ID")}\n\n` +
      `Mohon info pembayaran.`;

    return `https://wa.me/62812345678?text=${encodeURIComponent(
      text
    )}`;
  };

  const handleConfirm = () => {
    window.open(getWhatsappLink(), "_blank");
  };

  const image =
    event.image ||
    "https://via.placeholder.com/400x250?text=No+Image";

  return (
    <>
      <Navbar />

      <section className="relative h-[320px] flex items-end">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={image}
            alt={event.name}
            className="w-full h-full object-cover scale-110 blur-xl opacity-70"
          />
        </div>

        <div className="relative w-full flex justify-center pb-4">
          <img
            src={image}
            alt={event.name}
            className="h-[260px] w-[90%] object-cover rounded-lg shadow-xl"
          />
        </div>
      </section>

      <main className="min-h-screen bg-[#F8F1EA] p-6">
        <h1 className="text-2xl font-bold mb-2">{event.name}</h1>

        <p className="mb-1">Lokasi: {event.location || "-"}</p>
        <p className="mb-1">Tanggal: {event.date}</p>

        <p className="font-bold text-lg mt-2 text-[#6b4226]">
          Rp {event.price.toLocaleString("id-ID")}
        </p>

        <p className="mt-4">
          {event.description || "Tidak ada deskripsi"}
        </p>

        <button
          onClick={() => setShowModal(true)}
          className="mt-6 w-full bg-[#5C3A21] text-white py-3 rounded-lg hover:opacity-90 transition"
        >
          Beli Tiket
        </button>
      </main>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded shadow w-[320px]">
            <h2 className="font-bold text-lg mb-2">
              Pembelian Tiket
            </h2>

            <p className="text-sm mb-1">{event.name}</p>
            <p className="text-sm mb-2">
              {event.location || "-"}
            </p>

            <div className="flex items-center gap-2 mb-3">
              <button
                className="bg-gray-200 px-2 rounded"
                onClick={() =>
                  setQty((p) => Math.max(1, p - 1))
                }
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
                className="px-3 py-1 bg-gray-300 rounded"
              >
                Batal
              </button>

              <button
                onClick={handleConfirm}
                className="px-3 py-1 bg-[#25D366] text-white rounded"
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
