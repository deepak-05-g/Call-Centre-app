import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Users,
  Receipt, 
  Route, 
  Tag, 
  FileText, 
  PhoneCall, 
  CheckCircle2,
  Package,
  ShieldCheck,
  Building,
  CreditCard
} from 'lucide-react';
import { LEADS_MODAL_DATA_RETAIL } from '../../data/mockData';

export default function LeadsModal({
  isOpen,
  initialLeadIndex = 0,
  initialLeadName = null,
  onClose,
  onCall,
  onWhatsApp
}) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [quoteToggles, setQuoteToggles] = useState({});
  const [openIcp, setOpenIcp] = useState(false);
  const [openJourney, setOpenJourney] = useState(false);
  const [openSignals, setOpenSignals] = useState(true);
  const [actionFeedback, setActionFeedback] = useState(null);

  const leads = LEADS_MODAL_DATA_RETAIL;

  // Sync index when modal opens or initial selection changes
  useEffect(() => {
    if (!isOpen) return;

    if (initialLeadName) {
      const foundIdx = leads.findIndex(l => 
        l.name.toLowerCase().includes(initialLeadName.toLowerCase())
      );
      if (foundIdx !== -1) {
        setCurrentIdx(foundIdx);
        return;
      }
    }

    if (typeof initialLeadIndex === 'number' && initialLeadIndex >= 0 && initialLeadIndex < leads.length) {
      setCurrentIdx(initialLeadIndex);
    } else {
      setCurrentIdx(0);
    }
  }, [isOpen, initialLeadIndex, initialLeadName, leads]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const lead = leads[currentIdx] || leads[0];
  const isQuoteOn = quoteToggles[lead.name] ?? (lead.quoteOn ?? true);

  const handleToggleQuote = () => {
    setQuoteToggles(prev => ({
      ...prev,
      [lead.name]: !isQuoteOn
    }));
  };

  const handleNav = (dir) => {
    const newIdx = Math.max(0, Math.min(leads.length - 1, currentIdx + dir));
    setCurrentIdx(newIdx);
    setActionFeedback(null);
  };

  const handleAction = (type, label) => {
    if (type === 'call') {
      if (onCall) onCall(lead);
      onClose();
    } else if (type === 'whatsapp') {
      if (onWhatsApp) onWhatsApp(lead);
      setActionFeedback(`Opening WhatsApp conversation with ${lead.name}…`);
      setTimeout(() => setActionFeedback(null), 2500);
    } else {
      setActionFeedback(`Marked "${label}" for ${lead.name} ✓`);
      setTimeout(() => setActionFeedback(null), 2500);
    }
  };

  const getBucketIcon = (cat) => {
    switch (cat) {
      case 'Quotation Demanded':
        return <FileText size={13} color="#c8860a" />;
      case 'Product Related':
        return <Package size={13} color="#c8860a" />;
      case 'Financing Related':
        return <CreditCard size={13} color="#c8860a" />;
      case 'Warranty Related':
        return <ShieldCheck size={13} color="#c8860a" />;
      case 'In-Store Experience Needed':
        return <Building size={13} color="#c8860a" />;
      default:
        return <Tag size={13} color="#c8860a" />;
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 1000 }}>
      <div 
        className="leads-modal-card" 
        onClick={e => e.stopPropagation()}
        style={{
          maxWidth: 430,
          maxHeight: '84vh',
          borderRadius: 20,
          boxShadow: '0 20px 60px rgba(0,0,0,0.35)'
        }}
      >
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg,#3b1254,#6b2fa0)',
          padding: '13px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          flexShrink: 0
        }}>
          <Users size={19} color="#c084fc" />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#ffffff' }}>Leads</div>
            <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.7)' }}>
              Lead {currentIdx + 1} of {leads.length} · SLA to close
            </div>
          </div>
          <button 
            onClick={onClose}
            title="Close"
            style={{
              background: 'rgba(255,255,255,0.16)',
              border: 'none',
              borderRadius: '50%',
              width: 28,
              height: 28,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontSize: 14,
              cursor: 'pointer',
              flexShrink: 0,
              transition: 'background 0.15s ease'
            }}
          >
            ✕
          </button>
        </div>

        {/* Pagination Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '8px 14px',
          borderBottom: '1px solid #f0f0f0',
          flexShrink: 0,
          background: '#fafafc'
        }}>
          <button 
            onClick={() => handleNav(-1)}
            disabled={currentIdx === 0}
            style={{
              width: 28,
              height: 28,
              borderRadius: '50%',
              border: '1px solid #e5e5ea',
              background: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: currentIdx === 0 ? 'default' : 'pointer',
              fontSize: 16,
              color: '#3b1254',
              flexShrink: 0,
              visibility: currentIdx === 0 ? 'hidden' : 'visible'
            }}
            title="Previous Lead"
          >
            ‹
          </button>

          <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5 }}>
            {leads.map((_, i) => (
              <span 
                key={i}
                onClick={() => {
                  setCurrentIdx(i);
                  setActionFeedback(null);
                }}
                style={{
                  display: 'inline-block',
                  width: i === currentIdx ? 16 : 6,
                  height: 6,
                  borderRadius: 3,
                  background: i === currentIdx ? '#6b2fa0' : '#e5e5ea',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              />
            ))}
          </div>

          <button 
            onClick={() => handleNav(1)}
            disabled={currentIdx >= leads.length - 1}
            style={{
              width: 28,
              height: 28,
              borderRadius: '50%',
              border: '1px solid #e5e5ea',
              background: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: currentIdx >= leads.length - 1 ? 'default' : 'pointer',
              fontSize: 16,
              color: '#3b1254',
              flexShrink: 0,
              visibility: currentIdx >= leads.length - 1 ? 'hidden' : 'visible'
            }}
            title="Next Lead"
          >
            ›
          </button>
        </div>

        {/* Scrollable Body */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '14px' }}>
          {/* Action Feedback Banner */}
          {actionFeedback && (
            <div style={{
              background: '#e1f5ee',
              color: '#0f6e56',
              padding: '8px 12px',
              borderRadius: 8,
              fontSize: 12.5,
              fontWeight: 700,
              marginBottom: 10,
              display: 'flex',
              alignItems: 'center',
              gap: 6
            }}>
              <CheckCircle2 size={15} />
              <span>{actionFeedback}</span>
            </div>
          )}

          {/* Status Label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: lead.statusColor }} />
            <span style={{ fontSize: 12, fontWeight: 800, color: lead.statusColor, textTransform: 'uppercase', letterSpacing: 0.5 }}>
              {lead.statusLabel}
            </span>
          </div>

          {/* Profile Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <div style={{
              width: 38,
              height: 38,
              borderRadius: '50%',
              background: lead.avatarBg,
              color: lead.avatarColor,
              fontSize: 15,
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              {lead.initials}
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: '#1a1a1a' }}>
                {lead.name}
              </div>
              <div style={{ fontSize: 13, color: '#6b6b74' }}>
                {lead.interest}
              </div>
            </div>

            <span style={{
              fontSize: 12,
              background: lead.badgeBg,
              color: lead.badgeColor,
              padding: '2px 8px',
              borderRadius: 6,
              fontWeight: 700,
              flexShrink: 0
            }}>
              {lead.badge}
            </span>
          </div>

          {/* Quote to be given to customer Toggle */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 8,
            background: '#fdf3e0',
            border: '1px solid #f3dfa8',
            borderRadius: 9,
            padding: '7px 10px',
            marginBottom: 8
          }}>
            <span style={{ fontSize: 12.5, color: '#7c4a00', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
              <Receipt size={14} color="#7c4a00" />
              <span>Quote to be given to customer</span>
            </span>

            <div 
              className={`toggle-sw ${isQuoteOn ? 'on' : ''}`}
              onClick={handleToggleQuote}
              style={{ transform: 'scale(0.72)', transformOrigin: 'right center' }}
              title="Toggle Quote requirement"
            >
              <div className="toggle-knob" />
            </div>
          </div>

          {/* SLA Alert Note */}
          {lead.slaNote && (
            <div style={{
              fontSize: 12.5,
              color: '#c8860a',
              background: '#fff3cd',
              borderRadius: 8,
              padding: '6px 10px',
              marginBottom: 8,
              border: '1px solid #ffeeba'
            }}>
              {lead.slaNote}
            </div>
          )}

          {/* ICP Score Bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '3px 0 8px' }}>
            <div style={{ fontSize: 12.5, color: '#555', fontWeight: 600 }}>
              🎯 ICP
            </div>
            <div style={{ flex: 1, height: 5, background: '#e5e5ea', borderRadius: 3, overflow: 'hidden' }}>
              <div style={{ width: `${lead.icp}%`, height: '100%', background: lead.icpColor, borderRadius: 3 }} />
            </div>
            <div style={{ fontSize: 14, fontWeight: 800, color: lead.icpColor, minWidth: 34, textAlign: 'right' }}>
              {lead.icp}%
            </div>
          </div>

          {/* Lead Intent Score */}
          {lead.intentScore !== undefined && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              background: lead.intentScore >= 80 ? '#e1f5ee' : lead.intentScore >= 55 ? '#fff3d6' : '#fdecec',
              borderRadius: 9,
              padding: '7px 10px',
              marginBottom: 8
            }}>
              <span style={{
                fontSize: 12.5,
                fontWeight: 700,
                color: lead.intentScore >= 80 ? '#0f6e56' : lead.intentScore >= 55 ? '#c8860a' : '#e24b4a'
              }}>
                🎯 Lead Intent Score
              </span>
              <span style={{
                marginLeft: 'auto',
                fontSize: 15,
                fontWeight: 800,
                color: lead.intentScore >= 80 ? '#0f6e56' : lead.intentScore >= 55 ? '#c8860a' : '#e24b4a'
              }}>
                {lead.intentScore}
              </span>
            </div>
          )}

          {/* 1. Collapsible ICP Fit Breakdown */}
          <div style={{ background: '#f9f9f9', borderRadius: 10, border: '0.5px solid #e5e5ea', padding: '8px 10px', marginBottom: 8 }}>
            <div 
              className="icp-fold-head"
              onClick={() => setOpenIcp(!openIcp)}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', padding: '2px 0' }}
            >
              <div style={{ fontSize: 12, fontWeight: 700, color: '#6b6b74', textTransform: 'uppercase', letterSpacing: 0.4 }}>
                ICP Fit Breakdown
              </div>
              {openIcp ? <ChevronUp size={15} color="#8e8e93" /> : <ChevronDown size={15} color="#8e8e93" />}
            </div>

            {openIcp && (
              <div style={{ paddingTop: 8 }}>
                {(lead.subscores || [
                  { label: 'Budget Fit', pct: lead.icp || 85, color: '#1d9e75' },
                  { label: 'Need Match', pct: 72, color: '#c8860a' },
                  { label: 'Decision Stage', pct: 60, color: '#7c3aed' }
                ]).map((s, si) => (
                  <div key={si} style={{ marginBottom: 6 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
                      <span style={{ fontSize: 12, color: '#555' }}>{s.label}</span>
                      <span style={{ fontSize: 12.5, fontWeight: 700, color: s.color }}>{s.pct}%</span>
                    </div>
                    <div style={{ height: 4, background: '#e5e5ea', borderRadius: 2, overflow: 'hidden' }}>
                      <div style={{ width: `${s.pct}%`, height: '100%', background: s.color, borderRadius: 2 }} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 2. Collapsible Journey (How we got here) */}
          {lead.journey && lead.journey.length > 0 && (
            <div style={{ background: '#faf8ff', borderRadius: 10, border: '0.5px solid #ece2fb', padding: '8px 10px', marginBottom: 8 }}>
              <div 
                className="icp-fold-head"
                onClick={() => setOpenJourney(!openJourney)}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', padding: '2px 0' }}
              >
                <div style={{ fontSize: 12, fontWeight: 700, color: '#6d28d9', textTransform: 'uppercase', letterSpacing: 0.4, display: 'flex', alignItems: 'center', gap: 5 }}>
                  <Route size={14} color="#6d28d9" />
                  <span>How we got here</span>
                </div>
                {openJourney ? <ChevronUp size={15} color="#6d28d9" /> : <ChevronDown size={15} color="#6d28d9" />}
              </div>

              {openJourney && (
                <div style={{ paddingTop: 8 }}>
                  <div className="pid-timeline">
                    {lead.journey.map((ev, ei) => (
                      <div key={ei} className="pid-tl-item">
                        <div className="pid-tl-dot" style={{ background: ev.color, color: '#fff' }}>
                          {ev.icon}
                        </div>
                        <div className="pid-tl-date">
                          {ev.date}
                          <span className="pid-tl-channel">{ev.channel}</span>
                        </div>
                        <div className="pid-tl-text">{ev.text}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 3. Collapsible Signals (Where we picked up signals) */}
          {lead.problemBuckets && lead.problemBuckets.length > 0 && (
            <div style={{ background: '#fef6ec', borderRadius: 10, border: '0.5px solid #f5cf94', padding: '8px 10px', marginBottom: 8 }}>
              <div 
                className="icp-fold-head"
                onClick={() => setOpenSignals(!openSignals)}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', padding: '2px 0' }}
              >
                <div style={{ fontSize: 12, fontWeight: 700, color: '#7c4a00', textTransform: 'uppercase', letterSpacing: 0.4, display: 'flex', alignItems: 'center', gap: 5 }}>
                  <Tag size={13} color="#7c4a00" />
                  <span>📋 Where we picked up signals</span>
                </div>
                {openSignals ? <ChevronUp size={15} color="#7c4a00" /> : <ChevronDown size={15} color="#7c4a00" />}
              </div>

              {openSignals && (
                <div style={{ paddingTop: 8 }}>
                  {lead.problemBuckets.map((b, bi) => (
                    <div key={bi} className="problem-crit-row">
                      <div className="problem-crit-name" style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                        {getBucketIcon(b.cat)}
                        <span>{b.cat}</span>
                      </div>
                      <div className="problem-crit-snippet">"{b.text}"</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* 4. Precall Notes */}
          {lead.notes && lead.notes.length > 0 && (
            <div className="precall-notes" style={{ marginBottom: 10 }}>
              <div className="precall-notes-head">
                <FileText size={14} />
                <span>Before you reach out</span>
              </div>
              {lead.notes.map((n, ni) => (
                <div key={ni} className="precall-note-item">
                  <span style={{ color: '#c8860a' }}>•</span>
                  <span>{n}</span>
                </div>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="lead-action-row" style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {lead.actions === 'open' ? (
              <>
                <button 
                  type="button"
                  style={{
                    flex: 1,
                    padding: '7px 4px',
                    border: '1px solid #e24b4a',
                    borderRadius: 9,
                    fontSize: 12.5,
                    color: '#e24b4a',
                    background: '#fff',
                    cursor: 'pointer',
                    fontWeight: 600
                  }}
                  onClick={() => handleAction('no_interest', 'No Interest')}
                >
                  No Interest
                </button>

                <button 
                  type="button"
                  style={{
                    flex: 1,
                    padding: '7px 4px',
                    border: 'none',
                    borderRadius: 9,
                    fontSize: 12.5,
                    color: '#fff',
                    background: '#25D366',
                    cursor: 'pointer',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 4
                  }}
                  onClick={() => handleAction('whatsapp', 'WhatsApp')}
                >
                  <span>💬</span> WhatsApp
                </button>

                <button 
                  type="button"
                  className="og-call-btn"
                  style={{
                    flex: 1.2,
                    padding: '7px 6px',
                    border: 'none',
                    borderRadius: 9,
                    fontSize: 12.5,
                    color: '#fff',
                    background: '#0f6e56',
                    cursor: 'pointer',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 4
                  }}
                  onClick={() => handleAction('call', 'On-ground Call')}
                >
                  <PhoneCall size={13} />
                  <span>On-ground Call</span>
                </button>

                <button 
                  type="button"
                  style={{
                    flex: 1,
                    padding: '7px 4px',
                    border: 'none',
                    borderRadius: 9,
                    fontSize: 12.5,
                    color: '#fff',
                    background: '#1d9e75',
                    cursor: 'pointer',
                    fontWeight: 600
                  }}
                  onClick={() => handleAction('came_back', 'Came Back')}
                >
                  Came Back ✓
                </button>
              </>
            ) : (
              <>
                <button 
                  type="button"
                  style={{
                    flex: 1,
                    padding: '7px 4px',
                    border: '1px solid #e24b4a',
                    borderRadius: 9,
                    fontSize: 12.5,
                    color: '#e24b4a',
                    background: '#fff',
                    cursor: 'pointer',
                    fontWeight: 600
                  }}
                  onClick={() => handleAction('no_sale', 'Close · No Sale')}
                >
                  Close · No Sale
                </button>

                <button 
                  type="button"
                  style={{
                    flex: 1,
                    padding: '7px 4px',
                    border: 'none',
                    borderRadius: 9,
                    fontSize: 12.5,
                    color: '#fff',
                    background: '#25D366',
                    cursor: 'pointer',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 4
                  }}
                  onClick={() => handleAction('whatsapp', 'WhatsApp')}
                >
                  <span>💬</span> WhatsApp
                </button>

                <button 
                  type="button"
                  className="og-call-btn"
                  style={{
                    flex: 1.2,
                    padding: '7px 6px',
                    border: 'none',
                    borderRadius: 9,
                    fontSize: 12.5,
                    color: '#fff',
                    background: '#0f6e56',
                    cursor: 'pointer',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 4
                  }}
                  onClick={() => handleAction('call', 'On-ground Call')}
                >
                  <PhoneCall size={13} />
                  <span>On-ground Call</span>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Persistent Footer */}
        <div style={{
          padding: '9px 14px',
          borderTop: '1px solid #f0f0f0',
          flexShrink: 0,
          background: '#fff9f9'
        }}>
          <div style={{
            fontSize: 12,
            fontWeight: 700,
            color: '#e24b4a',
            textTransform: 'uppercase',
            letterSpacing: 0.5,
            display: 'flex',
            alignItems: 'center',
            gap: 5
          }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#e24b4a' }} />
            <span>Cumulative Missed: 2</span>
            <span style={{ fontWeight: 500, color: '#a32d2d', textTransform: 'none', letterSpacing: 0 }}>
              · expired without close, visible to manager
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
