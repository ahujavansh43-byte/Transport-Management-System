import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateDriver } from "@/api/driverApi";
import toast from "react-hot-toast";

export const useUpdateDriver = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateDriver,

    onSuccess: () => {
      toast.success("Driver updated successfully");

      queryClient.invalidateQueries({
        queryKey: ["drivers"],
      });

      queryClient.invalidateQueries({
        queryKey: ["dashboard"],
      });
    },

    onError: () => {
      toast.error("Failed to update driver");
    },
  });
};