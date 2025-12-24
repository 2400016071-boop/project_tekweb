import Navbar from "../components/user/Navbar";
import EventCard from "../components/user/EventCard";
import Footer from "../components/user/Footer";
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
