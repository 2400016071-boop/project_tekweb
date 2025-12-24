import { useParams } from "react-router-dom";
import Navbar from "../components/public/Navbar";
import Footer from "../components/public/Footer";
import { useEvents } from "../hooks/useEvents";

export default function EventDetail() {
  const { id } = useParams();
  const { events } = useEvents();

  const event = events.find((e) => e.id === id);

  if (!event) return <p>Event tidak ditemukan</p>;

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold">{event.name}</h1>
        <p>{event.description}</p>
      </div>
      <Footer />
    </>
  );
}
