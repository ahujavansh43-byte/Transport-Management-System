import { Eye, Pencil, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function CustomerTable({
  customers,
  onDelete,
}) {
  return (
    <div className="overflow-x-auto rounded-xl bg-white shadow">
      <table className="min-w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="px-5 py-3 text-left">Customer</th>
            <th className="px-5 py-3 text-left">Company</th>
            <th className="px-5 py-3 text-left">Phone</th>
            <th className="px-5 py-3 text-left">Email</th>
            <th className="px-5 py-3 text-left">City</th>
            <th className="px-5 py-3 text-left">Status</th>
            <th className="px-5 py-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((customer) => (
            <tr
              key={customer._id}
              className="border-b hover:bg-slate-50"
            >
              <td className="px-5 py-3">
                {customer.customerName}
              </td>

              <td className="px-5 py-3">
                {customer.companyName}
              </td>

              <td className="px-5 py-3">
                {customer.phone}
              </td>

              <td className="px-5 py-3">
                {customer.email}
              </td>

              <td className="px-5 py-3">
                {customer.city}
              </td>

              <td className="px-5 py-3">
                <span
                  className={`rounded-full px-3 py-1 text-sm font-medium ${
                    customer.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {customer.status}
                </span>
              </td>

              <td className="flex justify-center gap-3 px-5 py-3">
                <Link to={`/customers/${customer._id}`}>
                  <Eye
                    size={18}
                    className="cursor-pointer text-blue-600"
                  />
                </Link>

                <Link to={`/customers/${customer._id}/edit`}>
                  <Pencil
                    size={18}
                    className="cursor-pointer text-green-600"
                  />
                </Link>

                <Trash2
                  size={18}
                  onClick={() => onDelete(customer._id)}
                  className="cursor-pointer text-red-600"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}