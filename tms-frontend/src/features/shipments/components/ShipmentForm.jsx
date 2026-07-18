import { useForm } from "react-hook-form";

import { useVehicles } from "@/features/vehicles/hooks/useVehicleService";
import { useDrivers } from "@/features/drivers/hooks/useDriverService";

import LoadingSpinner from "@/Components/common/LoadingSpinner";

import { useCustomers } from "@/features/customers/hooks/useCustomers";

export default function ShipmentForm({
  onSubmit,
  defaultValues = {},
  buttonText = "Save Shipment",
}) {
  const { register, handleSubmit } = useForm({
    defaultValues,
  });

  const { data: vehicleData, isLoading: vehicleLoading } = useVehicles();
  const { data: driverData, isLoading: driverLoading } = useDrivers();
  const { data } = useCustomers();
  if (vehicleLoading || driverLoading) {
    return <LoadingSpinner />;
  }

  const vehicles = vehicleData?.data || [];
  const drivers = driverData?.data || [];
  const customers = data?.data || [];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-xl bg-white p-6 shadow"
    >
      {/* Shipment ID */}
      <div>
        <label className="mb-2 block font-medium">
          Shipment ID
        </label>

        <input
          {...register("shipmentId")}
          className="w-full rounded-lg border p-3"
        />
      </div>

      {/* Customer */}
      <div>
        <label className="mb-2 block font-medium">
          Customer Name
        </label>

        <select
          {...register("customer")}
          className="w-full rounded-lg border p-3"
        >
          <option value="">Select Customer</option>

          {customers.map((customer) => (
            <option
              key={customer._id}
              value={customer._id}
            >
              {customer.customerName}
            </option>
          ))}
        </select>
      </div>

      {/* Pickup */}
      <div>
        <label className="mb-2 block font-medium">
          Pickup Location
        </label>

        <input
          {...register("pickupLocation")}
          className="w-full rounded-lg border p-3"
        />
      </div>

      {/* Delivery */}
      <div>
        <label className="mb-2 block font-medium">
          Delivery Location
        </label>

        <input
          {...register("deliveryLocation")}
          className="w-full rounded-lg border p-3"
        />
      </div>

      {/* Vehicle */}
      <div>
        <label className="mb-2 block font-medium">
          Vehicle
        </label>

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
        <label className="mb-2 block font-medium">
          Driver
        </label>

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

      {/* Weight */}
      <div>
        <label className="mb-2 block font-medium">
          Weight (Tons)
        </label>

        <input
          type="number"
          {...register("weight")}
          className="w-full rounded-lg border p-3"
        />
      </div>

      {/* Expected Delivery */}
      <div>
        <label className="mb-2 block font-medium">
          Expected Delivery
        </label>

        <input
          type="date"
          {...register("expectedDelivery")}
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
          <option>Pending</option>
          <option>In Transit</option>
          <option>Delivered</option>
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