import { useState, useEffect } from "react";

const STORAGE_KEY = "events_data";

export const useEvents = () => {
  const [events, setEvents] = useState([]);

  // load awal dari localStorage
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored) {
      setEvents(JSON.parse(stored));
    } else {
      const initialEvents = [
        {
          id: 1,
          name: "Jazz Gunung 2025",
          date: "2025-06-12",
          price: 750000,
          quota: 1000,
          sold: 250,
          creator: "Admin",
          image:
            "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=800&q=80",
        },
        {
          id: 2,
          name: "Tech Conference",
          date: "2025-07-20",
          price: 500000,
          quota: 500,
          sold: 120,
          creator: "Admin",
          image:
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
        },
      ];

      setEvents(initialEvents);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialEvents));
    }
  }, []);

  // tambah event
  const addEvent = (event) => {
    const newEvent = {
      ...event,
      id: Date.now(),
      sold: 0,
      creator: "Admin",
    };

    const updated = [...events, newEvent];
    setEvents(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  // hapus event
  const deleteEvent = (id) => {
    const updated = events.filter((e) => e.id !== id);
    setEvents(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  return {
    events,
    addEvent,
    deleteEvent,
  };
};