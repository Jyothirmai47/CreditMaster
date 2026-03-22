import { ArrowRightLeft, Search, Filter, Download } from 'lucide-react';

export default function TransactionListPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Transactions</h1>
          <p className="page-subtitle">View and monitor all posted and pending transactions</p>
        </div>
        <div className="flex gap-2">
          <button className="btn btn-outline"><Filter size={16} /> Filter</button>
          <button className="btn btn-outline"><Download size={16} /> Export</button>
        </div>
      </div>

      <div className="card glass-card">
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>Tx ID</th>
                <th>Date</th>
                <th>Merchant</th>
                <th>Card Number</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>TX-10023</td>
                <td>2024-03-22 14:20</td>
                <td>Amazon India</td>
                <td>**** 4456</td>
                <td>₹ 4,500.00</td>
                <td><span className="badge badge-success">POSTED</span></td>
              </tr>
              <tr>
                <td>TX-10024</td>
                <td>2024-03-22 15:05</td>
                <td>Starbucks Coffee</td>
                <td>**** 1122</td>
                <td>₹ 450.00</td>
                <td><span className="badge badge-info">AUTHORIZED</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
