import { Eye, Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import StatusBadge from "@/Components/common/StatusBadge";
import { useDeleteTrip } from "../hooks/useDeleteTrip";

export default function TripTable({ trips }) {
  const navigate = useNavigate();

  const deleteTrip = useDeleteTrip();

  const handleDelete = (id) => {
    if (window.confirm("Delete this trip?")) {
      deleteTrip.mutate(id);
    }
  };

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow">
      <table className="min-w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="px-5 py-4 text-left">Trip ID</th>
            <th className="px-5 py-4 text-left">Shipment</th>
            <th className="px-5 py-4 text-left">Vehicle</th>
            <th className="px-5 py-4 text-left">Driver</th>
            <th className="px-5 py-4 text-left">Destination</th>
            <th className="px-5 py-4 text-left">Distance</th>
            <th className="px-5 py-4 text-left">Status</th>
            <th className="px-5 py-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {trips.map((trip) => (
            <tr
              key={trip._id}
              className="border-b hover:bg-slate-50"
            >
              <td className="px-5 py-4 font-medium">
                {trip.tripId}
              </td>

              <td>
                {trip.shipments?.map((shipment) => (
                  <div key={shipment._id}>
                    {shipment.shipmentId}
                  </div>
                ))}
              </td>

              <td className="px-5 py-4">
                {trip.vehicle?.vehicleNumber}
              </td>

              <td className="px-5 py-4">
                {trip.driver?.name}
              </td>

              <td className="px-5 py-4">
                {trip.destination}
              </td>

              <td className="px-5 py-4">
                {trip.distance} KM
              </td>

              <td className="px-5 py-4">
                <StatusBadge status={trip.status} />
              </td>

              <td className="px-5 py-4">
                <div className="flex justify-center gap-3">
                  <button
                    onClick={() =>
                      navigate(`/trips/${trip._id}`)
                    }
                    className="rounded p-2 text-blue-600 hover:bg-blue-100"
                  >
                    <Eye size={18} />
                  </button>

                  <button
                    onClick={() =>
                      navigate(`/trips/${trip._id}/edit`)
                    }
                    className="rounded p-2 text-yellow-600 hover:bg-yellow-100"
                  >
                    <Pencil size={18} />
                  </button>

                  <button
                    onClick={() => handleDelete(trip._id)}
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