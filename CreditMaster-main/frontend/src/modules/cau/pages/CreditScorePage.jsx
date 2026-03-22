import { useState } from 'react';
import { 
  Shield, CheckCircle, AlertTriangle, 
  Info, TrendingUp, TrendingDown,
  Activity, Zap, Target
} from 'lucide-react';

export default function CreditScorePage() {
  const [scores] = useState({
    bureauScore: 785,
    internalScore: 820,
    riskLevel: 'Low',
    assessmentResult: 'Approved',
    factors: [
      { id: 1, text: 'Clean payment history', impact: 'High', status: 'Positive', detail: 'No defaults in 24 months' },
      { id: 2, text: 'Low credit utilization', impact: 'Medium', status: 'Positive', detail: 'Current utilization at 12%' },
      { id: 3, text: 'Recent credit inquiries', impact: 'Low', status: 'Negative', detail: '3 inquiries in last 6 months' },
      { id: 4, text: 'Account Age', impact: 'Medium', status: 'Positive', detail: 'Average age is 5.2 years' },
    ]
  });

  const getScoreColor = (score) => {
    if (score > 750) return 'var(--success)';
    if (score > 650) return 'var(--warning)';
    return 'var(--danger)';
  };

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Credit Assessment Insight</h1>
          <p className="page-subtitle">Deep dive into bureau analytics and internal risk modeling</p>
        </div>
      </div>

      <div className="stat-grid">
        <div className="stat-card">
          <div className="stat-icon blue"><Shield size={22} /></div>
          <div className="stat-content">
            <p className="stat-label">Bureau Score (CIBIL)</p>
            <h3 className="stat-value" style={{ color: getScoreColor(scores.bureauScore) }}>{scores.bureauScore}</h3>
            <div className="stat-change up">Excellent Range</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon purple"><Zap size={22} /></div>
          <div className="stat-content">
            <p className="stat-label">Internal Risk Engine</p>
            <h3 className="stat-value" style={{ color: getScoreColor(scores.internalScore) }}>{scores.internalScore}</h3>
            <div className="stat-change up">Low Probability of Default</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon green"><CheckCircle size={22} /></div>
          <div className="stat-content">
            <p className="stat-label">Assessment Verdict</p>
            <h3 className="stat-value" style={{ color: 'var(--success)' }}>{scores.assessmentResult}</h3>
            <div className="stat-change" style={{ color: 'var(--text-muted)' }}>Qualified for Premium</div>
          </div>
        </div>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr', gap:'24px', marginTop:'24px' }}>
        <div className="card">
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'20px' }}>
            <h3 style={{ fontSize:'1rem', fontWeight:700, color:'var(--navy)', display:'flex', alignItems:'center', gap:'8px' }}>
              <Activity size={18}/> Key Score Factors
            </h3>
            <span style={{ fontSize:'.75rem', color:'var(--text-muted)' }}>Updated: Just now</span>
          </div>

          <div style={{ display:'flex', flexDirection:'column', gap:'12px' }}>
            {scores.factors.map(f => (
              <div key={f.id} style={{ 
                padding:'16px', 
                background:'var(--surface-2)', 
                borderRadius:'var(--radius)', 
                border:'1px solid var(--border)',
                display:'flex',
                alignItems:'center',
                gap:'16px'
              }}>
                <div style={{ 
                  width:'40px', height:'40px', borderRadius:'10px', 
                  background: f.status === 'Positive' ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)',
                  color: f.status === 'Positive' ? 'var(--success)' : 'var(--danger)',
                  display:'flex', alignItems:'center', justifyCenter:'center', flexShrink:0
                }}>
                  {f.status === 'Positive' ? <TrendingUp size={20} style={{ margin:'auto' }}/> : <TrendingDown size={20} style={{ margin:'auto' }}/>}
                </div>
                <div style={{ flex:1 }}>
                  <div style={{ display:'flex', alignItems:'center', gap:'8px' }}>
                    <span style={{ fontWeight:600, fontSize:'.9rem' }}>{f.text}</span>
                    <span className={`badge ${f.status === 'Positive' ? 'badge-success' : 'badge-danger'}`} style={{ fontSize:'.6rem', padding:'1px 6px' }}>
                      {f.impact} Impact
                    </span>
                  </div>
                  <p style={{ fontSize:'.8rem', color:'var(--text-secondary)', marginTop:'2px' }}>{f.detail}</p>
                </div>
                <div style={{ color: f.status === 'Positive' ? 'var(--success)' : 'var(--danger)', fontWeight:700, fontSize:'.85rem' }}>
                  {f.status === 'Positive' ? '+High' : '-Low'}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card" style={{ background:'var(--navy)', color:'white' }}>
          <h3 style={{ fontSize:'1rem', fontWeight:700, marginBottom:'20px', display:'flex', alignItems:'center', gap:'8px' }}>
            <Target size={18} color="var(--gold)"/> Risk Profile
          </h3>
          
          <div style={{ textAlign:'center', padding:'20px 0' }}>
            <div style={{ fontSize:'2.5rem', fontWeight:800, color:'var(--gold)' }}>{scores.riskLevel}</div>
            <p style={{ fontSize:'.8rem', opacity:0.7, textTransform:'uppercase', letterSpacing:'.1em' }}>Aggregate Risk Level</p>
          </div>

          <div style={{ marginTop:'20px', paddingTop:'20px', borderTop:'1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ display:'flex', justifyContent:'space-between', fontSize:'.85rem', marginBottom:'8px' }}>
              <span>Recovery Prob.</span>
              <span style={{ fontWeight:700 }}>98.5%</span>
            </div>
            <div style={{ height:'6px', background:'rgba(255,255,255,0.1)', borderRadius:'3px', overflow:'hidden' }}>
              <div style={{ width:'98.5%', height:'100%', background:'var(--success)' }} />
            </div>
          </div>

          <div style={{ marginTop:'16px' }}>
            <div style={{ display:'flex', justifyContent:'space-between', fontSize:'.85rem', marginBottom:'8px' }}>
              <span>Fraud Risk</span>
              <span style={{ fontWeight:700 }}>Very Low</span>
            </div>
            <div style={{ height:'6px', background:'rgba(255,255,255,0.1)', borderRadius:'3px', overflow:'hidden' }}>
              <div style={{ width:'5%', height:'100%', background:'var(--gold)' }} />
            </div>
          </div>

          <div style={{ marginTop:'24px', padding:'12px', background:'rgba(255,255,255,0.05)', borderRadius:'var(--radius)', fontSize:'.75rem', lineHeight:'1.5' }}>
            <Info size={14} style={{ marginBottom:'4px', color:'var(--gold)' }}/>
            <br />
            Applicant shows exceptional financial discipline with consistent bureau history and low internal utilization patterns.
          </div>
        </div>
      </div>
    </div>
  );
}
