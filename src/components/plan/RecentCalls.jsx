import React from 'react';
import { PhoneIncoming, PhoneOutgoing, PhoneMissed, ChevronRight } from 'lucide-react';
import { DIALER_RECENT_CALLS } from '../../data/mockData';

export default function RecentCalls({ onSelectCall }) {
  const getDirIcon = (dir) => {
    switch (dir) {
      case 'in':
        return {
          icon: <PhoneIncoming size={16} color="#0f6e56" />,
          bg: '#e1f5ee'
        };
      case 'out':
        return {
          icon: <PhoneOutgoing size={16} color="#185fa5" />,
          bg: '#e8f0fe'
        };
      case 'missed':
        return {
          icon: <PhoneMissed size={16} color="#e24b4a" />,
          bg: '#fdecec'
        };
      default:
        return {
          icon: <PhoneOutgoing size={16} color="#185fa5" />,
          bg: '#e8f0fe'
        };
    }
  };

  return (
    <div style={{ padding: '0 4px' }}>
      <div style={{ marginBottom: 12 }}>
        <div className="plan-section-title">Recent calls</div>
        <div className="plan-section-sub">Tap a call to review it against SOP</div>
      </div>

      <div>
        {DIALER_RECENT_CALLS.map((call, idx) => {
          const dirInfo = getDirIcon(call.dir);

          return (
            <div key={idx} className="plan-row">
              <div 
                className="recent-row-head"
                onClick={() => onSelectCall(idx, call)}
                title="Tap to review call against SOP"
              >
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: dirInfo.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {dirInfo.icon}
                </div>

                <div className="plan-lead-info">
                  <div className="plan-lead-name">
                    <span>{call.name}</span>
                    {call.outcome && (
                      <span className="recent-outcome-tag">
                        {call.outcome}
                      </span>
                    )}
                  </div>
                  <div className="plan-lead-interest">
                    {call.time} · {call.duration}
                  </div>
                </div>

                <ChevronRight size={15} color="#c5c5c5" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
