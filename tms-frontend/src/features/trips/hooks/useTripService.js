import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import {
  getTrips,
  getTripById,
  deleteTrip,
} from "@/api/tripApi";

export const useTrips = () => {
  return useQuery({
    queryKey: ["trips"],
    queryFn: getTrips,
  });
};

export const useTrip = (id) => {
  return useQuery({
    queryKey: ["trip", id],
    queryFn: () => getTripById(id),
    enabled: !!id,
  });
};

export const useDeleteTrip = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTrip,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["trips"],
      });
    },
  });
};