import api from "./axios";

export const getDashboardReport = async (range = "30days") => {
  const {data} = await api.get(`/reports/dashboard?range=${range}`);
  return data;
};

export const getMonthlyTripReport = async () => {
  const response = await api.get("/reports/monthly-trips");
  return response.data;
};

export const getRecentTrips = async () => {
  const response = await api.get("/reports/recent-trips");
  return response.data;
};

export const getRecentShipments = async () => {
  const response = await api.get("/reports/recent-shipments");
  return response.data;
};