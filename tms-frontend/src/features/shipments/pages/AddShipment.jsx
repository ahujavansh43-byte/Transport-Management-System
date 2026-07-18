import { useNavigate } from "react-router-dom";

import ShipmentForm from "../components/ShipmentForm";
import { useAddShipment } from "../hooks/useAddShipment";

export default function AddShipment() {
  const navigate = useNavigate();

  const addShipment = useAddShipment();

  const handleSubmit = (formData) => {
    addShipment.mutate(formData, {
      onSuccess: () => {
        navigate("/shipments");
      },
    });
  };

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">
        Add Shipment
      </h1>

      <ShipmentForm
        onSubmit={handleSubmit}
        buttonText="Add Shipment"
      />
    </div>
  );
}