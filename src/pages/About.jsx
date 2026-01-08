export default function About() {
  return (
    <main className="min-h-screen bg-[#F8F1EA] px-6 py-10">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">

        <h1 className="text-3xl font-bold text-[#5C3A21] mb-6">
          Tentang Event Ticket
        </h1>

        <p className="text-gray-700 mb-4 leading-relaxed">
          Event Ticket adalah aplikasi berbasis web yang digunakan untuk
          membantu pengguna dalam mencari dan membeli tiket konser
          dan event musik secara online dengan mudah dan cepat.
        </p>

        <h2 className="text-xl font-semibold text-[#5C3A21] mt-6 mb-2">
          Fitur Utama
        </h2>

        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Pencarian event konser</li>
          <li>Detail event dengan modal pop-up</li>
          <li>Pembelian tiket melalui WhatsApp</li>
          <li>Login admin untuk pengelolaan event</li>
        </ul>

        <h2 className="text-xl font-semibold text-[#5C3A21] mt-6 mb-2">
          Teknologi yang Digunakan
        </h2>

        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>React JS</li>
          <li>Vite</li>
          <li>Tailwind CSS</li>
          <li>shadcn/ui</li>
          <li>React Router</li>
        </ul>

        <h2 className="text-xl font-semibold text-[#5C3A21] mt-6 mb-2">
          Tujuan Pembuatan
        </h2>

        <p className="text-gray-700">
          Website ini dibuat sebagai bagian dari tugas mata kuliah
          dan sebagai latihan dalam membangun aplikasi web modern
          menggunakan React JS dan Tailwind CSS.
        </p>

      </div>
    </main>
  );
}
