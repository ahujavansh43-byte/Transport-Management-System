export default function DriverFilter({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-lg border border-slate-300 bg-white px-4 py-3"
    >
      <option value="All">All</option>
      <option value="Available">Available</option>
      <option value="On Trip">On Trip</option>
      <option value="Inactive">Inactive</option>
    </select>
  );
}