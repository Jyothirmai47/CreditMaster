import { FileText, Download, Mail, Filter } from 'lucide-react';

export default function StatementListPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Monthly Statements</h1>
          <p className="page-subtitle">Manage and generate customer billing statements</p>
        </div>
      </div>

      <div className="card glass-card">
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>Statement ID</th>
                <th>Customer</th>
                <th>Period</th>
                <th>Due Date</th>
                <th>Total Due</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ST-2024-03</td>
                <td>John Doe</td>
                <td>Mar 2024</td>
                <td>2024-04-10</td>
                <td>₹ 12,450.00</td>
                <td>
                  <div className="flex gap-2">
                    <button className="btn btn-ghost btn-icon"><Download size={14}/></button>
                    <button className="btn btn-ghost btn-icon"><Mail size={14}/></button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
