import { Link } from "react-router-dom";

export default function EventCard({ event, onOpen }) {
  const whatsappNumber = "6281234567890";
  const message = `Halo, saya mau beli tiket event ${event.name}`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="col-span-1 bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition flex flex-col">
      
      {/* CARD / IMAGE → BUKA MODAL */}
      <div
        onClick={() => onOpen(event)}
        className="group cursor-pointer"
      >
        <div className="relative h-32 sm:h-40 overflow-hidden">
          <img
            src={event.image}
            alt={event.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-2 sm:p-4">
          <h2 className="font-semibold text-xs sm:text-sm text-[#5a3a22] truncate">
            {event.name}
          </h2>

          <p className="text-xs sm:text-sm text-gray-500 mb-2 truncate">
            {event.location}
          </p>

          <p className="font-bold text-xs sm:text-sm text-[#6b4226] mb-3">
            Rp {event.price.toLocaleString("id-ID")}
          </p>
        </div>
      </div>

      {/* BUTTON WHATSAPP (TIDAK BUKA MODAL) */}
      <div className="p-2 sm:p-4 pt-0 mt-auto">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="block text-center w-full text-xs sm:text-sm bg-[#6b4226] text-white py-2 rounded-md
                     hover:bg-[#56321c] transition"
        >
          Beli Tiket
        </a>
      </div>
    </div>
  );
}
