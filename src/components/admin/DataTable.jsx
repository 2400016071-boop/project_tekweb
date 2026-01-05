import { useNavigate } from "react-router-dom";

export default function DataTable({ events, onDelete }) {
  const navigate = useNavigate();

  const handleDelete = (id) => {
    if (window.confirm("Yakin hapus event ini?")) {
      onDelete(id);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 flex justify-between items-center border-b border-[#E6D5C3]">
        <h2 className="font-semibold text-[#5C3A21]">Data Event</h2>

        <button
          onClick={() => navigate("/admin/events/create")}
          className="bg-[#5C3A21] text-white px-4 py-2 rounded hover:bg-[#8B5E3C]"
        >
          + Tambah Event
        </button>
      </div>

      <table className="w-full text-sm">
        <thead className="bg-[#F3E6DB] text-[#5C3A21]">
          <tr>
            <th className="p-3 text-left">Gambar</th>
            <th className="p-3 text-left">Nama</th>
            <th className="p-3 text-left">Tanggal</th>
            <th className="p-3 text-left">Harga</th>
            <th className="p-3 text-left">Kuota</th>
            <th className="p-3 text-center">Aksi</th>
          </tr>
        </thead>

        <tbody>
          {events.map((event) => (
            <tr key={event.id} className="border-b">
              <td className="p-2">
                <img src={event.image} alt={event.name} className="w-20 h-14 object-cover rounded" />
              </td>
              <td className="p-3">{event.name}</td>
              <td className="p-3">{event.date}</td>
              <td className="p-3">Rp {event.price.toLocaleString()}</td>
              <td className="p-3">{event.quota}</td>
              <td className="p-3 text-center space-x-2">
                <button
                  onClick={() => navigate(`/admin/events/edit/${event.id}`)}
                  className="px-3 py-1 bg-yellow-500 text-white rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(event.id)}
                  className="px-3 py-1 bg-red-600 text-white rounded"
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
