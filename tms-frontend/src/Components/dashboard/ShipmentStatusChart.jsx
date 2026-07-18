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

const COLORS = ["#f59e0b", "#3b82f6", "#22c55e"];

export default function ShipmentStatusChart({data}) {
  const {  isLoading, isError } = useDashboardStats();

  if (isLoading) return <LoadingSpinner />;

  if (isError) {
    return (
      <div className="rounded-xl bg-white p-6 shadow">
        Failed to load shipment chart.
      </div>
    );
  }

  const status = data.shipmentStatus;

  const chartData = [
    {
      name: "Pending",
      value: status.pending,
    },
    {
      name: "In Transit",
      value: status.inTransit,
    },
    {
      name: "Delivered",
      value: status.delivered,
    },
  ];

  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="mb-6 text-xl font-bold">
        Shipment Status
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