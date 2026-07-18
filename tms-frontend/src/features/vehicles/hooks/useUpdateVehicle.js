import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateVehicle } from "@/api/vehicleApi";
import toast from "react-hot-toast";

export const useUpdateVehicle = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateVehicle,

    onSuccess: () => {
      toast.success("Vehicle updated successfully");

      queryClient.invalidateQueries({
        queryKey: ["vehicles"],
      });
    },

    onError: () => {
      toast.error("Failed to update vehicle");
    },
  });
};