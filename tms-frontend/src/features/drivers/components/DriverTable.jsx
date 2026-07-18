import { Eye, Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import StatusBadge from "@/Components/common/StatusBadge";
import { useDeleteDriver } from "../hooks/useDeleteDriver";

export default function DriverTable({ drivers }) {
  const navigate = useNavigate();

  const deleteDriver = useDeleteDriver();

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this driver?"
    );

    if (confirmDelete) {
      deleteDriver.mutate(id);
    }
  };

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow">
      <table className="min-w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="px-5 py-4 text-left">Driver Name</th>
            <th className="px-5 py-4 text-left">License No.</th>
            <th className="px-5 py-4 text-left">Phone</th>
            <th className="px-5 py-4 text-left">Experience</th>
            <th className="px-5 py-4 text-left">Status</th>
            <th className="px-5 py-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {drivers.map((driver) => (
            <tr
              key={driver._id}
              className="border-b hover:bg-slate-50"
            >
              <td className="px-5 py-4 font-medium">
                {driver.name}
              </td>

              <td className="px-5 py-4">
                {driver.licenseNumber}
              </td>

              <td className="px-5 py-4">
                {driver.phone}
              </td>

              <td className="px-5 py-4">
                {driver.experience} Years
              </td>

              <td className="px-5 py-4">
                <StatusBadge status={driver.status} />
              </td>

              <td className="px-5 py-4">
                <div className="flex justify-center gap-3">
                  <button
                    onClick={() =>
                      navigate(`/drivers/${driver._id}`)
                    }
                    className="rounded p-2 text-blue-600 hover:bg-blue-100"
                  >
                    <Eye size={18} />
                  </button>

                  <button
                    onClick={() =>
                      navigate(`/drivers/${driver._id}/edit`)
                    }
                    className="rounded p-2 text-yellow-600 hover:bg-yellow-100"
                  >
                    <Pencil size={18} />
                  </button>

                  <button
                    onClick={() => handleDelete(driver._id)}
                    className="rounded p-2 text-red-600 hover:bg-red-100"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}