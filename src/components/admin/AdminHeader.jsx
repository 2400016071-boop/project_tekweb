export default function AdminHeader() {
  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-lg font-semibold text-[#5C3A21]">
        Dashboard
      </h1>

      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-600">
          Admin
        </span>
        <div className="w-8 h-8 rounded-full bg-[#5C3A21] text-white flex items-center justify-center font-semibold">
          A
        </div>
      </div>
    </header>
  );
}
