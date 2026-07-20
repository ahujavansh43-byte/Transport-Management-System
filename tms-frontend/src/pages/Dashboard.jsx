import {
  Truck,
  Users,
  Package,
  DollarSign,
  Route,
  UsersRound,
} from "lucide-react";

import { useDashboardStats } from "@/features/dashboard/hooks/useDashboardStats";
import LoadingSpinner from "@/Components/common/LoadingSpinner";

import StatsCard from "@/Components/dashboard/StatsCard";
import RevenueChart from "@/Components/dashboard/RevenueChart";
import RecentShipments from "@/Components/dashboard/RecentShipments";

import VehicleStatusChart from "@/Components/dashboard/VehicleStatusChart";
import DriverAvailabilityChart from "@/Components/dashboard/DriverAvailabilityChart";
import ShipmentStatusChart from "@/Components/dashboard/ShipmentStatusChart";
import RecentTrips from "@/Components/dashboard/RecentTrips";


export default function Dashboard() {

  const {  data,isLoading, isError } = useDashboardStats();

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <h2 className="text-center mt-10">Failed to load dashboard.</h2>
  }

  const stats = data.data;
  return (
    <>
      <h1 className="mb-8 text-4xl font-bold">
        Welcome Back 👋
      </h1>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
        <StatsCard
          title="Vehicles"
          value={stats.vehicles}
          icon={Truck}
          color="bg-blue-600"
        />

        <StatsCard
          title="Drivers"
          value={stats.drivers}
          icon={Users}
          color="bg-green-600"
        />

        <StatsCard
          title="Shipments"
          value={stats.shipments}
          icon={Package}
          color="bg-orange-600"
        />

        <StatsCard
          title="Revenue"
          value={`₹${stats.revenue}`}
          icon={DollarSign}
          color="bg-purple-600"
        />

        <StatsCard
          title="Trips"
          value={stats.trips}
          icon={Route}
          color="bg-cyan-600"
        />
        <StatsCard
          title="Customers"
          value={stats.customers}
          icon={UsersRound}
          color="bg-pink-600"
        />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <RevenueChart data={stats}/>

        <VehicleStatusChart data={stats}/>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <DriverAvailabilityChart data={stats}/>
        <ShipmentStatusChart data={stats}/>
      </div>
      <div className="mt-8" grid gap-6 lg:grid-cols-2>
        <RecentTrips data={stats}/>
        <RecentShipments/>
      </div>
    </>
  );
}
