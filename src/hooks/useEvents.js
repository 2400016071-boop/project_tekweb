import { useState, useEffect } from "react";

const STORAGE_KEY = "events_data";

export const useEvents = () => {
  const [events] = useState([
    {
      id: 1,
      name: "Jazz Gunung 2025",
      price: 750000,
      image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Tech Conference",
      price: 500000,
      image: "https://images.unsplash.com/photo-1515165562835-c4c47a2a7b92?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Rock Festival",
      price: 600000,
      image: "https://images.unsplash.com/photo-14970 32205916-ac775f0649ae?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "Startup Expo",
      price: 350000,
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      name: "Art Exhibition",
      price: 200000,
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      name: "Digital Marketing Summit",
      price: 450000,
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 7,
      name: "Food Festival",
      price: 150000,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 8,
      name: "Indie Music Night",
      price: 300000,
      image: "https://images.unsplash.com/photo-1518972559570-0cbea3c2c3c4?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 9,
      name: "Business Forum",
      price: 400000,
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 10,
      name: "Photography Workshop",
      price: 250000,
      image: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 11,
      name: "UI/UX Bootcamp",
      price: 550000,
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 12,
      name: "Cyber Security Talk",
      price: 500000,
      image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 13,
      name: "AI Innovation Day",
      price: 650000,
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 14,
      name: "Mobile App Meetup",
      price: 300000,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 15,
      name: "Film Screening",
      price: 180000,
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 16,
      name: "Entrepreneurship Class",
      price: 420000,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 17,
      name: "Cloud Computing Seminar",
      price: 480000,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 18,
      name: "E-Sports Tournament",
      price: 350000,
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 19,
      name: "Health & Wellness Talk",
      price: 220000,
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 20,
      name: "Data Science Workshop",
      price: 700000,
      image: "https://images.unsplash.com/photo-1517142089942-ba376ce32a0f?auto=format&fit=crop&w=800&q=80",
    },
  ]);

  return { events };
};
