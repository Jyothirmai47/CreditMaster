import { Route } from 'react-router-dom';
import ProtectedRoute from '../../shared/components/ProtectedRoute';
import { ROLES } from '../../shared/constants/roles';
import TransactionListPage from './pages/TransactionListPage';

export const tapRoutes = [
  <Route key="transactions" path="/transactions" element={
    <ProtectedRoute allowedRoles={[ROLES.ADMIN, ROLES.OPERATIONS_ANALYST, ROLES.CUSTOMER]}>
      <TransactionListPage />
    </ProtectedRoute>
  }/>,
];
