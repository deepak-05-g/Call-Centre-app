import React from 'react';
import { Pin, Sparkles } from 'lucide-react';

export default function PulseChannelsList({ onSelectChannel, pinnedCount = 1 }) {
  const channels = [
    {
      id: 'Call Centre Team',
      name: 'callcentre-team',
      meta: 'Manager: Review call QA scores this week!',
      icon: '#',
      time: null,
      badge: 1,
      hasPin: true
    },
    {
      id: 'All Stores',
      name: 'all-stores',
      meta: 'New Ortho Grid campaign from 1 June!',
      icon: '#',
      time: '10:22am',
      badge: 4,
      hasPin: false
    },
    {
      id: 'Avani AI Coaching',
      name: 'avani-coaching',
      meta: 'Your warranty score dropped 12% this week',
      icon: 'sparkle',
      time: '9:01am',
      badge: 1,
      hasPin: false
    },
    {
      id: 'Manage Shipment',
      name: 'manage-shipment',
      meta: '📦 Ortho Grid Pro — ready for delivery ✓',
      icon: '#',
      time: '10:05am',
      badge: 1,
      hasPin: false
    },
    {
      id: 'Quotation Tickets',
      name: 'quotation-tickets',
      meta: '🎫 Quotation approval — awaiting approval',
      icon: '#',
      time: '9:12am',
      badge: 1,
      hasPin: false
    },
    {
      id: 'New Hire Onboarding',
      name: 'new-hire-onboarding',
      meta: '🎉 Welcome to the team!',
      icon: '#',
      time: '8:30am',
      badge: null,
      hasPin: false
    }
  ];

  const dms = [
    {
      name: 'Sunita Rao',
      initials: 'SR',
      bg: '#FFD700',
      color: '#3a2a00',
      isManager: true,
      lastMsg: '🌟 Great work with Mukunda — keep it up',
      time: '12:40pm'
    },
    {
      name: 'Priya Krishnan',
      initials: 'PK',
      bg: '#fdecec',
      color: '#c23331',
      isManager: false,
      lastMsg: 'Can you cover my 3pm slot today?',
      time: '9:55am'
    },
    {
      name: 'Raju Kumar',
      initials: 'RK',
      bg: '#e1f5ee',
      color: '#0f6e56',
      isManager: false,
      lastMsg: 'Nice cross-sell on the Tranquo chair! 🔥',
      time: 'Yesterday'
    }
  ];

  return (
    <div>
      {/* General Section */}
      <div className="slack-section-label">General</div>
      <div 
        className="slack-ch-row"
        onClick={() => onSelectChannel('customer-discussions')}
      >
        <span className="slack-ch-hash" style={{ color: '#25D366', fontSize: 16 }}>💬</span>
        <div className="slack-ch-body">
          <div className="slack-ch-name">customer-discussions</div>
          <div className="slack-ch-meta">Relayed via WhatsApp Business</div>
        </div>
        <span className="slack-ch-badge">2</span>
      </div>

      {/* Channels Section */}
      <div className="slack-section-label">Channels</div>
      {channels.map(ch => (
        <div 
          key={ch.id}
          className="slack-ch-row"
          onClick={() => onSelectChannel(ch.id)}
        >
          <span className="slack-ch-hash">
            {ch.icon === 'sparkle' ? (
              <Sparkles size={14} color="#7c3aed" style={{ display: 'inline-block', verticalAlign: 'middle' }} />
            ) : (
              ch.icon
            )}
          </span>
          <div className="slack-ch-body">
            <div className="slack-ch-name">
              <span>{ch.name}</span>
              {ch.hasPin && pinnedCount > 0 && (
                <span className="slack-ch-pin-badge" title="Needs your input">
                  <Pin size={10} /> {pinnedCount}
                </span>
              )}
            </div>
            <div className="slack-ch-meta">{ch.meta}</div>
          </div>
          {ch.time && <span style={{ fontSize: 11, color: '#8e8e93', marginRight: 4 }}>{ch.time}</span>}
          {ch.badge && (
            <span 
              className="slack-ch-badge"
              style={ch.hasPin ? { background: '#fef3c7', color: '#b45309' } : {}}
            >
              {ch.badge}
            </span>
          )}
        </div>
      ))}

      {/* Direct Messages Section */}
      <div className="slack-section-label">Direct Messages</div>
      {dms.map(dm => (
        <div 
          key={dm.name}
          className="slack-ch-row"
          onClick={() => onSelectChannel(dm.name)}
        >
          <div style={{
            width: 26,
            height: 26,
            borderRadius: '50%',
            background: dm.bg,
            color: dm.color,
            fontSize: 11,
            fontWeight: 800,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            {dm.initials}
          </div>

          <div className="slack-ch-body">
            <div className="slack-ch-name">
              <span>{dm.name}</span>
              {dm.isManager && (
                <span style={{
                  fontSize: 10,
                  fontWeight: 800,
                  background: '#FFD700',
                  color: '#3a2a00',
                  padding: '1px 5px',
                  borderRadius: 4
                }}>
                  MGR
                </span>
              )}
            </div>
            <div className="slack-ch-meta">{dm.lastMsg}</div>
          </div>
          <span style={{ fontSize: 11, color: '#8e8e93' }}>{dm.time}</span>
        </div>
      ))}
    </div>
  );
}
