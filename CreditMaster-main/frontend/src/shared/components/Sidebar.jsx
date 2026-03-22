import { useNavigate, NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ROLES } from '../constants/roles';
import {
  LayoutDashboard, Users, FileText, CreditCard, Briefcase,
  ArrowRightLeft, Receipt, Settings, LogOut, ChevronDown,
  ShieldCheck, UserCheck, DollarSign, Activity
} from 'lucide-react';

const moduleLinks = [
  {
    section: 'Customer Dashboard',
    roles: [ROLES.CUSTOMER, ROLES.ADMIN],
    links: [
      { to: '/dashboard/customer', label: 'Dashboard Home', icon: <LayoutDashboard size={18}/>, roles: [ROLES.CUSTOMER] },
      { to: '/customers/new',       label: 'Customer Create', icon: <UserCheck size={18}/>,       roles: [ROLES.CUSTOMER] },
      { to: '/applications/new',    label: 'Application Create', icon: <FileText size={18}/>,    roles: [ROLES.CUSTOMER] },
      { to: '/applications',        label: 'Application List', icon: <FileText size={18}/>,     roles: [ROLES.CUSTOMER] },
    ]
  },
  {
    section: 'Underwriter Dashboard',
    roles: [ROLES.UNDERWRITER, ROLES.ADMIN],
    links: [
      { to: '/dashboard/underwriter', label: 'Dashboard Home', icon: <LayoutDashboard size={18}/>, roles: [ROLES.UNDERWRITER] },
      { to: '/underwriting',          label: 'Application List', icon: <FileText size={18}/>,      roles: [ROLES.UNDERWRITER] },
      { to: '/underwriting/scores',   label: 'Credit Scores',    icon: <ShieldCheck size={18}/>,   roles: [ROLES.UNDERWRITER] },
      { to: '/underwriting/decision', label: 'Decisions',        icon: <UserCheck size={18}/>,     roles: [ROLES.UNDERWRITER] },
    ]
  },
  {
    section: 'Operations Dashboard',
    roles: [ROLES.OPERATIONS_ANALYST, ROLES.ADMIN],
    links: [
      { to: '/dashboard/operations', label: 'Dashboard Home', icon: <LayoutDashboard size={18}/>, roles: [ROLES.OPERATIONS_ANALYST] },
      { to: '/cards',                label: 'Card Issuance',   icon: <CreditCard size={18}/>,     roles: [ROLES.OPERATIONS_ANALYST] },
      { to: '/accounts',             label: 'Card Accounts',   icon: <Settings size={18}/>,       roles: [ROLES.OPERATIONS_ANALYST] },
      { to: '/transactions',         label: 'Transactions',    icon: <ArrowRightLeft size={18}/>, roles: [ROLES.OPERATIONS_ANALYST] },
      { to: '/statements',           label: 'Statements List', icon: <Receipt size={18}/>,        roles: [ROLES.OPERATIONS_ANALYST] },
      { to: '/payments',             label: 'Payments List',   icon: <DollarSign size={18}/>,     roles: [ROLES.OPERATIONS_ANALYST] },
    ]
  },
  {
    section: 'Admin Dashboard',
    roles: [ROLES.ADMIN],
    links: [
      { to: '/dashboard/admin', label: 'Dashboard Home', icon: <LayoutDashboard size={18}/>, roles: [ROLES.ADMIN] },
      { to: '/users',           label: 'User Management', icon: <Users size={18}/>,         roles: [ROLES.ADMIN] },
      { to: '/products',        label: 'Card Products',   icon: <CreditCard size={18}/>,    roles: [ROLES.ADMIN] },
      { to: '/fees',            label: 'Fee Config',      icon: <Briefcase size={18}/>,     roles: [ROLES.ADMIN] },
      { to: '/audit-logs',      label: 'Audit Logs',      icon: <Activity size={18}/>,      roles: [ROLES.ADMIN] },
    ]
  },
];

export default function Sidebar() {
  const { role, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    logout();
    navigate('/login');
  };

  const canAccess = (linkRoles) => {
    if (!linkRoles) return true;
    return linkRoles.includes(role);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="sidebar-brand-logo">💳</div>
        <div className="sidebar-brand-text">
          <span className="sidebar-brand-name">CardMaster</span>
          <span className="sidebar-brand-sub">Credit System</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {moduleLinks.map((section) => {
          if (section.roles && !section.roles.includes(role)) return null;
          const visibleLinks = section.links.filter(l => canAccess(l.roles));
          if (visibleLinks.length === 0) return null;
          return (
            <div key={section.section}>
              <div className="sidebar-section-title">{section.section}</div>
              {visibleLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </NavLink>
              ))}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
