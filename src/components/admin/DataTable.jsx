import { useNavigate } from "react-router-dom";

export default function DataTable({ events, onDelete }) {
  const navigate = useNavigate();

  const handleDelete = (id) => {
    if (window.confirm("Yakin hapus event ini?")) {
      onDelete(id);
    }
  };

  return (
    <div className="bg-white rounded shadow">
      <div className="p-4 flex justify-between border-b">
        <h2 className="font-semibold">Data Event</h2>
        <button
          onClick={() => navigate("/admin/events/create")}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          + Tambah Event
        </button>
      </div>

      <table className="w-full text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Nama</th>
            <th className="p-3 text-left">Tanggal</th>
            <th className="p-3 text-left">Harga</th>
            <th className="p-3 text-left">Kuota</th>
            <th className="p-3 text-center">Aksi</th>
          </tr>
        </thead>

        <tbody>
          {events.map((e) => (
            <tr key={e.id} className="border-t">
              <td className="p-3">{e.name}</td>
              <td className="p-3">{e.date}</td>
              <td className="p-3">
                Rp {e.price.toLocaleString()}
              </td>
              <td className="p-3">{e.quota}</td>
              <td className="p-3 text-center">
                <button
                  onClick={() => handleDelete(e.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
