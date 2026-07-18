import { recentShipments } from "@/data/dashboardData";

export default function RecentShipments() {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          Recent Shipments
        </h2>

        <button className="text-blue-600 hover:underline">
          View All
        </button>
      </div>

      <table className="w-full">
        <thead>
          <tr className="border-b text-left text-slate-500">
            <th className="pb-3">Shipment</th>
            <th className="pb-3">Customer</th>
            <th className="pb-3">Driver</th>
            <th className="pb-3">Vehicle</th>
            <th className="pb-3">Status</th>
          </tr>
        </thead>

        <tbody>
          {recentShipments.map((shipment) => (
            <tr
              key={shipment.id}
              className="border-b hover:bg-slate-50"
            >
              <td className="py-4">{shipment.id}</td>
              <td>{shipment.customer}</td>
              <td>{shipment.driver}</td>
              <td>{shipment.vehicle}</td>

              <td>
                <span
                  className={`rounded-full px-3 py-1 text-sm
                    ${
                      shipment.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : shipment.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                >
                  {shipment.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}