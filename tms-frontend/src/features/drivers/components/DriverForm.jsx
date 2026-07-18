import { useForm } from "react-hook-form";

export default function DriverForm({
  onSubmit,
  defaultValues = {},
  buttonText = "Save Driver",
}) {
  const { register, handleSubmit } = useForm({
    defaultValues,
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-xl bg-white p-6 shadow"
    >
      <div>
        <label className="mb-2 block font-medium">
          Driver Name
        </label>

        <input
          {...register("name")}
          className="w-full rounded-lg border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
            Email
        </label>

        <input type="email"{...register("email")}
        className="w-full rounded-lg border p-3"/>
      </div>

      <div>
        <label className="mb-2 block font-medium">
          License Number
        </label>

        <input
          {...register("licenseNumber")}
          className="w-full rounded-lg border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Phone Number
        </label>

        <input
          {...register("phone")}
          className="w-full rounded-lg border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Experience (Years)
        </label>

        <input
          type="number"
          {...register("experience")}
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
          <option>Leave</option>
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