/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Layout
import MainLayout, { Role } from './layouts/MainLayout';

// Pages
import Login from './pages/Login';
import { DashboardLoket, DashboardPerawat, DashboardDokter, DashboardApoteker, DashboardKepala, DashboardAdmin } from './pages/Dashboards';
import { PatientManagement, PatientRegistration, QueueManagement } from './pages/LoketPages';
import { InitialAssessment, HealthCheckup } from './pages/PerawatPages';
import { DoctorExamination } from './pages/DokterPages';
import { MedicineDispensing, MedicineInventory } from './pages/ObatPages';
import { UserManagement, AuditLog, Reports } from './pages/AdminAndReportPages';

// A simple wrapper to apply layout and role
function ProtectedRoute({ children, role }: { children: React.ReactNode, role: Role }) {
  // In a real app, you'd verify auth and role here.
  return <MainLayout role={role}>{children}</MainLayout>;
}

export default function App() {
  const currentRole = (localStorage.getItem('prototype_role') as Role) || 'loket';

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        
        {/* Loket Routes */}
        <Route path="/loket" element={<ProtectedRoute role={currentRole}><DashboardLoket /></ProtectedRoute>} />
        <Route path="/patients" element={<ProtectedRoute role={currentRole}><PatientManagement /></ProtectedRoute>} />
        <Route path="/registration" element={<ProtectedRoute role={currentRole}><PatientRegistration /></ProtectedRoute>} />
        <Route path="/queue" element={<ProtectedRoute role={currentRole}><QueueManagement /></ProtectedRoute>} />

        {/* Perawat Routes */}
        <Route path="/perawat" element={<ProtectedRoute role={currentRole}><DashboardPerawat /></ProtectedRoute>} />
        <Route path="/assessment" element={<ProtectedRoute role={currentRole}><InitialAssessment /></ProtectedRoute>} />
        <Route path="/checkup" element={<ProtectedRoute role={currentRole}><HealthCheckup /></ProtectedRoute>} />

        {/* Dokter Routes */}
        <Route path="/dokter" element={<ProtectedRoute role={currentRole}><DashboardDokter /></ProtectedRoute>} />
        <Route path="/examination" element={<ProtectedRoute role={currentRole}><DoctorExamination /></ProtectedRoute>} />
        {/* In DokterPages, treatment and referral are tabs inside DoctorExamination for simplicity, 
            but adding dummy routes to satisfy the menu links */}
        <Route path="/treatment" element={<ProtectedRoute role={currentRole}><DoctorExamination /></ProtectedRoute>} />
        <Route path="/referral" element={<ProtectedRoute role={currentRole}><DoctorExamination /></ProtectedRoute>} />

        {/* Obat Routes */}
        <Route path="/obat" element={<ProtectedRoute role={currentRole}><DashboardApoteker /></ProtectedRoute>} />
        <Route path="/dispensing" element={<ProtectedRoute role={currentRole}><MedicineDispensing /></ProtectedRoute>} />
        <Route path="/inventory" element={<ProtectedRoute role={currentRole}><MedicineInventory /></ProtectedRoute>} />

        {/* Kepala Routes */}
        <Route path="/kepala" element={<ProtectedRoute role={currentRole}><DashboardKepala /></ProtectedRoute>} />
        <Route path="/reports" element={<ProtectedRoute role={currentRole}><Reports /></ProtectedRoute>} />

        {/* Admin Routes */}
        <Route path="/admin" element={<ProtectedRoute role={currentRole}><DashboardAdmin /></ProtectedRoute>} />
        <Route path="/users" element={<ProtectedRoute role={currentRole}><UserManagement /></ProtectedRoute>} />
        <Route path="/audit" element={<ProtectedRoute role={currentRole}><AuditLog /></ProtectedRoute>} />
        
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
