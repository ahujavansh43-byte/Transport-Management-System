import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addDriver } from "@/api/driverApi";
import toast from "react-hot-toast";

export const useAddDriver = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addDriver,

    onSuccess: () => {
      toast.success("Driver added successfully");

      queryClient.invalidateQueries({
        queryKey: ["drivers"],
      });

      queryClient.invalidateQueries({
        queryKey: ["dashboard"],
      });
    },

    onError: () => {
      toast.error("Failed to add driver");
    },
  });
};