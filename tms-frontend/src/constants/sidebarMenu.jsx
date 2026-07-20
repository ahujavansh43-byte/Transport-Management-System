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
    roles: ["Admin","Dispatcher","Driver"],
  },
  {
    title: "Vehicles",
    icon: Truck,
    path: "/vehicles",
    roles:["Admin"],
  },
  {
    title: "Drivers",
    icon: Users,
    path: "/drivers",
    roles:["Admin"],
  },
  {
    title: "Shipments",
    icon: Package,
    path: "/shipments",
    roles:["Admin","Dispatcher"],
  },
  {
    title: "Trips",
    icon: MapIcon,
    path: "/trips",
    roles:["Admin","Dispatcher"],
  },
  {
    title: "Live Tracking",
    icon: MapPinned,
    path: "/tracking",
    roles:["Admin","Dispatcher"]
  },
  {
    title: "Customers",
    icon: UsersRound,
    path: "/customers",
    roles: ["Admin"],
  },
  {
    title: "Reports",
    icon: FileBarChart2,
    path: "/reports",
    roles:["Admin","Dispatcher"],
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
    roles:["Admin","Dispatcher","Driver"],
  },
];