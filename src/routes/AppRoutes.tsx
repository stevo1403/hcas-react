import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import ProtectedRoute from '../components/common/ProtectedRoute';
import MainLayout from '../components/layouts/MainLayout';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import UnauthorizedPage from '../pages/UnauthorizedPage';
import NotFoundPage from '../pages/NotFoundPage';

const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {/* Public Routes */}
      <Route
        path="/login"
        element={
          isAuthenticated ? <Navigate to="/dashboard\" replace /> : <LoginPage />
        }
      />

      {/* Protected Routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Routes>
                <Route index element={<Navigate to="/dashboard\" replace />} />
                <Route path="dashboard" element={<DashboardPage />} />
                
                {/* Placeholder routes - to be implemented */}
                <Route path="patients/*" element={<div>Patients Module - Coming Soon</div>} />
                <Route path="appointments/*" element={<div>Appointments Module - Coming Soon</div>} />
                <Route path="medical-records/*" element={<div>Medical Records Module - Coming Soon</div>} />
                <Route path="lab-results/*" element={<div>Lab Results Module - Coming Soon</div>} />
                <Route path="pharmacy/*" element={<div>Pharmacy Module - Coming Soon</div>} />
                <Route path="departments/*" element={<div>Departments Module - Coming Soon</div>} />
                <Route path="notifications/*" element={<div>Notifications Module - Coming Soon</div>} />
                <Route path="settings/*" element={<div>Settings Module - Coming Soon</div>} />
                
                {/* Admin Routes */}
                <Route
                  path="admin/*"
                  element={
                    <ProtectedRoute requiredRole={['admin']}>
                      <div>Admin Module - Coming Soon</div>
                    </ProtectedRoute>
                  }
                />
                
                <Route path="unauthorized" element={<UnauthorizedPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </MainLayout>
          </ProtectedRoute>
        }
      />

      {/* Catch all */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;