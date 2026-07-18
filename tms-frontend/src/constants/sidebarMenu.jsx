import {
  LayoutDashboard,
  Truck,
  Users,
  Package,
  MapPinned,
  FileBarChart2,
  Settings,
  MapIcon,
  UsersRound
} from "lucide-react";

export const sidebarMenu = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    title: "Vehicles",
    icon: Truck,
    path: "/vehicles",
  },
  {
    title: "Drivers",
    icon: Users,
    path: "/drivers",
  },
  {
    title: "Shipments",
    icon: Package,
    path: "/shipments",
  },
  {
    title: "Trips",
    icon: MapIcon,
    path: "/trips",
  },
  {
    title: "Live Tracking",
    icon: MapPinned,
    path: "/tracking",
  },
  {
    title: "Customers",
    icon: UsersRound,
    path: "/customers",
  },
  {
    title: "Reports",
    icon: FileBarChart2,
    path: "/reports",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
];