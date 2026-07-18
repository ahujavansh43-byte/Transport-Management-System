export default function KPICard({
  title,
  value,
  subtitle,
  color,
}) {
  return (
    <div
      className={`rounded-xl p-6 text-white shadow-lg ${color}`}
    >
      <p className="text-sm opacity-90">
        {title}
      </p>

      <h2 className="mt-2 text-3xl font-bold">
        {value}
      </h2>

      <p className="mt-3 text-sm opacity-80">
        {subtitle}
      </p>
    </div>
  );
}