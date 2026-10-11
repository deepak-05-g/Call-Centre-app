import React from 'react';
import { PhoneOutgoing, PhoneIncoming, History, PhoneCall } from 'lucide-react';

export default function PlanHeader({ 
  subTab, 
  onSelectSubTab, 
  onStartPracticeCall 
}) {
  const todayFormatted = new Date().toLocaleDateString('en-IN', {
    weekday: 'short',
    day: 'numeric',
    month: 'short'
  });

  return (
    <div className="plan-header">
      <div className="plan-header-top">
        <div>
          <div className="cc-greeting">Today's calling plan</div>
          <div className="cc-name" style={{ fontSize: 17 }}>Planner</div>
        </div>
        <div>
          <span className="plan-date-label">{todayFormatted}</span>
        </div>
      </div>

      <div className="plan-tabs-bar">
        <button 
          className={`plan-tab-btn ${subTab === 'outgoing' ? 'active' : ''}`}
          onClick={() => onSelectSubTab('outgoing')}
        >
          <PhoneOutgoing size={14} />
          <span>Calls to make</span>
        </button>

        <button 
          className={`plan-tab-btn ${subTab === 'incoming' ? 'active' : ''}`}
          onClick={() => onSelectSubTab('incoming')}
        >
          <PhoneIncoming size={14} />
          <span>Incoming</span>
        </button>

        <button 
          className={`plan-tab-btn ${subTab === 'recent' ? 'active' : ''}`}
          onClick={() => onSelectSubTab('recent')}
        >
          <History size={14} />
          <span>Recent</span>
        </button>

        <button 
          className="plan-tab-btn"
          style={{ color: '#fed7aa', marginLeft: 'auto' }}
          onClick={onStartPracticeCall}
          title="Practice a call simulation"
        >
          <PhoneCall size={14} />
          <span>Practise</span>
        </button>
      </div>
    </div>
  );
}
