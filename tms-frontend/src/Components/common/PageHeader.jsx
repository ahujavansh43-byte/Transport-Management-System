export default function PageHeader({
  title,
  description,
  buttonText,
  onClick,
}) {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>

        <p className="mt-1 text-slate-500">
          {description}
        </p>
      </div>

      {buttonText && (
        <button
          onClick={onClick}
          className="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}