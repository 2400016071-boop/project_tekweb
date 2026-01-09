import { useState, useEffect } from "react";

const STORAGE_KEY = "events_data";

export const useEvents = () => {
  const [events, setEvents] = useState([]);

  // LOAD AWAL
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored) {
      setEvents(JSON.parse(stored));
      return;
    }

    const initialEvents = [
      {
        id: 1,
        name: "Jazz Gunung 2025",
        date: "2025-06-12",
        price: 750000,
        quota: 1000,
        sold: 250,
        location: "Amphitheater Bromo, Jawa Timur",
        description: "Festival musik jazz tahunan dengan latar pegunungan Bromo.",
        creator: "Admin",
        image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 2,
        name: "Tech Conference Indonesia",
        date: "2025-07-20",
        price: 500000,
        quota: 500,
        sold: 120,
        location: "Jakarta Convention Center",
        description: "Konferensi teknologi terbesar di Indonesia.",
        creator: "Admin",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 3,
        name: "Konser Sheila On 7",
        date: "2025-08-01",
        price: 650000,
        quota: 800,
        sold: 300,
        location: "Stadion GBK Jakarta",
        description: "Tur nasional band legendaris Indonesia.",
        creator: "Admin",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 4,
        name: "Festival Budaya Bali",
        date: "2025-05-15",
        price: 200000,
        quota: 400,
        sold: 80,
        location: "Ubud, Bali",
        description: "Pentas seni dan budaya khas Pulau Dewata.",
        creator: "Admin",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 5,
        name: "Konser Coldplay Jakarta",
        date: "2025-11-11",
        price: 1500000,
        quota: 2000,
        sold: 1800,
        location: "Stadion Internasional Jakarta",
        description: "Konser band internasional Coldplay di Indonesia.",
        creator: "Admin",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 6,
        name: "Expo Startup Nasional",
        date: "2025-04-22",
        price: 150000,
        quota: 200,
        sold: 40,
        location: "Surabaya",
        description: "Seminar dan expo tentang ekosistem startup digital.",
        creator: "Admin",
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 7,
        name: "Mobile Legend Tournament",
        date: "2025-10-05",
        price: 50000,
        quota: 128,
        sold: 90,
        location: "Surabaya Esport Arena",
        description: "Turnamen e-sport terbuka untuk umum.",
        creator: "Admin",
        image: "https://images.unsplash.com/photo-1553481187-be93c21490a9?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 8,
        name: "Workshop React JS",
        date: "2025-03-30",
        price: 175000,
        quota: 150,
        sold: 55,
        location: "Bandung Digital Valley",
        description: "Pelatihan React untuk pemula hingga mahir.",
        creator: "Admin",
        image: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 9,
        name: "Pameran Fotografi",
        date: "2025-12-01",
        price: 90000,
        quota: 220,
        sold: 100,
        location: "Yogyakarta",
        description: "Pameran karya fotografer muda Indonesia.",
        creator: "Admin",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 10,
        name: "Konser Dewa 19",
        date: "2025-09-19",
        price: 850000,
        quota: 900,
        sold: 400,
        location: "Solo",
        description: "Konser reuni band Dewa 19.",
        creator: "Admin",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 11,
        name: "Konser Tulus",
        date: "2025-07-07",
        price: 550000,
        quota: 700,
        sold: 310,
        location: "Medan",
        description: "Konser solo penyanyi Tulus.",
        creator: "Admin",
        image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 12,
        name: "Konser Hindia",
        date: "2025-08-17",
        price: 330000,
        quota: 600,
        sold: 210,
        location: "Semarang",
        description: "Live konser Hindia.",
        creator: "Admin",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 13,
        name: "Festival Kopi Nusantara",
        date: "2025-05-05",
        price: 75000,
        quota: 250,
        sold: 110,
        location: "Makassar",
        description: "Festival kuliner dan kopi.",
        creator: "Admin",
        image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 14,
        name: "Konser Noah",
        date: "2025-10-10",
        price: 470000,
        quota: 1000,
        sold: 500,
        location: "Palembang",
        description: "Tur band Noah.",
        creator: "Admin",
        image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 15,
        name: "Konser Nadin Amizah",
        date: "2025-12-12",
        price: 390000,
        quota: 500,
        sold: 200,
        location: "Pontianak",
        description: "Konser penyanyi Nadin Amizah.",
        creator: "Admin",
        image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 16,
        name: "Festival Musik Indie",
        date: "2025-07-30",
        price: 300000,
        quota: 200,
        sold: 75,
        location: "Depok",
        description: "Pentas musik indie terbuka untuk umum.",
        creator: "Admin",
        image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 17,
        name: "Seminar Cyber Security",
        date: "2025-07-18",
        price: 500000,
        quota: 300,
        sold: 130,
        location: "Bogor",
        description: "Talkshow mengenai keamanan data dan jaringan.",
        creator: "Admin",
        image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 18,
        name: "Konser Nasional Akhir Tahun",
        date: "2025-09-12",
        price: 550000,
        quota: 250,
        sold: 140,
        location: "Jakarta",
        description: "Konser musisi lokal dan nasional.",
        creator: "Admin",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 19,
        name: "Festival Film Indonesia",
        date: "2025-09-05",
        price: 180000,
        quota: 100,
        sold: 45,
        location: "Yogyakarta",
        description: "Pemutaran film dan diskusi sineas.",
        creator: "Admin",
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 20,
        name: "Data Science & Analytics Class",
        date: "2025-09-22",
        price: 700000,
        quota: 300,
        sold: 150,
        location: "Tangerang",
        description: "Workshop data science untuk umum.",
        creator: "Admin",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
      }
    ];

    setEvents(initialEvents);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialEvents));
  }, []);

  // ===== FUNGSI =====

  const getEventById = (idParam) => {
    const numId = Number(idParam);
    return events.find((e) => numId === e.id);
  };

  const addEvent = (event) => {
    const newEvent = {
      ...event,
      id: Date.now(),
      sold: 0,
      creator: event.creator || "Admin"
    };

    const updated = [...events, newEvent];
    setEvents(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const deleteEvent = (id) => {
    const updated = events.filter((e) => e.id !== Number(id));
    setEvents(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const updateEvent = (id, data) => {
    const updated = events.map((e) =>
      e.id === Number(id) ? { ...e, ...data } : e
    );

    setEvents(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  return {
    events,
    getEventById,
    addEvent,
    deleteEvent,
    updateEvent
  };
};
