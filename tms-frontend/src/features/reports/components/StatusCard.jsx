export default function StatusCard({
  title,
  stats,
}) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="mb-4 text-xl font-bold">
        {title}
      </h2>

      <div className="space-y-3">
        {Object.entries(stats).map(([key, value]) => (
          <div
            key={key}
            className="flex justify-between border-b pb-2"
          >
            <span className="capitalize text-gray-600">
              {key}
            </span>

            <span className="font-semibold">
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}