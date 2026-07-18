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

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route element={<ProtectedRoute>
        <DashboardLayout/>
        </ProtectedRoute>
        }>


      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/vehicles" element={<Vehicles/>}/>
      <Route path="/vehicles/add" element={<AddVehicle/>}/>
      <Route path="/vehicles/:id" element={<VehicleDetails/>}/>
      <Route path="/vehicles/:id/edit" element={<EditVehicle/>}/>

      <Route path="/drivers" element={<Drivers />} />
      <Route path ="/drivers/add" element={<AddDriver />}/>
      <Route path ="/drivers/:id" element={<DriverDetails />}/>
      <Route path ="/drivers/:id/edit" element={<EditDriver />}/>

      <Route path="/shipments" element={<Shipments/>}/>
      <Route path="/shipments/add" element={<AddShipment />}/>
      <Route path="/shipments/:id" element={<ShipmentDetails/>}/>
      <Route path="shipments/:id/edit" element={<EditShipment/>}/>

      <Route path="/trips" element={<Trips/>}/>
      <Route path="/trips/add" element={<AddTrip/>}/>
      <Route path="/trips/:id" element={<TripDetails/>}/>
      <Route path="/trips/:id/edit" element={<EditTrip/>}/>

      <Route path="customers" element={<Customers/>}/>
      <Route path="customers/add" element={<AddCustomer/>}/>
      <Route path="customers/:id" element={<CustomerDetails/>}/>
      <Route path="customers/:id/edit" element={<EditCustomer/>}/>

      <Route path="/reports" element={<Reports/>}/>
      <Route path="/profile" element={<Profile/>}/>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}