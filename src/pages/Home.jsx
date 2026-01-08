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

  // 🔥 TAMBAHAN (STATE SEARCH)
  const [search, setSearch] = useState("");

  // 🔹 TAMBAHAN (state modal)
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // 🔥 TAMBAHAN (FILTER EVENT)
  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* 🔥 TAMBAHAN props ke Navbar */}
      <Navbar onSearch={setSearch} />

      {/* ===== KODE ASLI KAMU (TIDAK DIUBAH) ===== */}
      <main className="min-h-screen bg-[#F8F1EA] px-6 py-10">
        <h1 className="text-2xl font-bold text-[#5C3A21] mb-6">
          Event Terbaru
        </h1>

        <div className="grid grid-cols-3 gap-6">

          {/* 🔥 TAMBAHAN LOGIC NOT FOUND */}
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
      {/* ===== AKHIR KODE ASLI ===== */}

      <Footer />

      {/* ===== MODAL NGAMBANG + BLUR (TIDAK DIUBAH) ===== */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden">
          {selectedEvent && (
            <>
              <img
                src={selectedEvent.image}
                alt={selectedEvent.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-6 bg-[#F8F1EA]">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-[#5C3A21]">
                    {selectedEvent.name}
                  </DialogTitle>
                </DialogHeader>

                <p className="text-sm text-gray-600 mt-2">
                  📍 {selectedEvent.location}
                </p>

                <p className="text-sm text-gray-600">
                  📅 {selectedEvent.date}
                </p>

                <p className="mt-4 font-bold text-lg text-[#6b4226]">
                  Rp {selectedEvent.price.toLocaleString("id-ID")}
                </p>

                <p className="mt-3 text-sm text-gray-700">
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
