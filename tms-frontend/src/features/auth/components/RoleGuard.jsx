import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

export default function RoleGuard({
  children,
  roles,
}) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  if (!roles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}