export function Progress({ value = 0, className = "" }) {
  return (
    <div
      className={`relative h-3 w-full overflow-hidden rounded-full bg-gray-200 ${className}`}
    >
      <div
        className="h-full bg-[#5C3A21] transition-all duration-300"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
