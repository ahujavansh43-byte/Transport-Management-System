import { useQuery } from "@tanstack/react-query";
import { getDashboardReport , getMonthlyTripReport, getRecentTrips, getRecentShipments} from "@/api/reportApi";

export const useDashboardReport = (range) => {
  return useQuery({
    queryKey: ["dashboard-report",range],
    queryFn: ()=> getDashboardReport(range),
  });
};

export const useMonthlyTripReport = () => {
  return useQuery({
    queryKey: ["monthly-trip-report"],
    queryFn: getMonthlyTripReport,
  });
};

export const useRecentTrips = () => {
  return useQuery({
    queryKey: ["recent-trips"],
    queryFn: getRecentTrips,
  });
};

export const useRecentShipments = () => {
  return useQuery({
    queryKey: ["recent-shipments"],
    queryFn: getRecentShipments,
  });
};