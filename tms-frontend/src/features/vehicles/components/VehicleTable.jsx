import StatusBadge from "@/Components/common/StatusBadge";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
// import { vehicles } from "../data/vehicles";
import { useDeleteVehicle } from "../hooks/useDeleteVehicle";

export default function VehicleTable({ vehicles }) {
  const navigate = useNavigate();
  const deleteMutation = useDeleteVehicle();

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow">
      <table className="min-w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="px-5 py-4 text-left">Vehicle No.</th>
            <th className="px-5 py-4 text-left">Type</th>
            <th className="px-5 py-4 text-left">Driver</th>
            <th className="px-5 py-4 text-left">Capacity</th>
            <th className="px-5 py-4 text-left">Status</th>
            <th className="px-5 py-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle._id} className="border-b hover:bg-slate-50">
              <td className="px-5 py-4 font-medium">
                {vehicle.vehicleNumber}
              </td>

              <td className="px-5 py-4">
                {vehicle.type}
              </td>

              <td className="px-5 py-4">
                {vehicle.driverName}
              </td>

              <td className="px-5 py-4">
                {vehicle.capacity} Tons
              </td>

              <td className="px-5 py-4">
                <StatusBadge status={vehicle.status} />
              </td>

              <td className="px-5 py-4">
                <div className="flex justify-center gap-3">
                  <button
                    onClick={() => navigate(`/vehicles/${vehicle._id}`)}
                    className="rounded p-2 text-blue-600 hover:bg-blue-100"
                  >
                    <Eye size={18} />
                  </button>

                  <button
                    onClick={() => navigate(`/vehicles/${vehicle._id}/edit`)}
                    className="rounded p-2 text-yellow-600 hover:bg-yellow-100"
                  >
                    <Pencil size={18} />
                  </button>

                  <button
                    onClick={() => {
                      const confirmDelete = window.confirm(
                        "Are you sure you want to delete this vehicle?"
                      );

                      if (confirmDelete) {
                        deleteMutation.mutate(vehicle._id);
                      }
                    }}
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