import React from 'react';
import { Award, X, TrendingUp, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import { USER_PROFILE } from '../../data/mockData';

const PILLARS = [
  {
    name: 'Objection Handling',
    score: 84,
    benchmark: 75,
    level: 'Advanced',
    color: '#10b981',
    note: 'Consistently counters price hesitation with EMI tenure options.'
  },
  {
    name: 'Empathy & Active Listening',
    score: 78,
    benchmark: 70,
    level: 'Proficient',
    color: '#0ea5e9',
    note: 'Strong acknowledgment of customer budget constraints and family needs.'
  },
  {
    name: 'Product & EMI Structuring',
    score: 72,
    benchmark: 75,
    level: 'Proficient',
    color: '#8b5cf6',
    note: 'Clear breakdown of downpayment vs monthly cost; improve processing fee mention.'
  },
  {
    name: 'SOP & Compliance Adherence',
    score: 69,
    benchmark: 80,
    level: 'Developing',
    color: '#f59e0b',
    note: 'Need to consistently mention mandatory T&C disclaimers on 2 out of 5 calls.'
  }
];

export default function OgScoreModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="ogscore-modal-card" onClick={e => e.stopPropagation()}>
        <div className="ogscore-modal-header">
          <div>
            <div className="ogscore-badge-pill">
              <Award size={14} />
              <span>OG Score™ Breakdown</span>
            </div>
            <div style={{ fontSize: 13, opacity: 0.9, marginTop: 4 }}>
              Agent: {USER_PROFILE.name} ({USER_PROFILE.role})
            </div>
          </div>
          <button className="leads-modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={16} />
          </button>
        </div>

        <div className="ogscore-modal-body">
          {/* Hero Score Meter */}
          <div className="ogscore-hero-meter">
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#6366f1', textTransform: 'uppercase' }}>
                Overall Score
              </div>
              <div className="ogscore-big-number">
                {USER_PROFILE.ogScore}
                <span style={{ fontSize: 20, color: '#94a3b8', fontWeight: 600 }}>/100</span>
              </div>
              <div style={{ fontSize: 12, color: '#64748b', marginTop: 4 }}>
                72nd Percentile across all retail hubs
              </div>
            </div>

            <div className="ogscore-rank-box">
              <div className="ogscore-rank-label">Floor Leaderboard</div>
              <div className="ogscore-rank-val">Rank #3 🏆</div>
              <div className="ogscore-delta-pill">
                <TrendingUp size={12} style={{ display: 'inline', marginRight: 4 }} />
                +13 pts this month
              </div>
            </div>
          </div>

          {/* Pillars List */}
          <div className="ogscore-section-title">Core Competencies & SOP Audit</div>
          <div className="ogscore-pillar-list">
            {PILLARS.map(p => (
              <div key={p.name} className="ogscore-pillar-item">
                <div className="ogscore-pillar-header">
                  <span>{p.name}</span>
                  <span style={{ color: p.color, fontWeight: 700 }}>
                    {p.score}/100 · {p.level}
                  </span>
                </div>
                <div className="ogscore-pillar-bar-bg">
                  <div 
                    className="ogscore-pillar-bar-fill" 
                    style={{ width: `${p.score}%`, backgroundColor: p.color }}
                  />
                </div>
                <div style={{ fontSize: 11.5, color: '#64748b', marginTop: 6, lineHeight: 1.4 }}>
                  {p.note}
                </div>
              </div>
            ))}
          </div>

          {/* AI Coach Insights */}
          <div className="ogscore-insights-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 700, marginBottom: 4 }}>
              <Sparkles size={16} color="#9333ea" />
              <span>Avani AI Coach Feedback</span>
            </div>
            <p style={{ margin: 0 }}>
              "You are <strong>4 points away from Rank #2 (Priya K.)</strong>! Boost your SOP compliance by verbalising the 3-day return policy and standard delivery disclaimer within the first 90 seconds."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
