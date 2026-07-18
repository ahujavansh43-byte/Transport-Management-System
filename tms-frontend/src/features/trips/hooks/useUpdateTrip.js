import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTrip } from "@/api/tripApi";
import toast from "react-hot-toast";

export const useUpdateTrip = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTrip,

    onSuccess: () => {
      toast.success("Trip updated successfully");

      queryClient.invalidateQueries({
        queryKey: ["trips"],
      });
    },

    onError: () => {
      toast.error("Failed to update trip");
    },
  });
};