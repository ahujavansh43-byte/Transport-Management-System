import api from "./axios";

// Get all drivers
export const getDrivers = async () => {
  const response = await api.get("/drivers");
  return response.data;
};



// Get one driver
export const getDriverById = async (id) => {
  const response = await api.get(`/drivers/${id}`);
  return response.data;
};

// Update driver
export const updateDriver = async ({ id, driverData }) => {
  const response = await api.put(`/drivers/${id}`, driverData);
  return response.data;
};

// Delete driver
export const deleteDriver = async (id) => {
  const response = await api.delete(`/drivers/${id}`);
  return response.data;
};

// ADD driver
export const addDriver = async (driverData) => {
  const response = await api.post("/drivers", driverData);
  return response.data;
};

// get Available drivers

export const getAvailableDrivers = async () => {
  const response = await api.get("/drivers/available");
  return response.data;
};