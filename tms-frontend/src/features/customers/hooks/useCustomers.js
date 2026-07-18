import { useQuery } from "@tanstack/react-query";
import { getCustomers } from "@/api/customerApi";

export const useCustomers = () => {
  return useQuery({
    queryKey: ["customers"],
    queryFn: getCustomers,
  });
};