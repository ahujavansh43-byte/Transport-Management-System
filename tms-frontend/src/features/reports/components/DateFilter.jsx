export default function DateFilter({
  dateRange,
  setDateRange,
}) {
  return (
    <div className="flex items-center gap-4">

      <select
        value={dateRange}
        onChange={(e) =>
          setDateRange(e.target.value)
        }
        className="rounded-lg border px-4 py-2 shadow-sm"
      >
        <option value="today">Today</option>

        <option value="7days">
          Last 7 Days
        </option>

        <option value="30days">
          Last 30 Days
        </option>

        <option value="90days">
          Last 90 Days
        </option>

        <option value="all">
          All Time
        </option>

      </select>

    </div>
  );
}