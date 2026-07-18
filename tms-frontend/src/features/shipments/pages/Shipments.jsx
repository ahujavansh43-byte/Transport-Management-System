import { useNavigate } from "react-router-dom";

import PageHeader from "@/Components/common/PageHeader";
import LoadingSpinner from "@/Components/common/LoadingSpinner";
import EmptyState from "@/Components/common/EmptyState";

import ShipmentTable from "../components/ShipmentTable";
import { useShipments } from "../hooks/useShipmentService";

export default function Shipments() {
  const navigate = useNavigate();

  const { data, isLoading, isError } = useShipments();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return (
      <h2 className="text-center mt-10">
        Failed to load shipments.
      </h2>
    );
  }

  const shipments = data?.data || [];

  return (
    <div>
      <PageHeader
        title="Shipment Management"
        description="Manage all shipments"
        buttonText="Add Shipment"
        onClick={() => navigate("/shipments/add")}
      />

      {shipments.length === 0 ? (
        <EmptyState
          title="No Shipments Found"
          description="Click 'Add Shipment' to create your first shipment."
        />
      ) : (
        <ShipmentTable shipments={shipments} />
      )}
    </div>
  );
}