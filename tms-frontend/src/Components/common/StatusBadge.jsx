export default function StatusBadge({ status }) {
  const colors = {
    Available: "bg-green-100 text-green-700",
    "On Trip": "bg-blue-100 text-blue-700",
    Maintenance: "bg-red-100 text-red-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Delivered: "bg-green-100 text-green-700",
    "In Transit": "bg-orange-100 text-orange-700",
    Leave: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-sm font-medium ${
        colors[status] || "bg-gray-100 text-gray-700"
      }`}
    >
      {status}
    </span>
  );
}