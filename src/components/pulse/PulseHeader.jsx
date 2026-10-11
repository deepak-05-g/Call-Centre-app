import React, { useState } from 'react';
import { Plus } from 'lucide-react';

export default function PulseHeader({ onOpenChat }) {
  const [showNewMenu, setShowNewMenu] = useState(false);

  return (
    <div className="pulse-header">
      <div className="pulse-header-brand">
        <div className="pulse-logo-badge">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="1" y="1" width="5" height="5" rx="1.5" fill="#E01E5A"/>
            <rect x="10" y="1" width="5" height="5" rx="1.5" fill="#36C5F0"/>
            <rect x="1" y="10" width="5" height="5" rx="1.5" fill="#2EB67D"/>
            <rect x="10" y="10" width="5" height="5" rx="1.5" fill="#ECB22E"/>
          </svg>
        </div>
        <div className="pulse-title-wrap">
          <span className="pulse-title">Pulse</span>
          <span className="pulse-sub">The Sleep Company · Koramangala</span>
        </div>
      </div>

      <div style={{ position: 'relative' }}>
        <button 
          className="pulse-new-btn"
          onClick={() => setShowNewMenu(!showNewMenu)}
          title="New Message"
        >
          <Plus size={16} strokeWidth={3} />
        </button>

        {showNewMenu && (
          <div className="user-dropdown-menu" style={{ width: 220, right: 0 }}>
            <div style={{ padding: '8px 12px 4px', fontSize: 11, fontWeight: 700, color: '#8e8e93', textTransform: 'uppercase' }}>
              Direct message
            </div>
            <div 
              className="dd-item"
              onClick={() => {
                setShowNewMenu(false);
                onOpenChat('Sunita Rao', 'SR', '#FFD700', 'manager');
              }}
            >
              <span style={{ width: 22, height: 22, borderRadius: '50%', background: '#FFD700', color: '#3a2a00', fontSize: 11, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>SR</span>
              <span>Sunita Rao</span>
            </div>
            <div 
              className="dd-item"
              onClick={() => {
                setShowNewMenu(false);
                onOpenChat('Priya Krishnan', 'PK', '#fdecec', 'peer');
              }}
            >
              <span style={{ width: 22, height: 22, borderRadius: '50%', background: '#fdecec', color: '#c23331', fontSize: 11, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>PK</span>
              <span>Priya Krishnan</span>
            </div>
            <div 
              className="dd-item"
              onClick={() => {
                setShowNewMenu(false);
                onOpenChat('Raju Kumar', 'RK', '#e1f5ee', 'peer');
              }}
            >
              <span style={{ width: 22, height: 22, borderRadius: '50%', background: '#e1f5ee', color: '#0f6e56', fontSize: 11, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>RK</span>
              <span>Raju Kumar</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
