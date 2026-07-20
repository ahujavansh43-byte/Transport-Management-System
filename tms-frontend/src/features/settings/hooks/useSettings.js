import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getSettings,
  updateSettings,
  getSystemStatus,
  changePassword,
} from "@/api/settingsApi";

export const useSettings = () =>
  useQuery({
    queryKey: ["settings"],
    queryFn: async () => {
      const res = await getSettings();
      return res.data;
    },
  });

export const useSystemStatus = () =>
  useQuery({
    queryKey: ["system-status"],
    queryFn: async () => {
      const res = await getSystemStatus();
      return res.data;
    },
  });

export const useUpdateSettings = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateSettings,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
    },
  });
};

export const useChangePassword = () =>
  useMutation({
    mutationFn: changePassword,
  });