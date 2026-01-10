import { useNavigate } from "react-router-dom";

export default function EventCard({ event, onOpen }) {
  const navigate = useNavigate();

  return (
    <div className="col-span-1 bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition flex flex-col">
      
      {/* CARD / IMAGE → BUKA MODAL */}
      <div
        onClick={() => onOpen(event)}
        className="group cursor-pointer flex-1"
      >
        <div className="relative h-40 overflow-hidden">
          <img
            src={event.image}
            alt={event.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

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
        </div>
      </div>

      {/* BUTTON BELI TIKET → KE FORM */}
      <div className="p-4 pt-0 mt-auto">
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate("/beli-tiket", { state: { event } });
          }}
          className="block text-center w-full text-sm bg-[#6b4226] text-white py-2 rounded-md
                     hover:bg-[#56321c] transition"
        >
          Beli Tiket
        </button>
      </div>
    </div>
  );
}
