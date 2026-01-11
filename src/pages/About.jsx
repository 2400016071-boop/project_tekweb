import { Instagram } from "lucide-react";

export default function About() {
  return (
    <div className="bg-[#F3E6DB] text-[#3b2a1a]">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Tentang Event Ticket</h1>
        <p className="max-w-3xl mx-auto text-base leading-relaxed">
          Event Ticket adalah platform pemesanan tiket event yang dirancang
          untuk memberikan kemudahan akses ke berbagai acara seperti konser,
          seminar, dan festival dengan sistem yang aman dan terpercaya.
        </p>
      </section>

      {/* FOTO EVENT */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <img
            src="https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2"
            alt="Concert"
            className="rounded-xl object-cover h-56 w-full"
          />
          <img
            src="https://images.unsplash.com/photo-1528605248644-14dd04022da1"
            alt="Seminar"
            className="rounded-xl object-cover h-56 w-full"
          />
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
            alt="Festival"
            className="rounded-xl object-cover h-56 w-full"
          />
        </div>
      </section>

      {/* VISI MISI */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold mb-3">Visi</h2>
          <p className="leading-relaxed">
            Menjadi platform pemesanan tiket event digital terpercaya
            yang menghubungkan penyelenggara dan pengunjung event
            secara mudah dan efisien.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Misi</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Menyediakan sistem pemesanan tiket yang cepat dan aman</li>
            <li>Mendukung promosi event lokal dan nasional</li>
            <li>Meningkatkan pengalaman pengguna dalam mencari event</li>
          </ul>
        </div>
      </section>

      {/* TIM PENGEMBANG (TANPA FOTO) */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-10">
            Tim Pengembang
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Liviya Afriani Pratama",
                role: "Frontend user",
                ig: "https://www.instagram.com/liviya24_?igsh=MTFlcTg1OWV0aG41OQ=="
              },
              {
                name: "Angraini Putri Hartadi",
                role: "Frontend admin",
                ig: "https://www.instagram.com/anggraenip.h?igsh=MTUza3FxNmFpYnE0NA=="
              },
              {
                name: "Dyah Amarruli",
                role: "Logic & API",
                ig: "https://www.instagram.com/dyahamr_?igsh=MTVmNHBrNmsyZXcxNA=="
              }
            ].map((person, i) => (
              <div
                key={i}
                className="bg-[#F3E6DB] rounded-xl shadow p-6 text-center"
              >
                <h3 className="font-semibold text-lg">{person.name}</h3>
                <p className="text-sm mb-3">{person.role}</p>

                <a
                  href={person.ig}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm hover:underline"
                >
                  <Instagram size={16} /> Instagram
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
