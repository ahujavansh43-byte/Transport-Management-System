import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateShipment } from "@/api/shipmentApi";
import toast from "react-hot-toast";

export const useUpdateShipment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateShipment,

    onSuccess: () => {
      toast.success("Shipment updated successfully");

      queryClient.invalidateQueries({
        queryKey: ["shipments"],
      });
    },

    onError: () => {
      toast.error("Failed to update shipment");
    },
  });
};