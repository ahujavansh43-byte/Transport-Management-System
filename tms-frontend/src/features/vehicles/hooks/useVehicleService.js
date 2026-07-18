import { useQuery } from "@tanstack/react-query";
import { getVehicles } from "@/api/vehicleApi";
import { getAvailableVehicles } from "@/api/vehicleApi";

export const useVehicles = () => {
  return useQuery({
    queryKey: ["vehicles"],
    queryFn: getVehicles,
  });
};

export const useAvailableVehicles = () => {
  return useQuery({
    queryKey: ["availableVehicles"],
    queryFn: getAvailableVehicles,
  });
};