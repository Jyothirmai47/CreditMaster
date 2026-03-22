import { Shield, CreditCard, User, Settings, CheckCircle } from 'lucide-react';

export default function CardAccountPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Card Accounts</h1>
          <p className="page-subtitle">Manage customer card accounts and statuses</p>
        </div>
      </div>

      <div className="card glass-card">
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>Account ID</th>
                <th>Card Number</th>
                <th>Customer</th>
                <th>Type</th>
                <th>Credit Limit</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ACC-8890</td>
                <td>**** **** **** 4456</td>
                <td>John Doe</td>
                <td>Premium Gold</td>
                <td>₹ 2,00,000</td>
                <td><span className="badge badge-success">ACTIVE</span></td>
                <td>
                  <button className="btn btn-ghost btn-icon"><Settings size={14}/></button>
                </td>
              </tr>
              <tr>
                <td>ACC-8891</td>
                <td>**** **** **** 1122</td>
                <td>Sarah Smith</td>
                <td>Basic Classic</td>
                <td>₹ 50,000</td>
                <td><span className="badge badge-warning">BLOCKED</span></td>
                <td>
                  <button className="btn btn-ghost btn-icon"><Settings size={14}/></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
