import { useState, useEffect } from "react";
import { useUpdateSettings } from "../hooks/useSettings";
import toast from "react-hot-toast";

export default function CompanySettings({ settings }) {
  const [form, setForm] = useState(settings);

  const updateMutation = useUpdateSettings();

  useEffect(() => {
    setForm(settings);
  }, [settings]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateMutation.mutateAsync(form);

      toast.success("Settings Updated");

    } catch {
      toast.error("Update Failed");
    }
  };

  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <h2 className="mb-6 text-xl font-bold">
        Company Information
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          className="w-full rounded border p-3"
          name="companyName"
          value={form.companyName || ""}
          onChange={handleChange}
          placeholder="Company Name"
        />

        <input
          className="w-full rounded border p-3"
          name="companyEmail"
          value={form.companyEmail || ""}
          onChange={handleChange}
          placeholder="Company Email"
        />

        <input
          className="w-full rounded border p-3"
          name="phone"
          value={form.phone || ""}
          onChange={handleChange}
          placeholder="Phone"
        />

        <input
          className="w-full rounded border p-3"
          name="address"
          value={form.address || ""}
          onChange={handleChange}
          placeholder="Address"
        />

        <input
          className="w-full rounded border p-3"
          name="gstNumber"
          value={form.gstNumber || ""}
          onChange={handleChange}
          placeholder="GST Number"
        />

        <button className="rounded bg-blue-600 px-6 py-3 text-white">
          Save Changes
        </button>
      </form>
    </div>
  );
}