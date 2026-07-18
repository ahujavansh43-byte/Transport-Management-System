import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTrip } from "@/api/tripApi";
import toast from "react-hot-toast";

export const useAddTrip = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTrip,

    onSuccess: () => {
      toast.success("Trip added successfully");

      queryClient.invalidateQueries({
        queryKey: ["trips"],
      });
    },

    onError: () => {
      toast.error("Failed to add trip");
    },
  });
};