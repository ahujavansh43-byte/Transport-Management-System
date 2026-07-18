import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import VehicleForm from "../components/VehicleForm";
import { createVehicle } from "@/api/vehicleApi";

export default function AddVehicle() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createVehicle,

    onSuccess: () => {
      toast.success("Vehicle added successfully");

      queryClient.invalidateQueries({
        queryKey: ["vehicles"],
      });

      navigate("/vehicles");
    },

    onError: () => {
      toast.error("Failed to add vehicle");
    },
  });

  const onSubmit = (data) => {
    mutation.mutate({
      ...data,
      capacity: Number(data.capacity),
    });
  };

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-8 text-3xl font-bold">
        Add New Vehicle
      </h1>

      <VehicleForm onSubmit={onSubmit} />
    </div>
  );
}