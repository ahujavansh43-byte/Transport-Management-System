export default function TripFilter({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-lg border p-3"
    >
      <option value="All">All Status</option>
      <option value="Scheduled">Scheduled</option>
      <option value="In Progress">In Progress</option>
      <option value="Completed">Completed</option>
      <option value="Cancelled">Cancelled</option>
    </select>
  );
}