import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);
  const location = useLocation();

  if (loading) {
    return <div className="text-center p-4">Loading...</div>; // or a spinner
  }

  if (!user) {
    // Save where the user tried to go, for redirect after login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;



