import api from "./axios";

// Get all vehicles
export const getVehicles = async () => {
  const response = await api.get("/vehicles");
  return response.data;
};

// Create vehicle
export const createVehicle = async (vehicleData) => {
  const response = await api.post("/vehicles", vehicleData);
  return response.data;
};

// Get vehicle by ID
export const getVehicleById = async (id) => {
  const response = await api.get(`/vehicles/${id}`);
  return response.data;
};

// Update vehicle
export const updateVehicle = async (id, vehicleData) => {
  const response = await api.put(`/vehicles/${id}`, vehicleData);
  return response.data;
};

// Delete vehicle
export const deleteVehicle = async (id) => {
  const response = await api.delete(`/vehicles/${id}`);
  return response.data;
};

//get Available Vehicles
export const getAvailableVehicles = async () => {
  const response = await api.get("/vehicles/available");
  return response.data;
};