import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AppContext from "../context/AppContext";

function ProtectedRoute() {
  const context = useContext(AppContext);

  if (!context) {
    return null;
  }

  const { state } = context;

  if (!state.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;