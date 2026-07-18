import { useNavigate } from "react-router-dom";

import CustomerForm from "../components/CustomerForm";
import { useAddCustomer } from "../hooks/useAddCustomer";

export default function AddCustomer() {
  const navigate = useNavigate();

  const { mutate: addCustomer } = useAddCustomer();

  const onSubmit = (customerData) => {
    addCustomer(customerData, {
      onSuccess: () => {
        navigate("/customers");
      },
    });
  };

  return (
    <div className="max-w-3xl">
      <h1 className="mb-6 text-3xl font-bold">
        Add Customer
      </h1>

      <CustomerForm
        onSubmit={onSubmit}
        buttonText="Add Customer"
      />
    </div>
  );
}