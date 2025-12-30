export default function EventForm() {
  return (
    <div className="border p-4 mb-4">
      <h2 className="font-bold mb-2">Tambah Event</h2>

      <button
        onClick={() => console.log("Submit Event")}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Simpan
      </button>
    </div>
  );
}
