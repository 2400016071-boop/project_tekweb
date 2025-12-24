export default function DataTable({ events }) {
  const handleDelete = (id) => {
    console.log("Hapus event ID:", id);
  };

  return (
    <table className="w-full border">
      <thead className="bg-gray-100">
        <tr>
          <th className="border p-2">Nama</th>
          <th className="border p-2">Tanggal</th>
          <th className="border p-2">Aksi</th>
        </tr>
      </thead>
      <tbody>
        {events.map((event) => (
          <tr key={event.id}>
            <td className="border p-2">{event.name}</td>
            <td className="border p-2">{event.date}</td>
            <td className="border p-2">
              <button
                onClick={() => handleDelete(event.id)}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Hapus
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
