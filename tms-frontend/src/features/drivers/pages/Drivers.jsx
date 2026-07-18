import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SearchBar from "@/Components/common/SearchBar";
import LoadingSpinner from "@/Components/common/LoadingSpinner";
import EmptyState from "@/Components/common/EmptyState";
import PageHeader from "@/Components/common/PageHeader";

import DriverFilter from "../components/DriverFilter";
import DriverTable from "../components/DriverTable";

import { useDrivers } from "../hooks/useDriverService";

export default function Drivers() {
  const navigate = useNavigate();

  const { data, isLoading, isError } = useDrivers();

  const drivers = data?.data || [];

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return (
      <h2 className="mt-10 text-center">
        Failed to load drivers.
      </h2>
    );
  }

  const filteredDrivers = drivers.filter((driver) => {
    const matchesSearch =
      driver.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      driver.licenseNumber
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesStatus =
      status === "All" || driver.status === status;

    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      <PageHeader
        title="Driver Management"
        description="Manage all company drivers"
        buttonText="Add Driver"
        onClick={() => navigate("/drivers/add")}
      />

      <div className="mb-6 flex items-center justify-between">
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search drivers..."
        />

        <DriverFilter
          value={status}
          onChange={setStatus}
        />
      </div>

      {filteredDrivers.length === 0 ? (
        <EmptyState
          title="No Drivers Found"
          description="Click 'Add Driver' to create your first driver."
        />
      ) : (
        <DriverTable drivers={filteredDrivers} />
      )}
    </div>
  );
}