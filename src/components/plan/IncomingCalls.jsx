import React, { useState } from 'react';
import { Phone, PhoneMissed, CheckCircle2, PhoneCall, Clock, Calendar, Check, X } from 'lucide-react';
import { DIALER_RECENT_CALLS, LEADS_MODAL_DATA_RETAIL } from '../../data/mockData';

export default function IncomingCalls({ onCallBack, onOpenLeadDetail }) {
  const [activeSchedulingItem, setActiveSchedulingItem] = useState(null);
  const [scheduledSlots, setScheduledSlots] = useState({});
  const [toastMessage, setToastMessage] = useState(null);

  // Extract missed calls and match against lead database
  const missedCalls = DIALER_RECENT_CALLS
    .filter(c => c.dir === 'missed')
    .map(c => {
      const lead = LEADS_MODAL_DATA_RETAIL.find(l => c.name && c.name.startsWith(l.name));
      const value = lead ? (lead.expectedValue || 0) : 0;
      return { call: c, lead, value };
    })
    .sort((a, b) => b.value - a.value);

  const totalValueAtStake = missedCalls.reduce((sum, item) => sum + item.value, 0);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleConnectNow = (item) => {
    const leadObj = item.lead || {
      name: item.call.name,
      phone: '+91 98450 12345',
      product: 'Inbound Inquiry',
      city: 'Retail Callback'
    };
    onCallBack(leadObj);
    setActiveSchedulingItem(null);
  };

  const handleSelectSlot = (item, slotLabel) => {
    setScheduledSlots(prev => ({
      ...prev,
      [item.call.name]: slotLabel
    }));
    setActiveSchedulingItem(null);
    showToast(`✓ Callback for ${item.call.name} scheduled for ${slotLabel}`);
  };

  const handleCancelScheduled = (callName) => {
    setScheduledSlots(prev => {
      const next = { ...prev };
      delete next[callName];
      return next;
    });
    showToast(`Scheduled callback for ${callName} cancelled`);
  };

  if (missedCalls.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '36px 14px', color: '#8e8e93' }}>
        <CheckCircle2 size={36} color="#1d9e75" style={{ margin: '0 auto 8px' }} />
        <div style={{ fontSize: 16, fontWeight: 700, color: '#1a1a1a' }}>No missed calls</div>
        <div style={{ fontSize: 13, color: '#8e8e93', marginTop: 4 }}>You are all caught up for today!</div>
      </div>
    );
  }

  const scheduledCount = Object.keys(scheduledSlots).length;

  return (
    <div style={{ padding: '0 4px', position: 'relative' }}>
      {/* Toast Notification */}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          top: 75,
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#0f6e56',
          color: '#ffffff',
          fontSize: 13,
          fontWeight: 700,
          padding: '8px 16px',
          borderRadius: 20,
          boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
          zIndex: 999,
          display: 'flex',
          alignItems: 'center',
          gap: 6
        }}>
          <CheckCircle2 size={16} />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Schedule Picker Modal Overlay */}
      {activeSchedulingItem && (
        <div 
          className="modal-overlay" 
          onClick={() => setActiveSchedulingItem(null)}
          style={{ zIndex: 1050 }}
        >
          <div 
            className="leads-modal-card" 
            onClick={e => e.stopPropagation()}
            style={{ maxWidth: 400, padding: 20 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
              <div>
                <div style={{ fontSize: 16, fontWeight: 800, color: '#1a1a1a' }}>
                  Manage Callback
                </div>
                <div style={{ fontSize: 12.5, color: '#6b7280' }}>
                  For {activeSchedulingItem.call.name}
                </div>
              </div>
              <button 
                onClick={() => setActiveSchedulingItem(null)}
                style={{
                  background: '#f1f5f9',
                  border: 'none',
                  borderRadius: '50%',
                  width: 28,
                  height: 28,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <X size={15} />
              </button>
            </div>

            {/* Quick Action: Connect Now */}
            <button
              onClick={() => handleConnectNow(activeSchedulingItem)}
              style={{
                width: '100%',
                padding: '11px',
                borderRadius: 10,
                border: 'none',
                background: '#0f6e56',
                color: '#fff',
                fontSize: 13.5,
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                marginBottom: 16
              }}
            >
              <PhoneCall size={16} />
              <span>Call Back Immediately</span>
            </button>

            <div style={{ fontSize: 12, fontWeight: 700, color: '#8e8e93', textTransform: 'uppercase', marginBottom: 8, letterSpacing: 0.5 }}>
              Or Schedule Callback Slot:
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { label: 'In 15 minutes', time: 'Today 3:45 PM' },
                { label: 'Today 4:30 PM (Recommended)', time: 'Today 4:30 PM' },
                { label: 'Today 6:00 PM (After work)', time: 'Today 6:00 PM' },
                { label: 'Tomorrow morning', time: 'Tomorrow 10:30 AM' }
              ].map((slot, si) => (
                <button
                  key={si}
                  onClick={() => handleSelectSlot(activeSchedulingItem, slot.time)}
                  style={{
                    padding: '10px 12px',
                    borderRadius: 9,
                    border: '1px solid #e2e8f0',
                    background: '#f8fafc',
                    color: '#1e293b',
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left'
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#f1f5f9'}
                  onMouseLeave={e => e.currentTarget.style.background = '#f8fafc'}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Clock size={14} color="#64748b" />
                    <span>{slot.label}</span>
                  </div>
                  <span style={{ fontSize: 11.5, color: '#0f6e56', fontWeight: 700 }}>Select →</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Summary Banner */}
      <div className="incoming-summary-box">
        <div className="incoming-summary-col">
          <div className="incoming-summary-num">{missedCalls.length}</div>
          <div className="incoming-summary-lbl">
            Missed today {scheduledCount > 0 ? `(${scheduledCount} scheduled)` : ''}
          </div>
        </div>

        <div className="incoming-summary-divider"></div>

        <div className="incoming-summary-col">
          <div className="incoming-summary-num green">
            ₹{totalValueAtStake.toLocaleString('en-IN')}
          </div>
          <div className="incoming-summary-lbl">Expected value at stake</div>
        </div>
      </div>

      {/* Missed Calls Rows */}
      <div>
        {missedCalls.map((item, idx) => {
          const { call, lead, value } = item;
          const isScheduled = Boolean(scheduledSlots[call.name]);
          const scheduledTime = scheduledSlots[call.name];
          
          const valueTag = lead 
            ? `₹${lead.expectedValue.toLocaleString('en-IN')} expected` 
            : 'New contact';
            
          const signalTag = lead 
            ? (lead.icp >= 80 ? 'Visited store / in CRM' : lead.icp >= 55 ? 'Warm lead' : 'Cold lead')
            : 'No prior record';

          return (
            <div key={idx} className="plan-row">
              <div className="plan-row-head" style={{ cursor: 'default' }}>
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: isScheduled ? '#dcfce7' : '#fdecec',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {isScheduled ? (
                    <Clock size={16} color="#15803d" />
                  ) : (
                    <PhoneMissed size={16} color="#e24b4a" />
                  )}
                </div>

                <div 
                  className="plan-lead-info"
                  onClick={() => lead && onOpenLeadDetail(lead)}
                  style={{ cursor: lead ? 'pointer' : 'default' }}
                  title={lead ? 'Click to inspect lead details' : ''}
                >
                  <div className="plan-lead-name">
                    <span>{call.name || 'Unknown'}</span>
                    {lead && (
                      <span style={{ 
                        fontSize: 10.5, 
                        background: '#e1f5ee', 
                        color: '#0f6e56', 
                        padding: '1px 5px', 
                        borderRadius: 5,
                        fontWeight: 700
                      }}>
                        CRM Lead
                      </span>
                    )}
                    {isScheduled && (
                      <span style={{ 
                        fontSize: 10.5, 
                        background: '#dcfce7', 
                        color: '#15803d', 
                        padding: '1px 6px', 
                        borderRadius: 5,
                        fontWeight: 700,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 3
                      }}>
                        <Check size={11} strokeWidth={3} /> {scheduledTime}
                      </span>
                    )}
                  </div>
                  <div className="plan-lead-interest">
                    Missed {call.time} · {signalTag}
                  </div>
                </div>

                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ 
                    fontSize: 13, 
                    fontWeight: 800, 
                    color: lead ? '#0f6e56' : '#8e8e93' 
                  }}>
                    {valueTag}
                  </div>

                  <div style={{ display: 'flex', gap: 5, justifyContent: 'flex-end', marginTop: 4 }}>
                    {isScheduled ? (
                      <button 
                        className="call-back-btn"
                        onClick={() => handleConnectNow(item)}
                        title={`Call ${call.name} now`}
                        style={{ background: '#15803d' }}
                      >
                        <Phone size={11} />
                        <span>Call now</span>
                      </button>
                    ) : (
                      <button 
                        className="call-back-btn"
                        onClick={() => setActiveSchedulingItem(item)}
                        title={`Schedule callback for ${call.name}`}
                        style={{ background: '#0f6e56' }}
                      >
                        <Phone size={11} />
                        <span>Call back</span>
                      </button>
                    )}

                    {isScheduled && (
                      <button
                        onClick={() => handleCancelScheduled(call.name)}
                        title="Cancel scheduled slot"
                        style={{
                          background: '#f1f5f9',
                          border: 'none',
                          borderRadius: 6,
                          width: 22,
                          height: 22,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#64748b'
                        }}
                      >
                        <X size={13} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
