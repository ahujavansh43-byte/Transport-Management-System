import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";


export default function RevenueChart({data}) {
  const chartData = [
    { month: "Jan", revenue: 45000 },
    { month: "Feb", revenue: 62000 },
    { month: "Mar", revenue: 78000 },
    { month: "Apr", revenue: 92000 },
    { month: "May", revenue: 110000 },
    { month: "Jun", revenue: data.revenue },
  ];
  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="mb-6 text-xl font-bold">
        Monthly Revenue
      </h2>

      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="revenue"
            fill="#2563eb"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}