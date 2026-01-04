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
    image: "",
    description: "", // 🔹 TAMBAHAN
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent({
      name: form.name,
      date: form.date,
      price: Number(form.price),
      quota: Number(form.quota),
      image: form.image,
      description: form.description, // 🔹 SIMPAN
    });
    navigate("/admin");
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 mt-6 rounded shadow">
      <h1 className="text-xl font-bold text-[#5C3A21] mb-4">
        Tambah Event
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* NAMA */}
        <input
          placeholder="Nama Event"
          className="w-full border px-3 py-2 rounded"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        {/* TANGGAL */}
        <input
          type="date"
          className="w-full border px-3 py-2 rounded"
          onChange={(e) =>
            setForm({ ...form, date: e.target.value })
          }
        />

        {/* HARGA */}
        <input
          type="number"
          placeholder="Harga Tiket"
          className="w-full border px-3 py-2 rounded"
          onChange={(e) =>
            setForm({ ...form, price: e.target.value })
          }
        />

        {/* KUOTA */}
        <input
          type="number"
          placeholder="Kuota"
          className="w-full border px-3 py-2 rounded"
          onChange={(e) =>
            setForm({ ...form, quota: e.target.value })
          }
        />

        {/* IMAGE */}
        <input
          placeholder="URL Image"
          className="w-full border px-3 py-2 rounded"
          onChange={(e) =>
            setForm({ ...form, image: e.target.value })
          }
        />

        {/* 🔹 DETAIL / DESKRIPSI EVENT */}
        <textarea
          placeholder="Detail / Deskripsi Event"
          rows="4"
          className="w-full border px-3 py-2 rounded resize-none"
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />

        {/* BUTTON */}
        <button className="bg-[#5C3A21] text-white px-4 py-2 rounded hover:bg-[#8B5E3C] transition">
          Simpan Event
        </button>
      </form>
    </div>
  );
}
