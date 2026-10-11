import React from 'react';
import { Share2, Users, CalendarDays } from 'lucide-react';

export default function UpcomingInvites({ 
  currentDate,
  selectedDay, 
  invites = [],
  onClearDaySelection,
  onShareInvite 
}) {
  const monthShort = currentDate.toLocaleDateString('en-US', { month: 'short' });
  const isOctober2026 = currentDate.getMonth() === 9 && currentDate.getFullYear() === 2026;

  // Filter based on selected day if set
  const filteredList = selectedDay 
    ? (isOctober2026 ? invites.filter(inv => inv.day === selectedDay) : [])
    : invites;

  return (
    <div>
      <div className="cal-upcoming-header">
        <span>{selectedDay ? `Events for ${monthShort} ${selectedDay}` : 'Upcoming'}</span>
        {selectedDay && (
          <button 
            onClick={onClearDaySelection}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#185fa5',
              fontSize: 12,
              fontWeight: 700,
              cursor: 'pointer',
              marginLeft: 'auto'
            }}
          >
            View all
          </button>
        )}
      </div>

      <div style={{ paddingBottom: 24 }}>
        {filteredList.length > 0 ? (
          filteredList.map((item, idx) => (
            <div 
              key={idx} 
              className="cal-invite-item"
            >
              <div className="cal-invite-time-col">
                <div className="cal-invite-time">
                  {item.time.split(' ')[0]}
                  <br />
                  <span style={{ fontSize: 10, color: '#8e8e93' }}>{item.time.split(' ')[1]}</span>
                </div>
              </div>

              <div className="cal-invite-body">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="cal-invite-title">{item.title}</div>
                    <div className="cal-invite-meta">
                      <Users size={12} color="#8e8e93" style={{ flexShrink: 0 }} />
                      <span>{item.meta}</span>
                    </div>

                    {/* Shared recipient chips */}
                    {item.sharedWith && item.sharedWith.length > 0 && (
                      <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', marginTop: 6 }}>
                        {item.sharedWith.map((name, sIdx) => (
                          <span 
                            key={sIdx}
                            style={{
                              fontSize: 11,
                              fontWeight: 700,
                              color: '#0f6e56',
                              background: '#e1f5ee',
                              padding: '2px 7px',
                              borderRadius: 8
                            }}
                          >
                            Shared with {name} ✓
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <button 
                    className="cal-share-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      onShareInvite(item);
                    }}
                    title="Share this invite with manager or team"
                  >
                    <Share2 size={13} color="#7c3aed" />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          /* Empty day fallback matching the mock */
          <div style={{
            margin: '0 12px 8px',
            padding: '22px 14px',
            textAlign: 'center',
            background: '#fafbfc',
            border: '1px dashed #e5e5ea',
            borderRadius: 14
          }}>
            <div style={{ fontSize: 26, marginBottom: 6 }}>🗓️</div>
            <div style={{ fontSize: 13, color: '#a0a0a8', fontWeight: 600 }}>
              Nothing scheduled on {monthShort} {selectedDay}
            </div>
            <button 
              onClick={onClearDaySelection}
              style={{
                marginTop: 8,
                background: 'transparent',
                border: 'none',
                color: '#185fa5',
                fontSize: 12.5,
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              Show all upcoming invites →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
