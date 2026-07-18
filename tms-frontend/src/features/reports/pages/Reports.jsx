import LoadingSpinner from "@/Components/common/LoadingSpinner";
import ReportCard from "../components/ReportCard";
import { useDashboardReport } from "../hooks/useReportService";
import StatusCard from "../components/StatusCard";
import StatusPieChart from "../components/StatusPieChart";
import MonthlyTripChart from "../components/MonthlyTripChart";
import { useMonthlyTripReport } from "../hooks/useReportService";
import RecentTripsTable from "../components/RecentTripsTable";
import { useRecentTrips } from "../hooks/useReportService";
import RecentShipmentsTable from "../components/RecentShipmentsTable";
import { useRecentShipments } from "../hooks/useReportService";
import { exportDashboardPDF } from "@/utils/exportPdf";
import { exportDashboardExcel } from "@/utils/exportExcel";
import { FileSpreadsheet, FileText } from "lucide-react";
import { useState } from "react";
import DateFilter from "../components/DateFilter";
import KPICard from "../components/KPICard";


export default function Reports() {
    const [dateRange, setDateRange] =
        useState("30days");
    const { data, isLoading, isError } =
        useDashboardReport(dateRange);

    const {
        data: monthlyTripData,
        isLoading: monthlyLoading,
    } = useMonthlyTripReport();

    const {
        data: recentTrips,
        isLoading: recentTripsLoading,
    } = useRecentTrips();

    const {
        data: recentShipments,
        isLoading: recentShipmentLoading,
    } = useRecentShipments();


    if (
        isLoading ||
        monthlyLoading ||
        recentTripsLoading ||
        recentShipmentLoading
    ) {
        return <LoadingSpinner />;
    }

    if (isError) {
        return (
            <h2 className="text-center mt-10">
                Failed to load reports.
            </h2>
        );
    }

    const report = data.data;

    const vehicleChart = [
        {
            name: "Available",
            value: report.vehicles.available,
        },
        {
            name: "On Trip",
            value: report.vehicles.onTrip,
        },
        {
            name: "Maintenance",
            value: report.vehicles.maintenance,
        },
    ];

    const shipmentChart = [
        {
            name: "Pending",
            value: report.shipments.pending,
        },
        {
            name: "In Transit",
            value: report.shipments.inTransit,
        },
        {
            name: "Delivered",
            value: report.shipments.delivered,
        },
        {
            name: "Cancelled",
            value: report.shipments.cancelled,
        },
    ];

    const tripChart = [
        {
            name: "Scheduled",
            value: report.trips.scheduled,
        },
        {
            name: "In Progress",
            value: report.trips.active,
        },
        {
            name: "Completed",
            value: report.trips.completed,
        },
        {
            name: "Cancelled",
            value: report.trips.cancelled,
        },
    ];

    return (
        <div>

            <div className="mb-8 flex items-center justify-between">
                <h1 className="text-3xl font-bold text-gray-800">
                    Reports Dashboard
                </h1>

                <div className="flex  items-center gap-4">

                    <DateFilter
                        dateRange={dateRange}
                        setDateRange={setDateRange}
                    />
                    <button
                        onClick={() => exportDashboardPDF(report)}
                        className="flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-white font-medium shadow hover:bg-red-700 transition"
                    >
                        <FileText size={18} />
                        Export PDF
                    </button>

                    <button
                        onClick={() => exportDashboardExcel(report)}
                        className="flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-white font-medium shadow hover:bg-emerald-700 transition"
                    >
                        <FileSpreadsheet size={18} />
                        Export Excel
                    </button>
                </div>
            </div>

            <div className="mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                <KPICard
                    title="Active Trips"
                    value={report.trips.active}
                    subtitle="Trips currently running"
                    color="bg-blue-600"
                />

                <KPICard
                    title="Available Vehicles"
                    value={report.vehicles.available}
                    subtitle="Ready for dispatch"
                    color="bg-green-600"
                />

                <KPICard
                    title="Available Drivers"
                    value={report.drivers.available}
                    subtitle="Ready for assignment"
                    color="bg-purple-600"
                />

                <KPICard
                    title="Pending Shipments"
                    value={report.shipments.pending}
                    subtitle="Waiting for dispatch"
                    color="bg-orange-500"
                />

            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">

                <ReportCard
                    title="Vehicles"
                    value={report.vehicles.total}
                    color="bg-blue-500"
                />

                <ReportCard
                    title="Drivers"
                    value={report.drivers.total}
                    color="bg-green-500"
                />

                <ReportCard
                    title="Customers"
                    value={report.customers.total}
                    color="bg-purple-500"
                />

                <ReportCard
                    title="Shipments"
                    value={report.shipments.total}
                    color="bg-orange-500"
                />

                <ReportCard
                    title="Trips"
                    value={report.trips.total}
                    color="bg-red-500"
                />


            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">

                <StatusCard
                    title="Vehicle Status"
                    stats={{
                        Available: report.vehicles.available,
                        "On Trip": report.vehicles.onTrip,
                        Maintenance: report.vehicles.maintenance,
                    }}
                    data={vehicleChart}
                />

                <StatusCard
                    title="Shipment Status"
                    stats={{
                        Pending: report.shipments.pending,
                        "In Transit": report.shipments.inTransit,
                        Delivered: report.shipments.delivered,
                        Cancelled: report.shipments.cancelled,
                    }}
                    data={shipmentChart}
                />

                <StatusCard
                    title="Trip Status"
                    stats={{
                        Scheduled: report.trips.scheduled,
                        "In Progress": report.trips.active,
                        Completed: report.trips.completed,
                        Cancelled: report.trips.cancelled,
                    }}
                    data={tripChart}
                />
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
                <StatusPieChart
                    title="Vehicle Status"
                    data={vehicleChart}
                />

                <StatusPieChart
                    title="Shipment Status"
                    data={shipmentChart}
                />

                <StatusPieChart
                    title="Trip Status"
                    data={tripChart}
                />
            </div>

            <div className="mt-10">
                <MonthlyTripChart
                    data={monthlyTripData?.data || []}
                />
            </div>

            <div className="mt-10">
                <RecentTripsTable
                    trips={recentTrips?.data || []}
                />
            </div>

            <div className="mt-10">
                <RecentShipmentsTable
                    shipments={recentShipments?.data || []}
                />
            </div>

        </div>
    );
}