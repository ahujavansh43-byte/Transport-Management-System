import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createShipment } from "@/api/shipmentApi";
import toast from "react-hot-toast";

export const useAddShipment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createShipment,

    onSuccess: () => {
      toast.success("Shipment added successfully");

      queryClient.invalidateQueries({
        queryKey: ["shipments"],
      });
    },

    onError: () => {
      toast.error("Failed to add shipment");
    },
  });
};