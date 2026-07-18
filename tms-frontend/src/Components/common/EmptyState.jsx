export default function EmptyState({
  title,
  description,
}) {
  return (
    <div className="rounded-xl border border-dashed bg-white p-12 text-center">
      <h2 className="text-2xl font-semibold">
        {title}
      </h2>

      <p className="mt-3 text-slate-500">
        {description}
      </p>
    </div>
  );
}