import { Routes, Route } from "react-router-dom";

import DashboardLayout from "@/layouts/DashboardLayout";

// import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import NotFound from "@/pages/NotFound";

import Vehicles from "@/features/vehicles/pages/Vehicles";
import AddVehicle from "@/features/vehicles/pages/AddVehicle";
import EditVehicle from "@/features/vehicles/pages/EditVehicle";
import VehicleDetails from "@/features/vehicles/pages/VehicleDetails";

import Drivers from "@/features/drivers/pages/Drivers";
import AddDriver from "@/features/drivers/pages/AddDriver";
import EditDriver from "@/features/drivers/pages/EditDriver"
import DriverDetails from "@/features/drivers/pages/DriverDetails"

import Shipments from "@/features/shipments/pages/Shipments";
import AddShipment from "@/features/shipments/pages/AddShipment";
import EditShipment from "@/features/shipments/pages/EditShipment";
import ShipmentDetails from "@/features/shipments/pages/ShipmentDetails";

import Trips from "@/features/trips/pages/Trips";
import AddTrip from "@/features/trips/pages/AddTrip";
import EditTrip from "@/features/trips/pages/EditTrip";
import TripDetails from "@/features/trips/pages/TripDetails";

import Customers from "@/features/customers/pages/Customers";
import AddCustomer from "@/features/customers/pages/AddCustomer";
import EditCustomer from "@/features/customers/pages/EditCustomer";
import CustomerDetails from "@/features/customers/pages/CustomerDetails";

import Reports from "@/features/reports/pages/Reports";

import Login from "@/features/auth/pages/Login";
import Profile from "@/features/auth/pages/profile";

import ProtectedRoute from "@/features/auth/components/ProtectedRoute";

import RoleGuard from "@/features/auth/components/RoleGuard";
import Unauthorized from "@/pages/Unauthorized";

import Settings from "@/features/settings/pages/Settings";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route element={<ProtectedRoute>
        <DashboardLayout/>
        </ProtectedRoute>
        }>


      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/vehicles" element={<RoleGuard roles={["Admin"]}><Vehicles/></RoleGuard>}/>
      <Route path="/vehicles/add" element={<RoleGuard roles={["Admin"]}><AddVehicle/></RoleGuard>}/>
      <Route path="/vehicles/:id" element={<RoleGuard roles={["Admin"]}><VehicleDetails/></RoleGuard>}/>
      <Route path="/vehicles/:id/edit" element={<RoleGuard roles={["Admin"]}><EditVehicle/></RoleGuard>}/>

      <Route path="/drivers" element={<RoleGuard roles={["Admin"]}><Drivers /></RoleGuard>} />
      <Route path ="/drivers/add" element={<RoleGuard roles={["Admin"]}><AddDriver /></RoleGuard>}/>
      <Route path ="/drivers/:id" element={<RoleGuard roles={["Admin"]}><DriverDetails /></RoleGuard>}/>
      <Route path ="/drivers/:id/edit" element={<RoleGuard roles={["Admin"]}><EditDriver /></RoleGuard>}/>

      <Route path="/shipments" element={<RoleGuard roles={["Admin","Dispatcher"]}><Shipments/></RoleGuard>}/>
      <Route path="/shipments/add" element={<RoleGuard roles={["Admin","Dispatcher"]}><AddShipment /></RoleGuard>}/>
      <Route path="/shipments/:id" element={<RoleGuard roles={["Admin","Dispatcher"]}><ShipmentDetails/></RoleGuard>}/>
      <Route path="shipments/:id/edit" element={<RoleGuard roles={["Admin","Dispatcher"]}><EditShipment/></RoleGuard>}/>

      <Route path="/trips" element={<RoleGuard roles={["Admin","Dispatcher"]}><Trips/></RoleGuard>}/>
      <Route path="/trips/add" element={<RoleGuard roles={["Admin","Dispatcher"]}><AddTrip/></RoleGuard>}/>
      <Route path="/trips/:id" element={<RoleGuard roles={["Admin","Dispatcher"]}><TripDetails/></RoleGuard>}/>
      <Route path="/trips/:id/edit" element={<RoleGuard roles={["Admin","Dispatcher"]}><EditTrip/></RoleGuard>}/>

      <Route path="customers" element={<RoleGuard roles={["Admin"]}><Customers/></RoleGuard>}/>
      <Route path="customers/add" element={<RoleGuard roles={["Admin"]}><AddCustomer/></RoleGuard>}/>
      <Route path="customers/:id" element={<RoleGuard roles={["Admin"]}><CustomerDetails/></RoleGuard>}/>
      <Route path="customers/:id/edit" element={<RoleGuard roles={["Admin"]}><EditCustomer/></RoleGuard>}/>

      <Route path="/reports" element={<RoleGuard roles={["Admin","Dispatcher"]}><Reports/></RoleGuard>}/>
      <Route path="/settings" element={<RoleGuard roles={["Admin","Dispatcher","Driver"]}><Settings/></RoleGuard>}/>

      <Route path="/profile" element={<Profile/>}/>
      <Route path="/unauthorized" element={<Unauthorized/>}/>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}