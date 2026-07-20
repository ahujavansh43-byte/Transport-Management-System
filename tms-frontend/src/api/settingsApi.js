import api from "@/api/axios";

export const getSettings = () =>
  api.get("/settings");

export const updateSettings = (data) =>
  api.put("/settings", data);

export const getSystemStatus = () =>
  api.get("/settings/status");

export const changePassword = (data) =>
  api.put("/auth/change-password", data);