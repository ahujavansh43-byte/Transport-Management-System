import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import VehicleForm from "../components/VehicleForm";
import { getVehicleById } from "@/api/vehicleApi";
import { useUpdateVehicle } from "../hooks/useUpdateVehicle";

export default function EditVehicle() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["vehicle", id],
    queryFn: () => getVehicleById(id),
  });

  const mutation = useUpdateVehicle();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  const onSubmit = (formData) => {
    mutation.mutate(
      {
        id,
        vehicleData: {
          ...formData,
          capacity: Number(formData.capacity),
        },
      },
      {
        onSuccess: () => navigate("/vehicles"),
      }
    );
  };

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-8 text-3xl font-bold">
        Edit Vehicle
      </h1>

      <VehicleForm
        defaultValues={data.data}
        onSubmit={onSubmit}
      />
    </div>
  );
}