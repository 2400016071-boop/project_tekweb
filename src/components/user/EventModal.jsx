export default function EventModal({ event, onClose, onBuy }) {
  if (!event) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[#faf4eb] w-full max-w-md rounded-xl overflow-hidden shadow-lg">

        {/* IMAGE */}
        <img
          src={event.image}
          alt={event.name}
          className="h-40 w-full object-cover"
        />

        {/* CONTENT */}
        <div className="p-4 space-y-3">
          <h2 className="text-lg font-bold text-[#5a3a22]">
            {event.name}
          </h2>

          <p className="text-xs text-gray-600">📍 {event.location}</p>
          <p className="text-xs text-gray-600">📅 {event.date}</p>

          <p className="font-bold text-[#6b4226]">
            Rp {event.price.toLocaleString("id-ID")}
          </p>

          <p className="text-sm text-gray-700">
            {event.description}
          </p>

          {/* ACTION */}
          <div className="flex justify-between pt-3">
            <button
              onClick={onClose}
              className="border px-3 py-1.5 rounded-md text-sm"
            >
              Tutup
            </button>

            <button
              onClick={onBuy}
              className="bg-[#6b4226] text-white px-4 py-1.5 rounded-md text-sm hover:bg-[#56321c]"
            >
              Beli Tiket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
