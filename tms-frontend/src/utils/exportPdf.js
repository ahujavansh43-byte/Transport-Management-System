import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const exportDashboardPDF = (report) => {
  const doc = new jsPDF();

  // Title
  doc.setFontSize(22);
  doc.text("Transport Management System", 14, 20);

  doc.setFontSize(14);
  doc.text("Dashboard Report", 14, 30);

  doc.setFontSize(10);
  doc.text(
    `Generated on: ${new Date().toLocaleString()}`,
    14,
    38
  );

  autoTable(doc, {
    startY: 48,
    head: [["Module", "Total", "Additional Information"]],
    body: [
      [
        "Vehicles",
        report.vehicles.total,
        `Available: ${report.vehicles.available}, On Trip: ${report.vehicles.onTrip}, Maintenance: ${report.vehicles.maintenance}`,
      ],
      [
        "Drivers",
        report.drivers.total,
        `Available: ${report.drivers.available}, On Trip: ${report.drivers.onTrip}`,
      ],
      [
        "Customers",
        report.customers.total,
        "-",
      ],
      [
        "Shipments",
        report.shipments.total,
        `Pending: ${report.shipments.pending}, In Transit: ${report.shipments.inTransit}, Delivered: ${report.shipments.delivered}`,
      ],
      [
        "Trips",
        report.trips.total,
        `Scheduled: ${report.trips.scheduled}, Active: ${report.trips.active}, Completed: ${report.trips.completed}`,
      ],
    ],
  });

  doc.save("Dashboard_Report.pdf");
};