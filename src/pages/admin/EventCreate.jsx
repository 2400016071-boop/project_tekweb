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
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent({
      name: form.name,
      date: form.date,
      price: Number(form.price),
      quota: Number(form.quota),
      image: form.image,
    });
    navigate("/admin");
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 mt-6 rounded shadow">
      <h1 className="text-xl font-bold mb-4">Tambah Event</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          placeholder="Nama Event"
          className="w-full border p-2"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          type="date"
          className="w-full border p-2"
          onChange={(e) =>
            setForm({ ...form, date: e.target.value })
          }
        />

        <input
          type="number"
          placeholder="Harga Tiket"
          className="w-full border p-2"
          onChange={(e) =>
            setForm({ ...form, price: e.target.value })
          }
        />

        <input
          type="number"
          placeholder="Kuota"
          className="w-full border p-2"
          onChange={(e) =>
            setForm({ ...form, quota: e.target.value })
          }
        />

        <input
          placeholder="URL Image"
          className="w-full border p-2"
          onChange={(e) =>
            setForm({ ...form, image: e.target.value })
          }
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Simpan Event
        </button>
      </form>
    </div>
  );
}
