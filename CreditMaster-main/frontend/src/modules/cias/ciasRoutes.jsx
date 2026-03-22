import { Route } from 'react-router-dom';
import ProtectedRoute from '../../shared/components/ProtectedRoute';
import { ROLES } from '../../shared/constants/roles';
import CardIssuancePage from './pages/CardIssuancePage';
import CardAccountPage from './pages/CardAccountPage';

export const ciasRoutes = [
  <Route key="cards" path="/cards" element={
    <ProtectedRoute allowedRoles={[ROLES.ADMIN, ROLES.OPERATIONS_ANALYST]}>
      <CardIssuancePage />
    </ProtectedRoute>
  }/>,
  <Route key="accounts" path="/accounts" element={
    <ProtectedRoute allowedRoles={[ROLES.ADMIN, ROLES.OPERATIONS_ANALYST]}>
      <CardAccountPage />
    </ProtectedRoute>
  }/>,
];
