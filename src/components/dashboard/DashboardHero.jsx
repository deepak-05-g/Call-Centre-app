import React from 'react';
import { Calendar as CalendarIcon, ChevronDown } from 'lucide-react';
import { CURRENT_USER } from '../../data/mockData';

export default function DashboardHero({ dateRange = 'This Week', onOpenDateRange }) {
  return (
    <div className="cc-hero-top">
      <div>
        <div className="cc-greeting">Good afternoon 👋</div>
        <div className="cc-name">{CURRENT_USER.name}</div>
        <div className="cc-sub">{CURRENT_USER.store}</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
        <div className="cc-status-pill">
          <span className="cc-live-dot"></span>
          <span>On Queue</span>
        </div>

        <button 
          className="date-filter" 
          onClick={onOpenDateRange}
          title="Change date range filter"
        >
          <CalendarIcon size={13} />
          <span>{dateRange}</span>
          <ChevronDown size={13} />
        </button>
      </div>
    </div>
  );
}
