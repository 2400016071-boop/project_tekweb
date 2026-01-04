import { useState, useEffect } from "react";

const STORAGE_KEY = "events_data";

export const useEvents = () => {
  const [events, setEvents] = useState([]);

  // LOAD DATA AWAL
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
          location: "Malang",
          creator: "Admin",
        },
        {
          id: 2,
          name: "Tech Conference",
          date: "2025-07-20",
          price: 500000,
          quota: 500,
          sold: 120,
          location: "Jakarta",
          creator: "Admin",
        },
        {
          id: 3,
          name: "Rock Festival",
          date: "2025-08-10",
          price: 600000,
          quota: 800,
          sold: 300,
          location: "Bandung",
          creator: "Admin",
        },
        {
          id: 4,
          name: "Startup Expo",
          date: "2025-05-18",
          price: 350000,
          quota: 400,
          sold: 150,
          location: "Surabaya",
          creator: "Admin",
        },
        {
          id: 5,
          name: "Art Exhibition",
          date: "2025-04-25",
          price: 200000,
          quota: 300,
          sold: 90,
          location: "Yogyakarta",
          creator: "Admin",
        },
        {
          id: 6,
          name: "Digital Marketing Summit",
          date: "2025-09-05",
          price: 450000,
          quota: 600,
          sold: 200,
          location: "Jakarta",
          creator: "Admin",
        },
        {
          id: 7,
          name: "Food Festival",
          date: "2025-03-15",
          price: 150000,
          quota: 1000,
          sold: 600,
          location: "Bali",
          creator: "Admin",
        },
        {
          id: 8,
          name: "Indie Music Night",
          date: "2025-11-02",
          price: 300000,
          quota: 500,
          sold: 220,
          location: "Bandung",
          creator: "Admin",
        },
        {
          id: 9,
          name: "Business Forum",
          date: "2025-10-12",
          price: 400000,
          quota: 700,
          sold: 340,
          location: "Jakarta",
          creator: "Admin",
        },
        {
          id: 10,
          name: "Photography Workshop",
          date: "2025-02-20",
          price: 250000,
          quota: 200,
          sold: 110,
          location: "Semarang",
          creator: "Admin",
        },
        {
          id: 11,
          name: "UI/UX Bootcamp",
          date: "2025-08-01",
          price: 550000,
          quota: 300,
          sold: 140,
          location: "Jakarta",
          creator: "Admin",
        },
        {
          id: 12,
          name: "Cyber Security Talk",
          date: "2025-06-30",
          price: 500000,
          quota: 400,
          sold: 180,
          location: "Depok",
          creator: "Admin",
        },
        {
          id: 13,
          name: "AI Innovation Day",
          date: "2025-09-22",
          price: 650000,
          quota: 500,
          sold: 210,
          location: "Bandung",
          creator: "Admin",
        },
        {
          id: 14,
          name: "Mobile App Meetup",
          date: "2025-07-08",
          price: 300000,
          quota: 350,
          sold: 160,
          location: "Surabaya",
          creator: "Admin",
        },
        {
          id: 15,
          name: "Film Screening",
          date: "2025-04-10",
          price: 180000,
          quota: 250,
          sold: 130,
          location: "Yogyakarta",
          creator: "Admin",
        },
        {
          id: 16,
          name: "Entrepreneurship Class",
          date: "2025-05-28",
          price: 420000,
          quota: 300,
          sold: 145,
          location: "Jakarta",
          creator: "Admin",
        },
        {
          id: 17,
          name: "Cloud Computing Seminar",
          date: "2025-06-05",
          price: 480000,
          quota: 450,
          sold: 190,
          location: "Bekasi",
          creator: "Admin",
        },
        {
          id: 18,
          name: "E-Sports Tournament",
          date: "2025-08-17",
          price: 350000,
          quota: 800,
          sold: 500,
          location: "Jakarta",
          creator: "Admin",
        },
        {
          id: 19,
          name: "Health & Wellness Talk",
          date: "2025-03-30",
          price: 220000,
          quota: 300,
          sold: 120,
          location: "Bogor",
          creator: "Admin",
        },
        {
          id: 20,
          name: "Data Science Workshop",
          date: "2025-10-05",
          price: 700000,
          quota: 250,
          sold: 170,
          location: "Jakarta",
          creator: "Admin",
        },
      ];

      setEvents(initialEvents);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialEvents));
    }
  }, []);

  // TAMBAH EVENT
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

  // HAPUS EVENT
  const deleteEvent = (id) => {
    const updated = events.filter((event) => event.id !== id);
    setEvents(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  return {
    events,
    addEvent,
    deleteEvent,
  };
};
