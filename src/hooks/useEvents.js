import { useEffect, useState } from "react";

const API_URL = "https://694a3d921282f890d2d80668.mockapi.io/events";

export const useEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ===============================
  // READ (GET ALL EVENTS)
  // ===============================
  const fetchEvents = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Gagal mengambil data event");
      const data = await res.json();
      setEvents(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // ===============================
  // READ (GET BY ID)
  // ===============================
  const getEventById = (id) => {
    return events.find((e) => e.id === id);
  };

  // ===============================
  // CREATE (POST)
  // ===============================
  const addEvent = async (event) => {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
    });

    if (!res.ok) throw new Error("Gagal menambah event");
    await fetchEvents();
  };

  // ===============================
  // UPDATE (PUT)
  // ===============================
  const updateEvent = async (id, updatedEvent) => {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedEvent),
    });

    if (!res.ok) throw new Error("Gagal update event");
    await fetchEvents();
  };

  // ===============================
  // DELETE
  // ===============================
  const deleteEvent = async (id) => {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) throw new Error("Gagal hapus event");
    await fetchEvents();
  };

  return {
    events,
    loading,
    error,
    getEventById,
    addEvent,
    updateEvent,
    deleteEvent,
  };
};
