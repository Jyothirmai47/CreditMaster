import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, FileText, CreditCard, CheckCircle, 
  Clock, AlertCircle, ArrowRight, Activity 
} from 'lucide-react';
import { customerService } from '../services/customerService';
import { applicationService } from '../services/applicationService';

export default function OperationsDashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    totalCustomers: 0,
    pendingApps: 0,
    activeCards: 0,
    recentActivity: []
  });

  useEffect(() => {
    // Placeholder for actual API calls
    setStats({
      totalCustomers: 1250,
      pendingApps: 45,
      activeCards: 890,
      recentActivity: [
        { id: 1, type: 'Card Issued', user: 'System', time: '2 mins ago', status: 'Success' },
        { id: 2, type: 'Payment Processed', user: 'Batch', time: '15 mins ago', status: 'Success' },
        { id: 3, type: 'Risk Alert', user: 'Risk Engine', time: '1 hour ago', status: 'Warning' },
      ]
    });
  }, []);

  const statCards = [
    { label: 'Total Customers', value: stats.totalCustomers, icon: <Users size={24} />, color: 'blue' },
    { label: 'Pending Applications', value: stats.pendingApps, icon: <FileText size={24} />, color: 'orange' },
    { label: 'Active Cards', value: stats.activeCards, icon: <CreditCard size={24} />, color: 'green' },
    { label: 'System Health', value: '99.9%', icon: <Activity size={24} />, color: 'purple' },
  ];

  return (
    <div className="dashboard-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Operations Dashboard</h1>
          <p className="page-subtitle">Centralized terminal for card issuance and system operations</p>
        </div>
      </div>

      <div className="stats-grid">
        {statCards.map((stat, i) => (
          <div key={i} className={`stat-card border-${stat.color}`}>
            <div className={`stat-icon bg-${stat.color}-light text-${stat.color}`}>
              {stat.icon}
            </div>
            <div className="stat-content">
              <p className="stat-label">{stat.label}</p>
              <h3 className="stat-value">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-grid">
        <div className="card glass-card">
          <div className="card-header">
            <h3 className="card-title">Quick Actions</h3>
          </div>
          <div className="quick-actions-grid">
            <button className="action-btn" onClick={() => navigate('/cards')}>
              <CreditCard size={20} />
              <span>Issue New Cards</span>
            </button>
            <button className="action-btn" onClick={() => navigate('/accounts')}>
              <Users size={20} />
              <span>Manage Accounts</span>
            </button>
            <button className="action-btn" onClick={() => navigate('/transactions')}>
              <Activity size={20} />
              <span>View Transactions</span>
            </button>
            <button className="action-btn" onClick={() => navigate('/statements')}>
              <FileText size={20} />
              <span>Generate Billing</span>
            </button>
          </div>
        </div>

        <div className="card glass-card">
          <div className="card-header">
            <div className="flex-between w-full">
              <h3 className="card-title">Recent System Activity</h3>
              <button className="btn-text">View All <ArrowRight size={14} /></button>
            </div>
          </div>
          <div className="activity-list">
            {stats.recentActivity.map(activity => (
              <div key={activity.id} className="activity-item">
                <div className={`activity-dot ${activity.status === 'Warning' ? 'bg-orange' : 'bg-green'}`} />
                <div className="activity-details">
                  <p className="activity-text"><strong>{activity.type}</strong> by {activity.user}</p>
                  <span className="activity-time">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
