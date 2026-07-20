import { Search, LogOut } from "lucide-react";
import useAuth from "@/features/auth/hooks/useAuth";
import { Link,useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import NotificationBell from "@/features/notifications/components/NotificationBell";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out successfully");
      navigate("/");
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6 shadow-sm">
      {/* Left Side */}
      <h2 className="text-2xl font-semibold text-gray-800">
        Dashboard
      </h2>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        {/* Search */}
        <button className="rounded-full p-2 transition hover:bg-gray-100">
          <Search size={20} className="text-gray-600" />
        </button>

        {/* Notification */}
        <NotificationBell/>

        {/* User Info */}
        <Link
  to="/profile"
  className="flex items-center gap-3 rounded-lg border px-4 py-2 transition hover:bg-gray-100"
>
  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
    {user?.name?.charAt(0).toUpperCase()}
  </div>

  <div className="hidden md:block">
    <p className="font-semibold text-gray-800">
      {user?.name || "Guest"}
    </p>

    <p className="text-sm text-gray-500">
      {user?.role || "User"}
    </p>
  </div>
</Link>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </header>
  );
}