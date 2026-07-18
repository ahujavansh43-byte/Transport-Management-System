import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteDriver } from "@/api/driverApi";
import toast from "react-hot-toast";

export const useDeleteDriver = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteDriver,

    onSuccess: () => {
      toast.success("Driver deleted successfully");

      queryClient.invalidateQueries({
        queryKey: ["drivers"],
      });

      queryClient.invalidateQueries({
        queryKey: ["dashboard"],
      });
    },

    onError: () => {
      toast.error("Failed to delete driver");
    },
  });
};