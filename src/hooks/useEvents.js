import { useState } from "react";

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
      image:"https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=800&q=80",
    },
  ]);

  return { events };
};

