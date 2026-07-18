export default function SearchBar({
  value,
  onChange,
  placeholder = "Search...",
}) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-80 rounded-lg border border-slate-300 p-3 focus:border-blue-500 focus:outline-none"
    />
  );
}