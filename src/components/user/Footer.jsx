import { Instagram, Twitter, Facebook, Mail, Phone } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const [columns, setColumns] = useState(1);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 1024) {
        setColumns(4); // Desktop
      } else if (width >= 640) {
        setColumns(2); // Tablet
      } else {
        setColumns(1); // Mobile
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubscribe = () => {
    if (!email) {
      alert("Silakan masukkan email terlebih dahulu.");
      return;
    }

    alert(`Terima kasih sudah berlangganan!\nEmail: ${email}`);
    setEmail("");
  };

  return (
    <footer className="bg-[#6b4226] text-[#F3E6DB]">
      <div
        className="max-w-7xl mx-auto px-6 py-12 grid gap-8"
        style={{
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        }}
      >
        {/* BRAND */}
        <div>
          <h3 className="text-lg font-bold mb-3">Event Ticket</h3>
          <p className="text-sm leading-relaxed">
            Platform pemesanan tiket event terpercaya.
            Nikmati kemudahan akses ke berbagai acara musik, seminar,
            dan festival favorit Anda.
          </p>

          <div className="flex gap-4 mt-4">
            <Instagram size={18} />
            <Twitter size={18} />
            <Facebook size={18} />
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>About Us</li>
            <li>All Events</li>
            <li>Partner with Us</li>
            <li>Contact Support</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} /> supporteventticket@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +62 21 555 0123
            </li>
            <li>
              Jl. Ring Road Selatan, Yogyakarta, 55191
            </li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="font-semibold mb-3">Newsletter</h3>
          <p className="text-sm mb-3">
            Dapatkan info tiket promo dan event terbaru langsung ke inbox Anda.
          </p>

          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 rounded-md text-sm text-black mb-2"
          />

          <button
            onClick={handleSubscribe}
            className="w-full bg-white text-[#6b4226] py-2 rounded-md font-semibold"
          >
            Subscribe
          </button>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-[#8a5a3c] py-4 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between gap-2">
          <p>© 2025 Event Ticket. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
