export default function EventCard({ event }) {
  return (
    <div className="border rounded-lg p-4 shadow">
      <img
        src={event.image}
        alt={event.name}
        className="h-40 w-full object-cover rounded"
      />

      <h2 className="font-semibold mt-2">{event.name}</h2>
      <p className="text-sm text-gray-600">{event.location}</p>

      <p className="font-bold">
        Rp {event.price.toLocaleString("id-ID")}
      </p>

      <button
        className="mt-2 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
        onClick={() => console.log("Booking:", event.name)}
      >
        Beli Tiket
      </button>
    </div>
  );
}

