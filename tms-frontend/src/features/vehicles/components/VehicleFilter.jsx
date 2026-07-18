export default function VehicleFilter({value, onChange}) {
  return (
    <select 
       value={value}
       onChange={(e)=> onChange(e.target.value)}
    className="rounded-lg border border-slate-300 px-4 py-2"
    >
      <option>All</option>
      <option>Available</option>
      <option>On Trip</option>
      <option>Maintenance</option>
    </select>
  );
}