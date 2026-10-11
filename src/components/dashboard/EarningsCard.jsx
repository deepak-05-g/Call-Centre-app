import React from 'react';
import { CURRENT_USER } from '../../data/mockData';

export default function EarningsCard() {
  return (
    <div className="earn-card">
      <div className="earn-head">
        <div className="earn-title">💰 My earnings this month</div>
        <div className="earn-sub">₹800 to ₹6,000 slab</div>
      </div>

      <div className="earn-amount-row">
        <div className="earn-amount">
          ₹{CURRENT_USER.earningsMonth.toLocaleString('en-IN')}
        </div>
        <div className="earn-coach">
          ₹{CURRENT_USER.earningsCoached.toLocaleString('en-IN')} from coached moves
        </div>
      </div>

      <div className="earn-progress-bar">
        <div 
          className="earn-progress-fill" 
          style={{ width: `${CURRENT_USER.earningsProgressPct}%` }}
          title={`${CURRENT_USER.earningsProgressPct}% of maximum tier achieved`}
        ></div>
      </div>
    </div>
  );
}
