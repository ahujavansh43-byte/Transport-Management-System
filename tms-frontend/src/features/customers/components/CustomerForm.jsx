import { useForm } from "react-hook-form";

export default function CustomerForm({
  onSubmit,
  defaultValues = {},
  buttonText = "Save Customer",
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
          Customer Name
        </label>
        <input
          {...register("customerName")}
          className="w-full rounded-lg border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Company Name
        </label>
        <input
          {...register("companyName")}
          className="w-full rounded-lg border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Email
        </label>
        <input
          type="email"
          {...register("email")}
          className="w-full rounded-lg border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Phone
        </label>
        <input
          {...register("phone")}
          className="w-full rounded-lg border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Address
        </label>
        <textarea
          {...register("address")}
          className="w-full rounded-lg border p-3"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-2 block font-medium">
            City
          </label>
          <input
            {...register("city")}
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            State
          </label>
          <input
            {...register("state")}
            className="w-full rounded-lg border p-3"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Status
        </label>

        <select
          {...register("status")}
          className="w-full rounded-lg border p-3"
        >
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>

      <button className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
        {buttonText}
      </button>
    </form>
  );
}