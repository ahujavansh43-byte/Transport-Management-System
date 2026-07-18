import { useForm } from "react-hook-form";

import { useShipments } from "@/features/shipments/hooks/useShipmentService";
import { useAvailableVehicles } from "@/features/vehicles/hooks/useVehicleService";
import { useAvailableDrivers } from "@/features/drivers/hooks/useDriverService";

import LoadingSpinner from "@/Components/common/LoadingSpinner";

export default function TripForm({
  onSubmit,
  defaultValues = {},
  buttonText = "Save Trip",
}) {
  const { register, handleSubmit } = useForm({
    defaultValues,
  });

  const { data: shipmentData, isLoading: shipmentLoading } = useShipments();
  const { data: vehicleData, isLoading: vehicleLoading } = useAvailableVehicles();
  const { data: driverData, isLoading: driverLoading } = useAvailableDrivers();

  if (shipmentLoading || vehicleLoading || driverLoading) {
    return <LoadingSpinner />;
  }

  const shipments = shipmentData?.data || [];
  const vehicles = vehicleData?.data || [];
  const drivers = driverData?.data || [];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-xl bg-white p-6 shadow"
    >
      {/* Trip ID */}
      <div>
        <label className="mb-2 block font-medium">Trip ID</label>
        <input
          {...register("tripId")}
          className="w-full rounded-lg border p-3"
        />
      </div>

      {/* Shipment */}
      <div>
        <label className="mb-2 block font-medium">
          Shipments
        </label>

        <select
          multiple
          {...register("shipments")}
          className="h-48 w-full rounded-lg border p-3"
        >
          {shipments.map((shipment) => (
            <option
              key={shipment._id}
              value={shipment._id}
            >
              {shipment.shipmentId}
            </option>
          ))}
        </select>

        <p className="mt-2 text-sm text-gray-500">
          Hold Ctrl (Windows) or Cmd (Mac) to select multiple shipments.
        </p>
      </div>

      {/* Vehicle */}
      <div>
        <label className="mb-2 block font-medium">Vehicle</label>

        <select
          {...register("vehicle")}
          className="w-full rounded-lg border p-3"
        >
          <option value="">Select Vehicle</option>

          {vehicles.map((vehicle) => (
            <option key={vehicle._id} value={vehicle._id}>
              {vehicle.vehicleNumber}
            </option>
          ))}
        </select>
      </div>

      {/* Driver */}
      <div>
        <label className="mb-2 block font-medium">Driver</label>

        <select
          {...register("driver")}
          className="w-full rounded-lg border p-3"
        >
          <option value="">Select Driver</option>

          {drivers.map((driver) => (
            <option key={driver._id} value={driver._id}>
              {driver.name}
            </option>
          ))}
        </select>
      </div>

      {/* Start Location */}
      <div>
        <label className="mb-2 block font-medium">
          Start Location
        </label>

        <input
          {...register("startLocation")}
          className="w-full rounded-lg border p-3"
        />
      </div>

      {/* Destination */}
      <div>
        <label className="mb-2 block font-medium">
          Destination
        </label>

        <input
          {...register("destination")}
          className="w-full rounded-lg border p-3"
        />
      </div>

      {/* Start Date */}
      <div>
        <label className="mb-2 block font-medium">
          Start Date
        </label>

        <input
          type="date"
          {...register("startDate")}
          className="w-full rounded-lg border p-3"
        />
      </div>

      {/* End Date */}
      <div>
        <label className="mb-2 block font-medium">
          End Date
        </label>

        <input
          type="date"
          {...register("endDate")}
          className="w-full rounded-lg border p-3"
        />
      </div>

      {/* Distance */}
      <div>
        <label className="mb-2 block font-medium">
          Distance (KM)
        </label>

        <input
          type="number"
          {...register("distance")}
          className="w-full rounded-lg border p-3"
        />
      </div>

      {/* Fuel Used */}
      <div>
        <label className="mb-2 block font-medium">
          Fuel Used (Liters)
        </label>

        <input
          type="number"
          {...register("fuelUsed")}
          className="w-full rounded-lg border p-3"
        />
      </div>

      {/* Status */}
      <div>
        <label className="mb-2 block font-medium">
          Status
        </label>

        <select
          {...register("status")}
          className="w-full rounded-lg border p-3"
        >
          <option>Scheduled</option>
          <option>In Progress</option>
          <option>Completed</option>
          <option>Cancelled</option>
        </select>
      </div>

      <button
        className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
      >
        {buttonText}
      </button>
    </form>
  );
}