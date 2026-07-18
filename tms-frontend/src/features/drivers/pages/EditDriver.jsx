import { useNavigate, useParams } from "react-router-dom";

import LoadingSpinner from "@/Components/common/LoadingSpinner";

import DriverForm from "../components/DriverForm";
import { useDriver } from "../hooks/useDriverService";
import { useUpdateDriver } from "../hooks/useUpdateDriver";

export default function EditDriver() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useDriver(id);
  const updateDriver = useUpdateDriver();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const driver = data.data;

  const handleSubmit = (formData) => {
    updateDriver.mutate(
      {
        id,
        driverData: formData,
      },
      {
        onSuccess: () => {
          navigate("/drivers");
        },
      }
    );
  };

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">
        Edit Driver
      </h1>

      <DriverForm
        defaultValues={driver}
        onSubmit={handleSubmit}
        buttonText="Update Driver"
      />
    </div>
  );
}