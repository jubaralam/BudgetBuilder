import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DisplayPage from "../pages/DisplayPage";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/user"
        element={
          <ProtectedRoute>
            <DisplayPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
