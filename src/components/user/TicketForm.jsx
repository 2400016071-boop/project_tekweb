import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function TicketForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [event, setEvent] = useState(null);
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // ===============================
  // AMBIL DATA EVENT
  // ===============================
  useEffect(() => {
    fetch(`https://694a3d921282f890d2d80668.mockapi.io/events/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
        setLoading(false);
      })
      .catch(() => {
        setEvent(null);
        setLoading(false);
      });
  }, [id]);

  // ===============================
  // LOADING
  // ===============================
  if (loading) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center">
          <p>Loading...</p>
        </main>
        <Footer />
      </>
    );
  }

  // ===============================
  // EVENT TIDAK DITEMUKAN
  // ===============================
  if (!event) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center">
          <p>Event tidak ditemukan</p>
        </main>
        <Footer />
      </>
    );
  }

  const total = event.price * qty;
  const whatsappNumber = "6281388609934";

  // ===============================
  // VALIDASI FORM
  // ===============================
  const isFormValid =
    customerName.trim() !== "" &&
    phone.trim() !== "" &&
    qty >= 1 &&
    !submitting;

  // ===============================
  // SUBMIT FORM
  // ===============================
  const handleSubmit = async () => {
    if (!isFormValid) return;

    setSubmitting(true);

    try {
      const res = await fetch("http://localhost:3000/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customer_name: customerName,
          phone: phone,
          event_name: event.name,
          ticket_qty: qty,
          total_payment: total,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert("Gagal menyimpan transaksi");
        setSubmitting(false);
        return;
      }

      // ===============================
      // BUKA WHATSAPP SETELAH DB OK
      // ===============================
      const message = `
Halo, saya mau beli tiket.

ID Transaksi: ${data.transaction_id}
Event: ${event.name}
Nama: ${customerName}
No WhatsApp: ${phone}
Jumlah Tiket: ${qty}
Total Harga: Rp ${total.toLocaleString("id-ID")}
      `;

      window.open(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
        "_blank"
      );
    } catch (error) {
      console.error(error);
      alert("Server error");
    } finally {
      setSubmitting(false);
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

          <p className="text-sm text-gray-600">{event.name}</p>

          {/* NAMA */}
          <div>
            <label className="text-sm">Nama Lengkap</label>
            <input
              type="text"
              className="w-full border rounded-md px-3 py-2 mt-1 text-sm"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
          </div>

          {/* NO WA */}
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
          <div className="flex justify-between gap-2">
            <button
              onClick={() => navigate(-1)}
              className="border px-4 py-2 rounded-md text-sm"
            >
              Kembali
            </button>

            <button
              onClick={handleSubmit}
              disabled={!isFormValid}
              className={`px-4 py-2 rounded-md text-sm text-white transition ${
                isFormValid
                  ? "bg-[#6b4226] hover:bg-[#56321c]"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              {submitting ? "Memproses..." : "Lanjut ke WhatsApp"}
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
