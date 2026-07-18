import { useQuery } from "@tanstack/react-query";
import { getDrivers, getDriverById } from "@/api/driverApi";
import { getAvailableDrivers } from "@/api/driverApi";

export const useDrivers = () => {
  return useQuery({
    queryKey: ["drivers"],
    queryFn: getDrivers,
  });
};

export const useDriver = (id) => {
  return useQuery({
    queryKey: ["driver", id],
    queryFn: () => getDriverById(id),
    enabled: !!id,
  });
};

export const useAvailableDrivers = () => {
  return useQuery({
    queryKey: ["availableDrivers"],
    queryFn: getAvailableDrivers,
  });
};



