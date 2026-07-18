import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

import LoadingSpinner from "@/Components/common/LoadingSpinner";
import CustomerTable from "../components/CustomerTable";

import { useCustomers } from "../hooks/useCustomers";
import { useDeleteCustomer } from "../hooks/useDeleteCustomer";

export default function Customers() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const { data, isLoading, isError } = useCustomers();
  const { mutate: deleteCustomer } = useDeleteCustomer();

  if (isLoading) return <LoadingSpinner />;

  if (isError) {
    return (
      <h2 className="mt-10 text-center">
        Failed to load customers.
      </h2>
    );
  }

  const customers = data.data;

  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch =
      customer.customerName
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      customer.companyName
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "" ||
      customer.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          Customers
        </h1>

        <Link
          to="/customers/add"
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
        >
          <Plus size={18} />
          Add Customer
        </Link>
      </div>

      <div className="mb-6 flex gap-4">
        <input
          type="text"
          placeholder="Search customer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border p-3"
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="rounded-lg border p-3"
        >
          <option value="">All</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      <CustomerTable
        customers={filteredCustomers}
        onDelete={deleteCustomer}
      />
    </div>
  );
}