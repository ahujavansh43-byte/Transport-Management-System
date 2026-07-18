import api from "@/api/axios";

export const loginUser = (data) =>
  api.post("/auth/login", data);

export const registerUser = (data) =>
  api.post("/auth/register", data);

export const logoutUser = () =>
  api.post("/auth/logout");

export const getCurrentUser = () =>
  api.get("/auth/me");

export const updateProfile = (data) =>
  api.put("/auth/profile", data);

export const changePassword = (data)=>
  api.put("/auth/change-password",data);