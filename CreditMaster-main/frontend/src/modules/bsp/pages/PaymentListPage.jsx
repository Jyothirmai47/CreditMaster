import { DollarSign, Search, CheckCircle } from 'lucide-react';

export default function PaymentListPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Payments Received</h1>
          <p className="page-subtitle">Track customer payments and settlements</p>
        </div>
      </div>

      <div className="card glass-card">
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>Payment ID</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Method</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PAY-9901</td>
                <td>John Doe</td>
                <td>2024-03-21</td>
                <td>UPI</td>
                <td>₹ 12,450.00</td>
                <td><span className="badge badge-success">CLEARED</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
