import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEvents } from "../../hooks/useEvents";

export default function EventCreate() {
  const { addEvent } = useEvents();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    date: "",
    price: "",
    quota: "",
    location: "",
    image: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // VALIDASI WAJIB
    if (!form.name || !form.date || !form.location) {
      alert("Nama, tanggal, dan lokasi wajib diisi");
      return;
    }

    addEvent({
      name: form.name,
      date: form.date,
      price: Number(form.price),
      quota: Number(form.quota),
      location: form.location,
      image:
        form.image && form.image.trim() !== ""
          ? form.image
          : "https://via.placeholder.com/400x250?text=No+Image",
      description: form.description,
    });

    navigate("/admin/dashboard");
;
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 mt-6 rounded shadow">
      <h1 className="text-xl font-bold text-[#5C3A21] mb-4">
        Tambah Event
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          placeholder="Nama Event"
          className="w-full border px-3 py-2 rounded"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          type="date"
          className="w-full border px-3 py-2 rounded"
          onChange={(e) =>
            setForm({ ...form, date: e.target.value })
          }
        />

        <input
          type="number"
          placeholder="Harga Tiket"
          className="w-full border px-3 py-2 rounded"
          onChange={(e) =>
            setForm({ ...form, price: e.target.value })
          }
        />

        <input
          type="number"
          placeholder="Kuota"
          className="w-full border px-3 py-2 rounded"
          onChange={(e) =>
            setForm({ ...form, quota: e.target.value })
          }
        />

        <input
          placeholder="Lokasi Event"
          className="w-full border px-3 py-2 rounded"
          onChange={(e) =>
            setForm({ ...form, location: e.target.value })
          }
        />

        <input
          placeholder="URL Image (opsional)"
          className="w-full border px-3 py-2 rounded"
          onChange={(e) =>
            setForm({ ...form, image: e.target.value })
          }
        />

        <textarea
          placeholder="Detail / Deskripsi Event"
          rows="4"
          className="w-full border px-3 py-2 rounded resize-none"
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />

        <button className="w-full bg-[#5C3A21] text-white py-2 rounded hover:bg-[#8B5E3C] transition">
          Simpan Event
        </button>
      </form>
    </div>
  );
}
