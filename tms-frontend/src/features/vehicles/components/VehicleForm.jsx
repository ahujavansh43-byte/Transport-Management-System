import { useForm } from "react-hook-form";

export default function VehicleForm({ onSubmit,defaultValues, }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-xl bg-white p-8 shadow"
    >
      <div>
        <label className="mb-2 block font-medium">
          Vehicle Number
        </label>

        <input
          {...register("vehicleNumber", {
            required: "Vehicle number is required",
          })}
          className="w-full rounded-lg border p-3"
        />

        <p className="text-sm text-red-500">
          {errors.vehicleNumber?.message}
        </p>
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Vehicle Type
        </label>

        <select
          {...register("type")}
          className="w-full rounded-lg border p-3"
        >
          <option>Truck</option>
          <option>Container</option>
          <option>Trailer</option>
          <option>Mini Truck</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Capacity
        </label>

        <input
          type="number"
          {...register("capacity")}
          className="w-full rounded-lg border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Driver Name
        </label>

        <input
          {...register("driverName")}
          className="w-full rounded-lg border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Status
        </label>

        <select
          {...register("status")}
          className="w-full rounded-lg border p-3"
        >
          <option>Available</option>
          <option>On Trip</option>
          <option>Maintenance</option>
        </select>
      </div>

      <button
        className="w-full rounded-lg bg-blue-600 py-3 font-medium text-white hover:bg-blue-700"
      >
        Save Vehicle
      </button>
    </form>
  );
}