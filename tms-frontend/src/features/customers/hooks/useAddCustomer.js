import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCustomer } from "@/api/customerApi";
import toast from "react-hot-toast";

export const useAddCustomer = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCustomer,

    onSuccess: () => {
      toast.success("Customer added successfully");

      queryClient.invalidateQueries({
        queryKey: ["customers"],
      });
    },

    onError: () => {
      toast.error("Failed to add customer");
    },
  });
};