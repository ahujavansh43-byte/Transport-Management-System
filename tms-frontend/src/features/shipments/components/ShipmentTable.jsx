import { Eye, Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import StatusBadge from "@/Components/common/StatusBadge";
import { useDeleteShipment } from "../hooks/useDeleteShipment";

export default function ShipmentTable({ shipments }) {
  const navigate = useNavigate();
  const deleteShipment = useDeleteShipment();

  const handleDelete = (id) => {
    if (window.confirm("Delete this shipment?")) {
      deleteShipment.mutate(id);
    }
  };

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow">
      <table className="min-w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="px-5 py-4 text-left">Shipment ID</th>
            <th className="px-5 py-4 text-left">Customer</th>
            <th className="px-5 py-4 text-left">Vehicle</th>
            <th className="px-5 py-4 text-left">Driver</th>
            <th className="px-5 py-4 text-left">Status</th>
            <th className="px-5 py-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {shipments.map((shipment) => (
            <tr key={shipment._id} className="border-b hover:bg-slate-50">
              <td className="px-5 py-4">{shipment.shipmentId}</td>

              <td className="px-5 py-4">
                {shipment.customer?.customerName}
              </td>

              <td className="px-5 py-4">
                {shipment.vehicle?.vehicleNumber}
              </td>

              <td className="px-5 py-4">
                {shipment.driver?.name}
              </td>

              <td className="px-5 py-4">
                <StatusBadge status={shipment.status} />
              </td>

              <td className="px-5 py-4">
                <div className="flex justify-center gap-3">
                  <button
                    onClick={() =>
                      navigate(`/shipments/${shipment._id}`)
                    }
                    className="rounded p-2 text-blue-600 hover:bg-blue-100"
                  >
                    <Eye size={18} />
                  </button>

                  <button
                    onClick={() =>
                      navigate(`/shipments/${shipment._id}/edit`)
                    }
                    className="rounded p-2 text-yellow-600 hover:bg-yellow-100"
                  >
                    <Pencil size={18} />
                  </button>

                  <button
                    onClick={() => handleDelete(shipment._id)}
                    className="rounded p-2 text-red-600 hover:bg-red-100"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}