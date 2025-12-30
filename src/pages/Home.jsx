import Navbar from "../components/user/Navbar";
import EventCard from "../components/user/EventCard";
import Footer from "../components/user/Footer";
import { useEvents } from "../hooks/useEvents";
import { Link } from "react-router-dom";

export default function Home() {
  const { events } = useEvents();

  return (
    <>
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
        {events.map((event) => (
          <Link
            key={event.id}
            to={`/event/${event.id}`}
            className="block"
          >
            <EventCard event={event} />
          </Link>
        ))}
      </div>

      <Footer />
    </>
  );
}
