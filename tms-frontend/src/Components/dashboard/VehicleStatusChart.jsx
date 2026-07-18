import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { useDashboardStats } from "@/features/dashboard/hooks/useDashboardStats";
import LoadingSpinner from "@/Components/common/LoadingSpinner";

const COLORS = ["#22c55e", "#3b82f6", "#ef4444"];

export default function VehicleStatusChart({data}) {
  const {  isLoading, isError } = useDashboardStats();

  if (isLoading) return <LoadingSpinner />;

  if (isError) {
    return (
      <div className="rounded-xl bg-white p-6 shadow">
        Failed to load chart.
      </div>
    );
  }

  const status = data.vehicleStatus;

  const chartData = [
    {
      name: "Available",
      value: status.available,
    },
    {
      name: "On Trip",
      value: status.onTrip,
    },
    {
      name: "Maintenance",
      value: status.maintenance,
    },
  ];

  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="mb-6 text-xl font-bold">
        Vehicle Status
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            outerRadius={90}
            label
          >
            {chartData.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}