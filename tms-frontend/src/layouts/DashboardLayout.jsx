import { Outlet } from "react-router-dom";

import Sidebar from "@/Components/layout/Sidebar";
import Navbar from "@/Components/layout/Navbar";

export default function DashboardLayout() {
  return (
    <div className="flex max-h-screen overflow-hidden">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Navbar />

        <main className="flex-1 bg-slate-100 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}