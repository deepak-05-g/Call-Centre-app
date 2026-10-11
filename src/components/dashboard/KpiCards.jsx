import React from 'react';
import { CURRENT_USER } from '../../data/mockData';

export default function KpiCards({ onOpenOgScore, onNavigatePlan }) {
  return (
    <div className="cc-kpi-row">
      {/* 1. OG Score */}
      <div 
        className="cc-kpi" 
        onClick={onOpenOgScore}
        title="View OG Score™ Capability Breakdown"
      >
        <div className="cc-kpi-val">{CURRENT_USER.ogScore}</div>
        <div className="cc-kpi-lbl">OG Score™</div>
        <div className="cc-kpi-trend up">{CURRENT_USER.ogScoreDelta}</div>
      </div>

      {/* 2. Avg Handle Time */}
      <div 
        className="cc-kpi"
        title="Average Handle Time Today"
      >
        <div className="cc-kpi-val">{CURRENT_USER.avgHandleTime}</div>
        <div className="cc-kpi-lbl">Avg Handle Time</div>
        <div className="cc-kpi-trend up">{CURRENT_USER.avgHandleDelta}</div>
      </div>

      {/* 3. CSAT Today */}
      <div 
        className="cc-kpi"
        title="Customer Satisfaction Today"
      >
        <div className="cc-kpi-val">{CURRENT_USER.csatToday}</div>
        <div className="cc-kpi-lbl">CSAT Today</div>
        <div className="cc-kpi-trend up">{CURRENT_USER.csatDelta}</div>
      </div>

      {/* 4. In Queue */}
      <div 
        className="cc-kpi" 
        onClick={onNavigatePlan}
        title="View Queue in Calling Plan"
        style={{ cursor: 'pointer' }}
      >
        <div className="cc-kpi-val">{CURRENT_USER.inQueue}</div>
        <div className="cc-kpi-lbl">In Queue</div>
        <div className="cc-kpi-trend live">● live</div>
      </div>
    </div>
  );
}
