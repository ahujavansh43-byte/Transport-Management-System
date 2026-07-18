import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import LoadingSpinner from "@/Components/common/LoadingSpinner";
import StatusBadge from "@/Components/common/StatusBadge";

import { useDriver } from "../hooks/useDriverService";

export default function DriverDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useDriver(id);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return (
      <h2 className="text-center mt-10">
        Failed to load driver.
      </h2>
    );
  }

  const driver = data.data;

  return (
    <div className="max-w-3xl rounded-xl bg-white p-8 shadow">
      <button
        onClick={() => navigate("/drivers")}
        className="mb-6 flex items-center gap-2 text-blue-600 hover:text-blue-800"
      >
        <ArrowLeft size={18} />
        Back to Drivers
      </button>

      <h1 className="mb-8 text-3xl font-bold">
        Driver Details
      </h1>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <h3 className="text-sm text-slate-500">Driver Name</h3>
          <p className="text-lg font-medium">{driver.name}</p>
        </div>

        <div>
          <h3 className="text-sm text-slate-500">Email</h3>
          <p className="text-lg font-medium">{driver.email}</p>
        </div>

        <div>
          <h3 className="text-sm text-slate-500">Phone</h3>
          <p className="text-lg font-medium">{driver.phone}</p>
        </div>

        <div>
          <h3 className="text-sm text-slate-500">License Number</h3>
          <p className="text-lg font-medium">
            {driver.licenseNumber}
          </p>
        </div>

        <div>
          <h3 className="text-sm text-slate-500">Experience</h3>
          <p className="text-lg font-medium">
            {driver.experience} Years
          </p>
        </div>

        <div>
          <h3 className="text-sm text-slate-500">Status</h3>
          <StatusBadge status={driver.status} />
        </div>
      </div>
    </div>
  );
}