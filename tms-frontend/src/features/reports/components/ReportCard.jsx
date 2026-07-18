export default function ReportCard({
  title,
  value,
  color = "bg-blue-500",
}) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <div
        className={`mb-4 h-2 rounded ${color}`}
      />

      <h3 className="text-gray-500">
        {title}
      </h3>

      <p className="mt-2 text-3xl font-bold">
        {value}
      </p>
    </div>
  );
}