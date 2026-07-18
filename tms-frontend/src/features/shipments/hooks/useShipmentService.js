import { useQuery } from "@tanstack/react-query";
import {
  getShipments,
  getShipmentById,
} from "@/api/shipmentApi";

export const useShipments = () => {
  return useQuery({
    queryKey: ["shipments"],
    queryFn: getShipments,
  });
};

export const useShipment = (id) => {
  return useQuery({
    queryKey: ["shipment", id],
    queryFn: () => getShipmentById(id),
    enabled: !!id,
  });
};