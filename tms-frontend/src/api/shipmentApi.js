import api from "./axios";

// Get all shipments
export const getShipments = async () => {
  const response = await api.get("/shipments");
  return response.data;
};

// Get shipment by id
export const getShipmentById = async (id) => {
  const response = await api.get(`/shipments/${id}`);
  return response.data;
};

// Create shipment
export const createShipment = async (shipmentData) => {
  const response = await api.post("/shipments", shipmentData);
  return response.data;
};

// Update shipment
export const updateShipment = async ({ id, shipmentData }) => {
  const response = await api.put(`/shipments/${id}`, shipmentData);
  return response.data;
};

// Delete shipment
export const deleteShipment = async (id) => {
  const response = await api.delete(`/shipments/${id}`);
  return response.data;
};