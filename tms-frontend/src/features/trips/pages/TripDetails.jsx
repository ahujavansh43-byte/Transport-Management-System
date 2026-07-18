import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import LoadingSpinner from "@/Components/common/LoadingSpinner";
import StatusBadge from "@/Components/common/StatusBadge";

import { useTrip } from "../hooks/useTripService";

export default function TripDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useTrip(id);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return (
      <h2 className="mt-10 text-center text-red-600">
        Failed to load trip.
      </h2>
    );
  }

  const trip = data?.data;

  return (
    <div className="rounded-xl bg-white p-8 shadow">
      {/* Back Button */}
      <button
        onClick={() => navigate("/trips")}
        className="mb-6 flex items-center gap-2 text-blue-600 hover:text-blue-800"
      >
        <ArrowLeft size={18} />
        Back to Trips
      </button>

      {/* Heading */}
      <h1 className="mb-8 text-3xl font-bold">
        Trip Details
      </h1>

      {/* Details */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

        <div>
          <h3 className="text-sm text-slate-500">Trip ID</h3>
          <p className="text-lg font-medium">
            {trip.tripId}
          </p>
        </div>

        <div>
          <h3 className="text-sm text-slate-500">Shipment</h3>
          <div className="space-y-2">
  {trip.shipments?.length > 0 ? (
    trip.shipments.map((shipment) => (
      <div
        key={shipment._id}
        className="rounded-lg border p-3"
      >
        <p className="font-semibold">
          {shipment.shipmentId}
        </p>

        <p className="text-sm text-gray-500">
          Customer: {shipment.customer?.customerName}
        </p>

        <p className="text-sm">
          Status: {shipment.status}
        </p>
      </div>
    ))
  ) : (
    <p className="text-gray-500">
      No shipments assigned.
    </p>
  )}
</div>
       </div>
        </div>

        <div>
          <h3 className="text-sm text-slate-500">Vehicle</h3>
          <p className="text-lg font-medium">
            {trip.vehicle?.vehicleNumber}
          </p>
        </div>

        <div>
          <h3 className="text-sm text-slate-500">Driver</h3>
          <p className="text-lg font-medium">
            {trip.driver?.name}
          </p>
        </div>

        <div>
          <h3 className="text-sm text-slate-500">Start Location</h3>
          <p className="text-lg font-medium">
            {trip.startLocation}
          </p>
        </div>

        <div>
          <h3 className="text-sm text-slate-500">Destination</h3>
          <p className="text-lg font-medium">
            {trip.destination}
          </p>
        </div>

        <div>
          <h3 className="text-sm text-slate-500">Start Date</h3>
          <p className="text-lg font-medium">
            {new Date(trip.startDate).toLocaleDateString()}
          </p>
        </div>

        <div>
          <h3 className="text-sm text-slate-500">End Date</h3>
          <p className="text-lg font-medium">
            {trip.endDate
              ? new Date(trip.endDate).toLocaleDateString()
              : "-"}
          </p>
        </div>

        <div>
          <h3 className="text-sm text-slate-500">Distance</h3>
          <p className="text-lg font-medium">
            {trip.distance} KM
          </p>
        </div>

        <div>
          <h3 className="text-sm text-slate-500">Fuel Used</h3>
          <p className="text-lg font-medium">
            {trip.fuelUsed} Liters
          </p>
        </div>

        <div>
          <h3 className="text-sm text-slate-500">Status</h3>
          <StatusBadge status={trip.status} />
        </div>

        <div>
          <h3 className="text-sm text-slate-500">Created At</h3>
          <p className="text-lg font-medium">
            {new Date(trip.createdAt).toLocaleDateString()}
          </p>
        </div>

      </div>
    
  );
}