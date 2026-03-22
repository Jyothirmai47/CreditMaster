import { Activity, Shield, Clock, User } from 'lucide-react';

export default function AuditLogPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">System Audit Logs</h1>
          <p className="page-subtitle">Track user activities and system changes</p>
        </div>
      </div>

      <div className="card glass-card">
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>Timestamp</th>
                <th>User</th>
                <th>Action</th>
                <th>Module</th>
                <th>IP Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2024-03-22 15:30:12</td>
                <td>admin@bank.com</td>
                <td>Updated Fee Config</td>
                <td>CPL</td>
                <td>192.168.1.1</td>
              </tr>
              <tr>
                <td>2024-03-22 14:45:05</td>
                <td>ops_analyst@bank.com</td>
                <td>Issued Card ACC-8890</td>
                <td>CIAS</td>
                <td>192.168.1.45</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
