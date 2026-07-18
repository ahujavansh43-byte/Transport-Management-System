import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTrip } from "@/api/tripApi";
import toast from "react-hot-toast";

export const useDeleteTrip = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTrip,

    onSuccess: () => {
      toast.success("Trip deleted successfully");

      queryClient.invalidateQueries({
        queryKey: ["trips"],
      });
    },

    onError: () => {
      toast.error("Failed to delete trip");
    },
  });
};