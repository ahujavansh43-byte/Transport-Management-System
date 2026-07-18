import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import LoadingSpinner from "@/Components/common/LoadingSpinner";
import StatusBadge from "@/Components/common/StatusBadge";

import { useShipment } from "../hooks/useShipmentService";

export default function ShipmentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useShipment(id);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return (
      <h2 className="mt-10 text-center">
        Failed to load shipment.
      </h2>
    );
  }

  const shipment = data.data;

  return (
    <div className="rounded-xl bg-white p-8 shadow">
      <button
        onClick={() => navigate("/shipments")}
        className="mb-6 flex items-center gap-2 text-blue-600 hover:text-blue-800"
      >
        <ArrowLeft size={18} />
        Back to Shipments
      </button>

      <h1 className="mb-8 text-3xl font-bold">
        Shipment Details
      </h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

        <div>
          <h3 className="text-sm text-slate-500">Shipment ID</h3>
          <p className="text-lg font-medium">
            {shipment.shipmentId}
          </p>
        </div>

        <div>
          <h3 className="text-sm text-slate-500">Customer Name</h3>
          <p className="text-lg font-medium">
            {shipment.customerName}
          </p>
        </div>

        <div>
          <h3 className="text-sm text-slate-500">Pickup Location</h3>
          <p className="text-lg font-medium">
            {shipment.pickupLocation}
          </p>
        </div>

        <div>
          <h3 className="text-sm text-slate-500">Delivery Location</h3>
          <p className="text-lg font-medium">
            {shipment.deliveryLocation}
          </p>
        </div>

        <div>
          <h3 className="text-sm text-slate-500">Vehicle Number</h3>
          <p className="text-lg font-medium">
            {shipment.vehicle?.vehicleNumber}
          </p>
        </div>

        <div>
          <h3 className="text-sm text-slate-500">Driver Name</h3>
          <p className="text-lg font-medium">
            {shipment.driver?.name}
          </p>
        </div>

        <div>
          <h3 className="text-sm text-slate-500">Weight</h3>
          <p className="text-lg font-medium">
            {shipment.weight} Tons
          </p>
        </div>

        <div>
          <h3 className="text-sm text-slate-500">
            Expected Delivery
          </h3>
          <p className="text-lg font-medium">
            {new Date(
              shipment.expectedDelivery
            ).toLocaleDateString()}
          </p>
        </div>

        <div>
          <h3 className="text-sm text-slate-500">Status</h3>
          <StatusBadge status={shipment.status} />
        </div>

        <div>
          <h3 className="text-sm text-slate-500">Created At</h3>
          <p className="text-lg font-medium">
            {new Date(
              shipment.createdAt
            ).toLocaleDateString()}
          </p>
        </div>

      </div>
    </div>
  );
}