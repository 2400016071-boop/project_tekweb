import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/user/Navbar";
import EventCard from "../components/user/EventCard";
import Footer from "../components/user/Footer";
import EventModal from "../components/user/EventModal";
import { useEvents } from "../hooks/useEvents";

export default function Home() {
  const { events } = useEvents();
  const navigate = useNavigate();

  // 🔍 SEARCH
  const [search, setSearch] = useState("");

  // 🪟 MODAL
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // 🔎 FILTER EVENT
  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* NAVBAR */}
      <Navbar onSearch={setSearch} />

      {/* MAIN */}
      <main className="min-h-screen bg-[#F8F1EA] px-6 py-10">
        <h1 className="text-2xl font-bold text-[#5C3A21] mb-6">
          Event Terbaru
        </h1>

        <div className="grid grid-cols-3 gap-6">
          {filteredEvents.length === 0 ? (
            <p className="col-span-3 text-center text-gray-500 mt-10">
              ❌ Tiket yang kamu cari tidak ditemukan
            </p>
          ) : (
            filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onOpen={() => {
                  setSelectedEvent(event);
                  setOpen(true);
                }}
              />
            ))
          )}
        </div>
      </main>

      <Footer />

      {/* MODAL DETAIL EVENT */}
      {open && (
        <EventModal
          event={selectedEvent}
          onClose={() => {
            setOpen(false);
            setSelectedEvent(null);
          }}
          onBuy={() => {
            setOpen(false);
            navigate("/beli-tiket");
          }}
        />
      )}
    </>
  );
}
