import { useNavigate, useParams } from "react-router-dom";

import LoadingSpinner from "@/Components/common/LoadingSpinner";

import ShipmentForm from "../components/ShipmentForm";
import { useShipment } from "../hooks/useShipmentService";
import { useUpdateShipment } from "../hooks/useUpdateShipment";

export default function EditShipment() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useShipment(id);

  const updateShipment = useUpdateShipment();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return (
      <h2 className="text-center mt-10">
        Failed to load shipment.
      </h2>
    );
  }

  const shipment = data.data;

  const defaultValues = {
    shipmentId: shipment.shipmentId,
    customerName: shipment.customerName,
    pickupLocation: shipment.pickupLocation,
    deliveryLocation: shipment.deliveryLocation,
    vehicle: shipment.vehicle?._id,
    driver: shipment.driver?._id,
    weight: shipment.weight,
    expectedDelivery: shipment.expectedDelivery
      ? shipment.expectedDelivery.split("T")[0]
      : "",
    status: shipment.status,
  };

  const handleSubmit = (formData) => {
    updateShipment.mutate(
      {
        id,
        shipmentData: formData,
      },
      {
        onSuccess: () => {
          navigate("/shipments");
        },
      }
    );
  };

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">
        Edit Shipment
      </h1>

      <ShipmentForm
        defaultValues={defaultValues}
        onSubmit={handleSubmit}
        buttonText="Update Shipment"
      />
    </div>
  );
}