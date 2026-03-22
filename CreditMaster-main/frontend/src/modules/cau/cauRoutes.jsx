import { Route } from 'react-router-dom';
import ProtectedRoute from '../../shared/components/ProtectedRoute';
import { ROLES } from '../../shared/constants/roles';
import UnderwriterDashboard from './pages/UnderwriterDashboard';
import UnderwritingPage from './pages/UnderwritingPage';
import CreditScorePage from './pages/CreditScorePage';
import DecisionPage from './pages/DecisionPage';

export const cauRoutes = [
  <Route key="uw-dash" path="/dashboard/underwriter" element={
    <ProtectedRoute allowedRoles={[ROLES.UNDERWRITER, ROLES.ADMIN, ROLES.RISK]}>
      <UnderwriterDashboard />
    </ProtectedRoute>
  }/>,
  <Route key="underwriting" path="/underwriting" element={
    <ProtectedRoute allowedRoles={[ROLES.UNDERWRITER, ROLES.ADMIN, ROLES.RISK]}>
      <UnderwritingPage />
    </ProtectedRoute>
  }/>,
  <Route key="uw-scores" path="/underwriting/scores" element={
    <ProtectedRoute allowedRoles={[ROLES.UNDERWRITER, ROLES.ADMIN]}>
      <CreditScorePage />
    </ProtectedRoute>
  }/>,
  <Route key="uw-decision" path="/underwriting/decision" element={
    <ProtectedRoute allowedRoles={[ROLES.UNDERWRITER, ROLES.ADMIN]}>
      <DecisionPage />
    </ProtectedRoute>
  }/>,
];
