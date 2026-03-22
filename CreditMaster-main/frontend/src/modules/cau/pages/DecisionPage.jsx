import { useState } from 'react';
import { CheckCircle, XCircle, Clock, Info, Save } from 'lucide-react';

export default function DecisionPage() {
  const [decision, setDecision] = useState({
    status: 'APPROVE',
    limit: 100000,
    notes: ''
  });

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Underwriting Decision</h1>
          <p className="page-subtitle">Finalize credit application assessment</p>
        </div>
      </div>

      <div className="card glass-card max-w-2xl">
        <form className="form-grid">
          <div className="form-group full">
            <label className="required">Decision Type</label>
            <div className="radio-group" style={{ display: 'flex', gap: '16px', marginTop: '8px' }}>
              <button 
                type="button" 
                className={`btn ${decision.status === 'APPROVE' ? 'btn-success' : 'btn-outline'}`}
                onClick={() => setDecision({...decision, status: 'APPROVE'})}
              >
                <CheckCircle size={16} className="mr-2" /> Approve
              </button>
              <button 
                type="button" 
                className={`btn ${decision.status === 'REJECT' ? 'btn-danger' : 'btn-outline'}`}
                onClick={() => setDecision({...decision, status: 'REJECT'})}
              >
                <XCircle size={16} className="mr-2" /> Reject
              </button>
              <button 
                type="button" 
                className={`btn ${decision.status === 'CONDITIONAL' ? 'btn-warning' : 'btn-outline'}`}
                onClick={() => setDecision({...decision, status: 'CONDITIONAL'})}
              >
                <Clock size={16} className="mr-2" /> Conditional
              </button>
            </div>
          </div>

          <div className="form-group full">
            <label className="required">Assigned Credit Limit (₹)</label>
            <input 
              type="number" 
              value={decision.limit} 
              onChange={e => setDecision({...decision, limit: e.target.value})}
              className="form-control"
              placeholder="Enter limit"
            />
          </div>

          <div className="form-group full">
            <label>Underwriter Notes</label>
            <textarea 
              rows={4}
              value={decision.notes}
              onChange={e => setDecision({...decision, notes: e.target.value})}
              placeholder="Explain the rationale for this decision..."
            />
          </div>

          <div className="form-actions mt-24">
            <button type="submit" className="btn btn-primary">
              <Save size={16} className="mr-2" /> Submit Decision
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
