import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Phone } from 'lucide-react';
import { LEADS_MODAL_DATA_RETAIL } from '../../data/mockData';

export default function CallsToMake({ onPlaceCall, onOpenLeadDetail }) {
  const [page, setPage] = useState(0);
  const [expandedId, setExpandedId] = useState(null);

  // Filter and rank leads by attractiveness score
  const leads = LEADS_MODAL_DATA_RETAIL
    .filter(l => l.actions === 'open' || l.actions === 'ageing')
    .slice()
    .sort((a, b) => (b.attractivenessScore || 0) - (a.attractivenessScore || 0));

  const perPage = 2;
  const totalPages = Math.max(1, Math.ceil(leads.length / perPage));
  const currentPage = Math.max(0, Math.min(page, totalPages - 1));
  const pageLeads = leads.slice(currentPage * perPage, currentPage * perPage + perPage);

  const toggleExpand = (leadName) => {
    setExpandedId(expandedId === leadName ? null : leadName);
  };

  const getScoreColor = (score = 0) => {
    if (score >= 80) return '#0f6e56';
    if (score >= 55) return '#c8860a';
    return '#e24b4a';
  };

  return (
    <div style={{ padding: '0 4px' }}>
      <div style={{ marginBottom: 12 }}>
        <div className="plan-section-title">Planned outgoing calls</div>
        <div className="plan-section-sub">
          Ranked by lead attractiveness score — tap a lead for the full picture
        </div>
      </div>

      <div>
        {pageLeads.map((lead) => {
          const isExpanded = expandedId === lead.name;
          const scoreColor = getScoreColor(lead.attractivenessScore);
          const journeySummary = (lead.journey || []).map(j => j.text).join(' → ');

          return (
            <div key={lead.name} className="plan-row">
              {/* Row Head */}
              <div 
                className="plan-row-head"
                onClick={() => toggleExpand(lead.name)}
              >
                <div 
                  className="plan-av"
                  style={{ background: lead.avatarBg, color: lead.avatarColor }}
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenLeadDetail(lead);
                  }}
                  title="Click to view full lead profile"
                >
                  {lead.initials}
                </div>

                <div className="plan-lead-info">
                  <div className="plan-lead-name">
                    <span>{lead.name}</span>
                    {lead.badge && (
                      <span style={{ 
                        fontSize: 11, 
                        background: lead.badgeBg || '#e1f5ee', 
                        color: lead.badgeColor || '#0f6e56', 
                        padding: '1px 6px', 
                        borderRadius: 6 
                      }}>
                        {lead.badge}
                      </span>
                    )}
                  </div>
                  <div className="plan-lead-interest">{lead.interest}</div>
                </div>

                <div className="plan-score-box">
                  <div className="plan-score-val" style={{ color: scoreColor }}>
                    {lead.attractivenessScore}
                  </div>
                  <div className="plan-score-lbl">score</div>
                </div>

                <div className="plan-row-chevron">
                  {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </div>

              {/* Row Expanded Detail */}
              {isExpanded && (
                <div className="plan-row-detail">
                  <div className="plan-detail-eyebrow">Story so far</div>
                  <div className="plan-story-text">
                    {journeySummary || 'No prior journey logged yet.'}
                  </div>

                  <div className="plan-grid-two">
                    <div className="plan-grid-box">
                      <div className="plan-grid-box-lbl">Preferred product</div>
                      <div className="plan-grid-box-val">{lead.product || '—'}</div>
                    </div>
                    <div className="plan-grid-box">
                      <div className="plan-grid-box-lbl">Cross-sell</div>
                      <div className="plan-grid-box-val">{lead.crossSell || '—'}</div>
                    </div>
                  </div>

                  <div className="plan-emi-box">
                    <div className="plan-emi-lbl">EMI / financing</div>
                    <div className="plan-emi-val">{lead.emi || 'Not discussed yet'}</div>
                  </div>

                  <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
                    <button 
                      onClick={() => onOpenLeadDetail(lead)}
                      style={{
                        flex: 1,
                        padding: 10,
                        border: '1px solid #1d9e75',
                        borderRadius: 10,
                        background: '#fff',
                        color: '#0f6e56',
                        fontWeight: 700,
                        fontSize: 13.5,
                        cursor: 'pointer'
                      }}
                    >
                      View Lead Card
                    </button>
                    <button 
                      className="plan-place-call-btn"
                      style={{ flex: 1.5, marginTop: 0 }}
                      onClick={() => onPlaceCall(lead)}
                      title={`Place call to ${lead.name}`}
                    >
                      <Phone size={15} />
                      <span>Place call</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Pagination Bar */}
      <div className="plan-pager">
        <button 
          className="pager-btn"
          disabled={currentPage === 0}
          onClick={() => {
            setPage(currentPage - 1);
            setExpandedId(null);
          }}
          title="Previous Page"
        >
          <ChevronLeft size={16} />
        </button>

        <span className="pager-info">
          Page {currentPage + 1} of {totalPages}
        </span>

        <button 
          className="pager-btn"
          disabled={currentPage >= totalPages - 1}
          onClick={() => {
            setPage(currentPage + 1);
            setExpandedId(null);
          }}
          title="Next Page"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
