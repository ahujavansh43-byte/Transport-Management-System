import { useNavigate } from "react-router-dom";

import DriverForm from "../components/DriverForm";
import { useAddDriver } from "../hooks/useAddDriver";

export default function AddDriver() {
  const navigate = useNavigate();

  const addDriver = useAddDriver();

  const handleSubmit = (data) => {
    addDriver.mutate(data, {
      onSuccess: () => {
        navigate("/drivers");
      },
    });
  };

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">
        Add Driver
      </h1>

      <DriverForm
        onSubmit={handleSubmit}
        buttonText="Add Driver"
      />
    </div>
  );
}