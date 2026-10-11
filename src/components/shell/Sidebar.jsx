import React from 'react';
import { 
  LayoutDashboard, 
  Phone, 
  PhoneOutgoing, 
  PhoneIncoming, 
  History, 
  PhoneCall, 
  Calendar, 
  MessagesSquare 
} from 'lucide-react';

export default function Sidebar({ 
  activeTab, 
  planSubTab, 
  onSelectTab, 
  onSelectPlanSubTab,
  onStartPracticeCall
}) {
  return (
    <aside className="app-sidebar">
      {/* 1. Dashboard */}
      <button 
        className={`ios-nav-item ${activeTab === 'dash' ? 'active' : ''}`}
        data-tab="dash"
        onClick={() => onSelectTab('dash')}
        title="Dashboard"
      >
        <span className="in-icon">
          <LayoutDashboard size={17} />
        </span>
        <span className="in-label">Dashboard</span>
      </button>

      {/* 2. Plan */}
      <button 
        className={`ios-nav-item ${activeTab === 'calls' ? 'active' : ''}`}
        data-tab="calls"
        onClick={() => {
          onSelectTab('calls');
          if (!planSubTab) onSelectPlanSubTab('outgoing');
        }}
        title="Calling Plan"
      >
        <span className="in-icon">
          <Phone size={17} />
        </span>
        <span className="in-label">Plan</span>
      </button>

      {/* Plan Sub Navigation */}
      {activeTab === 'calls' && (
        <div className="ios-nav-sub">
          <button 
            className={`ios-nav-sub-item ${planSubTab === 'outgoing' ? 'active' : ''}`}
            onClick={() => onSelectPlanSubTab('outgoing')}
          >
            <PhoneOutgoing size={13} />
            <span>Calls to make</span>
          </button>
          <button 
            className={`ios-nav-sub-item ${planSubTab === 'incoming' ? 'active' : ''}`}
            onClick={() => onSelectPlanSubTab('incoming')}
          >
            <PhoneIncoming size={13} />
            <span>Incoming</span>
          </button>
          <button 
            className={`ios-nav-sub-item ${planSubTab === 'recent' ? 'active' : ''}`}
            onClick={() => onSelectPlanSubTab('recent')}
          >
            <History size={13} />
            <span>Recent</span>
          </button>
          <button 
            className="ios-nav-sub-item"
            style={{ color: '#e0a52f' }}
            onClick={onStartPracticeCall}
            title="Simulate practice call"
          >
            <PhoneCall size={13} />
            <span>Practise a call</span>
          </button>
        </div>
      )}

      {/* 3. Calendar */}
      <button 
        className={`ios-nav-item ${activeTab === 'calendar' ? 'active' : ''}`}
        data-tab="calendar"
        onClick={() => onSelectTab('calendar')}
        title="Calendar"
      >
        <span className="in-icon">
          <Calendar size={17} />
        </span>
        <span className="in-label">Calendar</span>
      </button>

      {/* 4. Pulse */}
      <button 
        className={`ios-nav-item ${activeTab === 'pulse' ? 'active' : ''}`}
        data-tab="pulse"
        onClick={() => onSelectTab('pulse')}
        title="Pulse Channels & Team"
      >
        <span className="in-icon">
          <MessagesSquare size={17} />
        </span>
        <span className="in-label">Pulse</span>
      </button>
    </aside>
  );
}
