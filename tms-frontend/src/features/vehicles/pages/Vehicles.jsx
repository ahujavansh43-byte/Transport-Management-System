import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SearchBar from "@/Components/common/SearchBar";
import LoadingSpinner from "@/Components/common/LoadingSpinner";
import PageHeader from "@/Components/common/PageHeader";
import EmptyState from "@/Components/common/EmptyState";

import VehicleFilter from "../components/VehicleFilter";
import VehicleTable from "../components/VehicleTable";

import { useVehicles } from "../hooks/useVehicleService";

export default function Vehicles() {
  const navigate = useNavigate();

  const { data, isLoading, isError } = useVehicles();

  const vehicles = data?.data || [];

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return (
      <h2 className="mt-10 text-center text-red-500">
        Something went wrong.
      </h2>
    );
  }

  const filteredVehicles = vehicles.filter((vehicle) => {
    const matchesSearch =
      vehicle.vehicleNumber
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      vehicle.driverName
        ?.toLowerCase()
        .includes(search.toLowerCase());

    const matchesStatus =
      status === "All" || vehicle.status === status;

    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      <PageHeader
        title="Vehicle Management"
        description="Manage all company vehicles"
        buttonText="Add Vehicle"
        onClick={() => navigate("/vehicles/add")}
      />

      <div className="mb-6 flex items-center justify-between">
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search by Vehicle Number or Driver"
        />

        <VehicleFilter
          value={status}
          onChange={setStatus}
        />
      </div>

      {filteredVehicles.length === 0 ? (
        <EmptyState
          title="No Vehicles Found"
          description="Click 'Add Vehicle' to create your first vehicle."
        />
      ) : (
        <VehicleTable vehicles={filteredVehicles} />
      )}
    </div>
  );
}