import { useParams } from "react-router-dom";
import Navbar from "../components/user/Navbar";
import Footer from "../components/user/Footer";
import { useEvents } from "../hooks/useEvents";

export default function EventDetail() {
  const { id } = useParams();
  const { events } = useEvents();

  const event = events.find((e) => e.id === Number(id));

  if (!event) {
    return (
      <>
        <Navbar />
        <p className="p-6">Event tidak ditemukan</p>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="p-6">
        <img
          src={event.image}
          alt={event.name}
          className="w-full max-w-xl mb-4 rounded-lg"
        />
        <h1 className="text-2xl font-bold mb-2">{event.name}</h1>
        <p className="mb-2">{event.description}</p>
        <p className="font-bold text-[#6b4226]">
          Rp {event.price.toLocaleString("id-ID")}
        </p>
      </div>
      <Footer />
    </>
  );
}
