import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteVehicle } from "@/api/vehicleApi";
import toast from "react-hot-toast";

export const useDeleteVehicle = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteVehicle,

    onSuccess: () => {
      toast.success("Vehicle deleted successfully");

      queryClient.invalidateQueries({
        queryKey: ["vehicles"],
      });
    },

    onError: () => {
      toast.error("Failed to delete vehicle");
    },
  });
};