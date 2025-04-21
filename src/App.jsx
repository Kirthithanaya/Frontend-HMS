import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Home from "./pages/Home";
import RoomManagement from "./pages/RoomManagement";
import ProtectedRoute from "./components/ProtectedRoute";
import Maintenance from "./pages/Maintenance";
import Billing from "./pages/Billing";
import ResidentManagement from "./pages/ResidentManagement";
import FinancialReporting from "./pages/FinancialReporting";
import UserRolesManagement from "./pages/UserRolesManagement";
import IntegrationPage from "./pages/IntegrationPage";
import NotificationsPage from "./pages/NotificationsPage";

const App = () => {
  return (
    <div>
      <div>
        <ToastContainer />
        <div>
          <BrowserRouter>
            <div>
              <Navbar />
            </div>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgotpassword" element={<ForgotPassword />} />
              <Route path="/resetpassword" element={<ResetPassword />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/room-allocation" element={<RoomManagement />} />
              <Route
                path="/maintenance-requests"
                element={
                  <ProtectedRoute allowedRoles={["Admin", "Staff", "Resident"]}>
                    <Maintenance />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/billing"
                element={
                  <ProtectedRoute>
                    <Billing />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/resident-info"
                element={
                  <ProtectedRoute>
                    <ResidentManagement />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/financial-reporting"
                element={
                  <ProtectedRoute>
                    <FinancialReporting />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/user-roles"
                element={
                  <ProtectedRoute>
                    <UserRolesManagement />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/integration"
                element={
                  <ProtectedRoute>
                    <IntegrationPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/notifications"
                element={
                  <ProtectedRoute>
                    <NotificationsPage />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

export default App;
