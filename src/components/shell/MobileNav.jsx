import React from 'react';
import { LayoutDashboard, Phone, Calendar, MessagesSquare } from 'lucide-react';

export default function MobileNav({ activeTab, onSelectTab }) {
  return (
    <nav className="mobile-bottom-nav">
      <button 
        className={`mobile-nav-item ${activeTab === 'dash' ? 'active' : ''}`}
        onClick={() => onSelectTab('dash')}
      >
        <LayoutDashboard size={18} />
        <span>Dashboard</span>
      </button>

      <button 
        className={`mobile-nav-item ${activeTab === 'calls' ? 'active' : ''}`}
        onClick={() => onSelectTab('calls')}
      >
        <Phone size={18} />
        <span>Plan</span>
      </button>

      <button 
        className={`mobile-nav-item ${activeTab === 'calendar' ? 'active' : ''}`}
        onClick={() => onSelectTab('calendar')}
      >
        <Calendar size={18} />
        <span>Calendar</span>
      </button>

      <button 
        className={`mobile-nav-item ${activeTab === 'pulse' ? 'active' : ''}`}
        onClick={() => onSelectTab('pulse')}
      >
        <MessagesSquare size={18} />
        <span>Pulse</span>
      </button>
    </nav>
  );
}
