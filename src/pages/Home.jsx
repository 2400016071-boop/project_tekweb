import Navbar from "../components/user/Navbar";
import EventCard from "../components/user/EventCard";
import Footer from "../components/user/Footer";
import { useEvents } from "../hooks/useEvents";

export default function Home() {
  const { events } = useEvents();

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F8F1EA] px-6 py-10">
        <h1 className="text-2xl font-bold text-[#5C3A21] mb-6">
          Event Terbaru
        </h1>

        <div className="grid grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
