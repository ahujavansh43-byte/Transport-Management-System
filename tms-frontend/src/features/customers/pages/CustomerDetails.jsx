import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Pencil } from "lucide-react";

import { useCustomers } from "../hooks/useCustomers";
import LoadingSpinner from "@/Components/common/LoadingSpinner";

export default function CustomerDetails() {
  const { id } = useParams();

  const { data, isLoading, isError } = useCustomers();

  if (isLoading) return <LoadingSpinner />;

  if (isError)
    return (
      <h2 className="mt-10 text-center">
        Failed to load customer.
      </h2>
    );

  const customer = data.data.find((c) => c._id === id);

  if (!customer)
    return (
      <h2 className="mt-10 text-center">
        Customer not found.
      </h2>
    );

  return (
    <div className="rounded-xl bg-white p-8 shadow">
      <div className="mb-6 flex items-center justify-between">
        <Link
          to="/customers"
          className="flex items-center gap-2 text-blue-600"
        >
          <ArrowLeft size={20} />
          Back
        </Link>

        <Link
          to={`/customers/${customer._id}/edit`}
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white"
        >
          <Pencil size={18} />
          Edit
        </Link>
      </div>

      <h1 className="mb-8 text-3xl font-bold">
        Customer Details
      </h1>

      <div className="grid gap-6 md:grid-cols-2">

        <Info label="Customer Name" value={customer.customerName} />
        <Info label="Company Name" value={customer.companyName} />
        <Info label="Email" value={customer.email} />
        <Info label="Phone" value={customer.phone} />
        <Info label="Address" value={customer.address} />
        <Info label="City" value={customer.city} />
        <Info label="State" value={customer.state} />
        <Info label="Status" value={customer.status} />

      </div>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <p className="text-gray-500">{label}</p>
      <p className="mt-1 text-lg font-semibold">{value}</p>
    </div>
  );
}