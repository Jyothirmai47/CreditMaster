import { Route } from 'react-router-dom';
import ProtectedRoute from '../../shared/components/ProtectedRoute';
import { ROLES } from '../../shared/constants/roles';
import CustomerListPage from './pages/CustomerListPage';
import CustomerFormPage from './pages/CustomerFormPage';
import ApplicationListPage from './pages/ApplicationListPage';
import ApplicationFormPage from './pages/ApplicationFormPage';
import CustomerDashboard from './pages/CustomerDashboard';
import BranchDashboard from './pages/BranchDashboard';
import OperationsDashboard from './pages/OperationsDashboard';
import MyCardsPage from './pages/MyCardsPage';

export const paaRoutes = [
  <Route key="customer-list" path="/customers" element={
    <ProtectedRoute allowedRoles={[ROLES.ADMIN, ROLES.OPERATIONS_ANALYST]}>
      <CustomerListPage />
    </ProtectedRoute>
  }/>,
  <Route key="customer-new" path="/customers/new" element={
    <ProtectedRoute allowedRoles={[ROLES.ADMIN, ROLES.OPERATIONS_ANALYST, ROLES.CUSTOMER]}>
      <CustomerFormPage />
    </ProtectedRoute>
  }/>,
  <Route key="customer-edit" path="/customers/:id/edit" element={
    <ProtectedRoute allowedRoles={[ROLES.ADMIN, ROLES.OPERATIONS_ANALYST, ROLES.CUSTOMER]}>
      <CustomerFormPage />
    </ProtectedRoute>
  }/>,
  <Route key="app-list" path="/applications" element={
    <ProtectedRoute allowedRoles={[ROLES.ADMIN, ROLES.OPERATIONS_ANALYST, ROLES.CUSTOMER]}>
      <ApplicationListPage />
    </ProtectedRoute>
  }/>,
  <Route key="app-new" path="/applications/new" element={
    <ProtectedRoute allowedRoles={[ROLES.ADMIN, ROLES.OPERATIONS_ANALYST, ROLES.CUSTOMER]}>
      <ApplicationFormPage />
    </ProtectedRoute>
  }/>,
  <Route key="app-edit" path="/applications/:id/edit" element={
    <ProtectedRoute allowedRoles={[ROLES.ADMIN, ROLES.OPERATIONS_ANALYST]}>
      <ApplicationFormPage />
    </ProtectedRoute>
  }/>,
];

export const paaDashboardRoutes = [
  <Route key="customer-dash" path="/dashboard/customer" element={
    <ProtectedRoute allowedRoles={[ROLES.CUSTOMER]}>
      <CustomerDashboard />
    </ProtectedRoute>
  }/>,
  <Route key="ops-dash" path="/dashboard/operations" element={
    <ProtectedRoute allowedRoles={[ROLES.OPERATIONS_ANALYST]}>
      <OperationsDashboard />
    </ProtectedRoute>
  }/>,
  <Route key="my-cards" path="/my-cards" element={
    <ProtectedRoute allowedRoles={[ROLES.CUSTOMER]}>
      <MyCardsPage />
    </ProtectedRoute>
  }/>,
];
