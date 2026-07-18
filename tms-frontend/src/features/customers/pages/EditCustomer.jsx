import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import CustomerForm from "../components/CustomerForm";
import { useUpdateCustomer } from "../hooks/useUpdateCustomer";
import { useCustomers } from "../hooks/useCustomers";
import LoadingSpinner from "@/Components/common/LoadingSpinner";

export default function EditCustomer() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useCustomers();
  const { mutate: updateCustomer } = useUpdateCustomer();

  if (isLoading) return <LoadingSpinner />;

  const customer = data.data.find((c) => c._id === id);

  const onSubmit = (customerData) => {
    updateCustomer(
      {
        id,
        customerData,
      },
      {
        onSuccess: () => {
          navigate("/customers");
        },
      }
    );
  };

  return (
    <div className="max-w-3xl">
      <h1 className="mb-6 text-3xl font-bold">
        Edit Customer
      </h1>

      <CustomerForm
        defaultValues={customer}
        onSubmit={onSubmit}
        buttonText="Update Customer"
      />
    </div>
  );
}