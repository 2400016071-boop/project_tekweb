export default function EventForm({ onSubmit, setForm, form }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-xl">
      <h2 className="font-bold text-lg text-[#5C3A21] mb-4">
        Tambah Event
      </h2>

      {/* NAMA EVENT */}
      <div className="mb-3">
        <label className="block text-sm font-medium text-[#5C3A21] mb-1">
          Nama Event
        </label>
        <input
          type="text"
          className="w-full border px-3 py-2 rounded"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />
      </div>

      {/* TANGGAL */}
      <div className="mb-3">
        <label className="block text-sm font-medium text-[#5C3A21] mb-1">
          Tanggal
        </label>
        <input
          type="date"
          className="w-full border px-3 py-2 rounded"
          onChange={(e) =>
            setForm({ ...form, date: e.target.value })
          }
        />
      </div>

      {/* HARGA */}
      <div className="mb-3">
        <label className="block text-sm font-medium text-[#5C3A21] mb-1">
          Harga
        </label>
        <input
          type="number"
          className="w-full border px-3 py-2 rounded"
          onChange={(e) =>
            setForm({ ...form, price: e.target.value })
          }
        />
      </div>

      {/* KUOTA */}
      <div className="mb-3">
        <label className="block text-sm font-medium text-[#5C3A21] mb-1">
          Kuota
        </label>
        <input
          type="number"
          className="w-full border px-3 py-2 rounded"
          onChange={(e) =>
            setForm({ ...form, quota: e.target.value })
          }
        />
      </div>

      {/* IMAGE */}
      <div className="mb-3">
        <label className="block text-sm font-medium text-[#5C3A21] mb-1">
          URL Image
        </label>
        <input
          type="text"
          className="w-full border px-3 py-2 rounded"
          onChange={(e) =>
            setForm({ ...form, image: e.target.value })
          }
        />
      </div>

      {/* 🔹 DESKRIPSI EVENT (INI YANG KURANG) */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-[#5C3A21] mb-1">
          Detail / Deskripsi Event
        </label>
        <textarea
          rows="4"
          className="w-full border px-3 py-2 rounded resize-none"
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />
      </div>

      <button
        onClick={onSubmit}
        className="bg-[#5C3A21] text-white px-5 py-2 rounded hover:bg-[#8B5E3C] transition"
      >
        Simpan
      </button>
    </div>
  );
}
