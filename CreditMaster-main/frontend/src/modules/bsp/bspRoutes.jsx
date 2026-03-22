import { Route } from 'react-router-dom';
import ProtectedRoute from '../../shared/components/ProtectedRoute';
import { ROLES } from '../../shared/constants/roles';
import StatementListPage from './pages/StatementListPage';
import PaymentListPage from './pages/PaymentListPage';

export const bspRoutes = [
  <Route key="statements" path="/statements" element={
    <ProtectedRoute allowedRoles={[ROLES.ADMIN, ROLES.OPERATIONS_ANALYST, ROLES.CUSTOMER]}>
      <StatementListPage />
    </ProtectedRoute>
  }/>,
  <Route key="payments" path="/payments" element={
    <ProtectedRoute allowedRoles={[ROLES.ADMIN, ROLES.OPERATIONS_ANALYST, ROLES.CUSTOMER]}>
      <PaymentListPage />
    </ProtectedRoute>
  }/>,
];
