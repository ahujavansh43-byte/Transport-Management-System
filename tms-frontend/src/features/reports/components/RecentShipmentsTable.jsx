import StatusBadge from "@/Components/common/StatusBadge";

export default function RecentShipmentsTable({
  shipments,
}) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="mb-5 text-xl font-bold">
        Recent Shipments
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b text-left">
              <th className="pb-3">Shipment ID</th>
              <th className="pb-3">Customer</th>
              <th className="pb-3">Pickup</th>
              <th className="pb-3">Delivery</th>
              <th className="pb-3">Status</th>
              <th className="pb-3">Expected Delivery</th>
            </tr>
          </thead>

          <tbody>
            {shipments.map((shipment) => (
              <tr
                key={shipment._id}
                className="border-b"
              >
                <td className="py-3">
                  {shipment.shipmentId}
                </td>

                <td>
                  {shipment.customer?.customerName}
                </td>

                <td>
                  {shipment.pickupLocation}
                </td>

                <td>
                  {shipment.deliveryLocation}
                </td>

                <td>
                  <StatusBadge
                    status={shipment.status}
                  />
                </td>

                <td>
                  {new Date(
                    shipment.expectedDelivery
                  ).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}