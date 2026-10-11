import React from 'react';
import { CURRENT_USER } from '../../data/mockData';

export default function ProgressBanner() {
  return (
    <div className="prog-banner">
      <div className="prog-eyebrow">
        <span className="dot"></span>
        <span>My Progress · today</span>
      </div>

      <div className="prog-grid">
        <div className="prog-metric">
          <div className="prog-val">{CURRENT_USER.leadsCreated}</div>
          <div className="prog-delta warn">▲ +1</div>
          <div className="prog-lbl">Leads Created</div>
        </div>

        <div className="prog-metric">
          <div className="prog-val">{CURRENT_USER.leadsCalled}</div>
          <div className="prog-delta good">▲ +2</div>
          <div className="prog-lbl">Leads Called</div>
        </div>
      </div>
    </div>
  );
}
