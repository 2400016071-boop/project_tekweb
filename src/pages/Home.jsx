import { useState } from "react";
import Navbar from "../components/user/Navbar";
import EventCard from "../components/user/EventCard";
import Footer from "../components/user/Footer";
import { useEvents } from "../hooks/useEvents";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function Home() {
  const { events } = useEvents();

  //  TAMBAHAN (STATE SEARCH)
  const [search, setSearch] = useState("");

  // 🔹 TAMBAHAN (state modal)
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // TAMBAHAN (FILTER EVENT)
  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* TAMBAHAN props ke Navbar */}
      <Navbar onSearch={setSearch} />

      {}
      <main className="min-h-screen bg-[#F8F1EA] px-3 sm:px-6 py-6 sm:py-10">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#5C3A21] mb-4 sm:mb-6">
          Event Terbaru
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">

          {/*  TAMBAHAN LOGIC NOT FOUND */}
          {filteredEvents.length === 0 ? (
            <p className="col-span-1 sm:col-span-2 lg:col-span-3 text-center text-gray-500 mt-10">
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
      {/* ===== AKHIR KODE ASLI ===== */}

      <Footer />

      {/* ===== MODAL NGAMBANG + BLUR (RESPONSIF) ===== */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-sm sm:max-w-2xl p-0 overflow-hidden mx-2">
          {selectedEvent && (
            <>
              <img
                src={selectedEvent.image}
                alt={selectedEvent.name}
                className="h-40 sm:h-64 w-full object-cover"
              />

              <div className="p-3 sm:p-6 bg-[#F8F1EA]">
                <DialogHeader>
                  <DialogTitle className="text-lg sm:text-2xl font-bold text-[#5C3A21]">
                    {selectedEvent.name}
                  </DialogTitle>
                </DialogHeader>

                <p className="text-xs sm:text-sm text-gray-600 mt-2">
                  📍 {selectedEvent.location}
                </p>

                <p className="text-xs sm:text-sm text-gray-600">
                  📅 {selectedEvent.date}
                </p>

                <p className="mt-3 sm:mt-4 font-bold text-base sm:text-lg text-[#6b4226]">
                  Rp {selectedEvent.price.toLocaleString("id-ID")}
                </p>

                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-700 line-clamp-4 sm:line-clamp-none">
                  {selectedEvent.description}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
