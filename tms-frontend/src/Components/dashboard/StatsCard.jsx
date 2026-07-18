import { ArrowUpRight } from "lucide-react";

export default function StatsCard({
  title,
  value,
  icon: Icon,
  color = "bg-blue-500",
}) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            {value}
          </h2>

          <div className="mt-3 flex items-center gap-1 text-sm text-green-600">
            <ArrowUpRight size={16} />
            <span>12% this month</span>
          </div>
        </div>

        <div className={`${color} rounded-xl p-4 text-white`}>
          <Icon size={30} />
        </div>
      </div>
    </div>
  );
}