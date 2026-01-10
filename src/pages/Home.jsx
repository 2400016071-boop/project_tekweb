
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../components/user/Navbar";
import EventCard from "../components/user/EventCard";
import Footer from "../components/user/Footer";
import EventModal from "../components/user/EventModal";
import { useEvents } from "../hooks/useEvents";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { events } = useEvents();
  const navigate = useNavigate();

  // 🔍 SEARCH
  const [search, setSearch] = useState("");

  // 🪟 MODAL
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // 🔎 FILTER EVENT
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // JUMLAH KOLOM RESPONSIF (AMAN)
  const [columns, setColumns] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 1024) {
        setColumns(3); // Desktop
      } else if (width >= 640) {
        setColumns(2); // Tablet
      } else {
        setColumns(1); // Mobile
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>

      {/* NAVBAR */}
      <Navbar onSearch={setSearch} />

      {/* MAIN */}
      <Navbar />


      <main className="min-h-screen bg-[#F8F1EA] px-6 py-10">
        <div className="max-w-7xl mx-auto">

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
          <h1 className="text-2xl font-bold text-[#5C3A21] mb-4">
            Event Terbaru
          </h1>

          {/* SEARCH */}
          <input
            type="text"
            placeholder="Cari event..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mb-6 w-full md:w-1/3 px-4 py-2 rounded-md text-sm border focus:outline-none"
          />

          {/* GRID EVENT (RESPONSIF MANUAL) */}
          <div
            className="grid gap-6"
            style={{
              gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
            }}
          >
            {filteredEvents.length === 0 ? (
              <p className="col-span-full text-center text-gray-500 mt-10">
                ❌ Event tidak ditemukan
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

                <Button
                  className="mt-6 w-full bg-[#5C3A21] hover:bg-[#6b4226]"
                  onClick={() =>
                    window.open(
                      `https://wa.me/6281234567890?text=Saya ingin beli tiket ${selectedEvent.name}`,
                      "_blank"
                    )
                  }
                >
                  Beli Tiket
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
