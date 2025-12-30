import { Link } from "react-router-dom";

export default function EventCard({ event }) {
  return (
    <Link
      to={`/events/${event.id}`}
      className="group block bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
    >
      {/* IMAGE (PERSEGI PANJANG, TIDAK GEPENG) */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <h2 className="font-semibold text-[#5a3a22] truncate">
          {event.name}
        </h2>

        <p className="text-sm text-gray-500 mb-2">
          {event.location}
        </p>

        <p className="font-bold text-[#6b4226] mb-3">
          Rp {event.price.toLocaleString("id-ID")}
        </p>

        {/* BUTTON */}
        <button
          onClick={(e) => e.preventDefault()}
          className="w-full text-sm bg-[#6b4226] text-white py-2 rounded-md
                     hover:bg-[#56321c] transition"
        >
          Beli Tiket
        </button>
      </div>
    </Link>
  );
}
