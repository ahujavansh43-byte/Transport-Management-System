import { ShieldAlert } from "lucide-react";
import { Link } from "react-router-dom";

export default function Unauthorized() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <ShieldAlert
        size={80}
        className="text-red-500"
      />

      <h1 className="mt-5 text-3xl font-bold">
        Access Denied
      </h1>

      <p className="mt-3 text-gray-500">
        You don't have permission to access this page.
      </p>

      <Link
        to="/dashboard"
        className="mt-6 rounded bg-blue-600 px-6 py-3 text-white"
      >
        Back to Dashboard
      </Link>
    </div>
  );
}