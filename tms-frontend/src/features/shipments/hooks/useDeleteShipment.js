import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteShipment } from "@/api/shipmentApi";
import toast from "react-hot-toast";

export const useDeleteShipment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteShipment,

    onSuccess: () => {
      toast.success("Shipment deleted successfully");

      queryClient.invalidateQueries({
        queryKey: ["shipments"],
      });
    },

    onError: () => {
      toast.error("Failed to delete shipment");
    },
  });
};