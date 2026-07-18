import * as XLSX from "xlsx";

export const exportDashboardExcel = (report) => {
  const dashboard = [
    {
      Module: "Vehicles",
      Total: report.vehicles.total,
      Available: report.vehicles.available,
      OnTrip: report.vehicles.onTrip,
      Maintenance: report.vehicles.maintenance,
    },
    {
      Module: "Drivers",
      Total: report.drivers.total,
      Available: report.drivers.available,
      OnTrip: report.drivers.onTrip,
    },
    {
      Module: "Customers",
      Total: report.customers.total,
    },
    {
      Module: "Shipments",
      Total: report.shipments.total,
      Pending: report.shipments.pending,
      InTransit: report.shipments.inTransit,
      Delivered: report.shipments.delivered,
      Cancelled: report.shipments.cancelled,
    },
    {
      Module: "Trips",
      Total: report.trips.total,
      Scheduled: report.trips.scheduled,
      Active: report.trips.active,
      Completed: report.trips.completed,
      Cancelled: report.trips.cancelled,
    },
  ];

  const workbook = XLSX.utils.book_new();

  const worksheet = XLSX.utils.json_to_sheet(dashboard);

  XLSX.utils.book_append_sheet(
    workbook,
    worksheet,
    "Dashboard Report"
  );

  XLSX.writeFile(
    workbook,
    "Dashboard_Report.xlsx"
  );
};