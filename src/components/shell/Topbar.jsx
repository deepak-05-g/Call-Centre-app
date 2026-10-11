import React, { useState } from 'react';
import { Bell, Sparkles, User, Settings, LogOut, CheckCircle2 } from 'lucide-react';
import { CURRENT_USER } from '../../data/mockData';

export default function Topbar({ onOpenOgScore, onOpenRank, onNavigateTab }) {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifMenu, setShowNotifMenu] = useState(false);
  const [notifRead, setNotifRead] = useState(false);

  const notifications = [
    { id: 1, text: 'Sunita Rao gave you Kudos for the Mukunda call', time: '10m ago', unread: true },
    { id: 2, text: 'Reminder: 4:30 PM callback with Mukunda R.', time: '1h ago', unread: true },
    { id: 3, text: 'New lead assigned: Ritu S. (Ortho Mattress)', time: '2h ago', unread: false }
  ];

  return (
    <header className="topbar">
      <div className="topbar-left">
        <div className="brand-logo" title="On-Ground.ai">OG</div>
        <span className="brand-name">On-Ground.ai</span>
      </div>

      <div className="topbar-right">
        {/* Notifications Bell */}
        <div 
          className="notif-bell" 
          title="Notifications"
          onClick={() => {
            setShowNotifMenu(!showNotifMenu);
            setShowUserMenu(false);
            setNotifRead(true);
          }}
        >
          <Bell size={18} />
          {!notifRead && <span className="notif-bell-dot"></span>}
        </div>

        {/* Notifications Menu */}
        {showNotifMenu && (
          <div className="user-dropdown-menu" style={{ width: 280, right: 90 }}>
            <div className="dd-header" style={{ justifyContent: 'space-between' }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#1a1a1a' }}>Notifications</div>
              <span style={{ fontSize: 11, color: '#1d9e75', fontWeight: 600 }}>Mark all read</span>
            </div>
            <div>
              {notifications.map(n => (
                <div 
                  key={n.id} 
                  className="dd-item"
                  style={{ 
                    flexDirection: 'column', 
                    alignItems: 'flex-start', 
                    gap: 3,
                    borderBottom: '1px solid #f2f2f7',
                    background: n.unread && !notifRead ? '#f8fafc' : '#fff'
                  }}
                  onClick={() => {
                    setShowNotifMenu(false);
                    onNavigateTab('pulse');
                  }}
                >
                  <div style={{ fontSize: 12.5, fontWeight: 600, color: '#1a1a1a' }}>{n.text}</div>
                  <div style={{ fontSize: 11, color: '#8e8e93' }}>{n.time}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* OG Score & Rank Pill */}
        <div 
          className="grank-pill"
          title={`OG Score™: ${CURRENT_USER.ogScore} | Rank: ${CURRENT_USER.rank} in ${CURRENT_USER.rankLocation}`}
          onClick={onOpenOgScore}
        >
          <span className="og-ring-sm">
            {CURRENT_USER.ogScore}
          </span>
          <span className="gr-num">
            ⭐{CURRENT_USER.rank}
          </span>
        </div>

        {/* Profile Avatar Badge */}
        <div 
          className="ar-badge"
          onClick={() => {
            setShowUserMenu(!showUserMenu);
            setShowNotifMenu(false);
          }}
        >
          <div className="ar-badge-inner">
            <span className="ar-badge-emoji">{CURRENT_USER.emoji}</span>
            <span className="ar-badge-initials">{CURRENT_USER.initials}</span>
          </div>
        </div>

        {/* User Dropdown */}
        {showUserMenu && (
          <div className="user-dropdown-menu">
            <div className="dd-header">
              <div className="dd-av">{CURRENT_USER.emoji}</div>
              <div>
                <div className="dd-name">{CURRENT_USER.name}</div>
                <div className="dd-store">{CURRENT_USER.store}</div>
              </div>
            </div>
            <div className="dd-item" onClick={onOpenOgScore}>
              <Sparkles size={15} color="#1d9e75" />
              <span>OG Score™ Breakdown ({CURRENT_USER.ogScore})</span>
            </div>
            <div className="dd-item" onClick={() => { setShowUserMenu(false); onNavigateTab('calendar'); }}>
              <CheckCircle2 size={15} color="#185fa5" />
              <span>My Shift & Calendar</span>
            </div>
            <div className="dd-item" style={{ color: '#8e8e93' }}>
              <Settings size={15} />
              <span>Settings (Call Centre)</span>
            </div>
            <div className="dd-item" style={{ color: '#e24b4a', borderTop: '1px solid #f0f0f4' }}>
              <LogOut size={15} />
              <span>Sign out</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
