import { useState } from "react";

export const useEvents = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      name: "Jazz Gunung 2025",
      location: "Malang, Jawa Timur",
      price: 750000,
      date: "2025-08-15",
      quota: 500,
      description: "Festival musik jazz tahunan di kawasan pegunungan...",
      image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2"
    },
    {
      id: 2,
      name: "Tech Conference",
      location: "Jakarta",
      price: 500000,
      date: "2025-09-10",
      quota: 300,
      description: "Konferensi teknologi yang membahas tren terbaru di dunia IT dan startup.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
    },
    {
      id: 3,
      name: "Rock Festival",
      location: "Bandung",
      price: 600000,
      date: "2025-07-20",
      quota: 800,
      description: "Festival musik rock dengan penampilan band lokal dan nasional.",
      image: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae"
    },
    {
      id: 4,
      name: "Startup Expo",
      location: "Surabaya",
      price: 350000,
      date: "2025-06-12",
      quota: 400,
      description: "Pameran startup dan inovasi teknologi dari berbagai industri.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
    },
    {
      id: 5,
      name: "Art Exhibition",
      location: "Yogyakarta",
      price: 200000,
      date: "2025-05-05",
      quota: 250,
      description: "Pameran seni modern dan kontemporer dari seniman lokal.",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
    },
    {
      id: 6,
      name: "Digital Marketing Summit",
      location: "Jakarta",
      price: 450000,
      date: "2025-09-18",
      quota: 300,
      description: "Seminar pemasaran digital dengan pembicara profesional.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
    },
    {
      id: 7,
      name: "Food Festival",
      location: "Semarang",
      price: 150000,
      date: "2025-08-25",
      quota: 500,
      description: "Festival kuliner nusantara dengan berbagai stand makanan.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
    },
    {
      id: 8,
      name: "Indie Music Night",
      location: "Depok",
      price: 300000,
      date: "2025-07-30",
      quota: 200,
      description: "Konser musik indie malam hari dengan musisi independen.",
      image: "https://images.unsplash.com/photo-1506157786151-b8491531f063"
    },
    {
      id: 9,
      name: "Business Forum",
      location: "Jakarta",
      price: 400000,
      date: "2025-10-01",
      quota: 350,
      description: "Forum diskusi bisnis dan ekonomi bersama praktisi.",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786"
    },
    {
      id: 10,
      name: "Photography Workshop",
      location: "Bandung",
      price: 250000,
      date: "2025-06-20",
      quota: 150,
      description: "Workshop fotografi untuk pemula hingga profesional.",
      image: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92"
    },
    {
      id: 11,
      name: "UI/UX Bootcamp",
      location: "Jakarta",
      price: 550000,
      date: "2025-09-12",
      quota: 250,
      description: "Bootcamp intensif desain UI/UX berbasis studi kasus.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
    },
    {
      id: 12,
      name: "Cyber Security Talk",
      location: "Bogor",
      price: 500000,
      date: "2025-07-18",
      quota: 300,
      description: "Talkshow mengenai keamanan data dan sistem informasi.",
      image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f"
    },
    {
      id: 13,
      name: "AI Innovation Day",
      location: "Jakarta",
      price: 650000,
      date: "2025-10-10",
      quota: 400,
      description: "Acara inovasi kecerdasan buatan dan implementasinya.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1"
    },
    {
      id: 14,
      name: "Mobile App Meetup",
      location: "Tangerang",
      price: 300000,
      date: "2025-08-12",
      quota: 180,
      description: "Meetup pengembang aplikasi mobile lintas platform.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
    },
    {
      id: 15,
      name: "Film Screening",
      location: "Yogyakarta",
      price: 180000,
      date: "2025-09-05",
      quota: 100,
      description: "Pemutaran film independen dan diskusi bersama sineas.",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba"
    },
    {
      id: 16,
      name: "Entrepreneurship Class",
      location: "Surabaya",
      price: 420000,
      date: "2025-06-25",
      quota: 120,
      description: "Kelas kewirausahaan untuk calon pebisnis muda.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978"
    },
    {
      id: 17,
      name: "Cloud Computing Seminar",
      location: "Jakarta",
      price: 480000,
      date: "2025-10-20",
      quota: 200,
      description: "Seminar teknologi cloud dan infrastruktur digital.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
    },
    {
      id: 18,
      name: "E-Sports Tournament",
      location: "Bekasi",
      price: 350000,
      date: "2025-08-18",
      quota: 400,
      description: "Turnamen e-sports dengan berbagai kategori game.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e"
    },
    {
      id: 19,
      name: "Health & Wellness Talk",
      location: "Solo",
      price: 220000,
      date: "2025-07-25",
      quota: 150,
      description: "Talkshow kesehatan dan gaya hidup seimbang.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773"
    },
    {
      id: 20,
      name: "Data Science Workshop",
      location: "Jakarta",
      price: 700000,
      date: "2025-09-22",
      quota: 300,
      description: "Workshop intensif data science dan analisis data.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
    },
  ]);

  const addEvent = (newEvent) => {
    setEvents((prev) => [...prev, { id: Date.now(), ...newEvent }]);
  };

  const deleteEvent = (id) => {
    setEvents((prev) => prev.filter((event) => event.id !== id));
  };

  return { events, addEvent, deleteEvent };
};
