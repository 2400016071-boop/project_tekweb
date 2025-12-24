import Navbar from "../components/public/Navbar";
import EventCard from "../components/public/EventCard";
import Footer from "../components/public/Footer";
import { useEvents } from "../hooks/useEvents";

export default function Home() {
  const { events } = useEvents();

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
      <Footer />
    </>
  );
}
