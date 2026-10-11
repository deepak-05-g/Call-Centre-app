import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { CALL_QUEUE_NOW } from '../../data/mockData';

export default function QueueList({ onNavigatePlan, onCallLead, onInspectLead }) {
  return (
    <div>
      <div className="queue-header" style={{ marginBottom: 6 }}>
        <span className="queue-title">Who's waiting</span>
        <span className="queue-link" onClick={onNavigatePlan}>
          Open planner →
        </span>
      </div>

      <div>
        {CALL_QUEUE_NOW.map((item, idx) => {
          const initials = item.name.split(' ').map(w => w[0]).join('');
          return (
            <div 
              key={idx} 
              className="queue-card"
              style={{ cursor: 'pointer' }}
              onClick={() => onInspectLead ? onInspectLead(item.name) : onNavigatePlan()}
              title={`Inspect ${item.name} in leads modal`}
            >
              <div className="queue-av">{initials}</div>
              
              <div className="queue-info">
                <div className="queue-name">
                  <span>{item.name}</span>
                  <span className={`queue-wait-badge ${item.waitLevel}`}>
                    {item.wait}
                  </span>
                </div>
                <div className="queue-intent" title={item.intent}>
                  {item.intent}
                </div>
              </div>

              <button 
                className="queue-call-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  onCallLead({
                    name: item.name,
                    phone: idx === 0 ? '+91 98450 44321' : '+91 98450 88219',
                    product: item.intent,
                    city: 'Bengaluru · Queue Line'
                  });
                }}
                title={`Call ${item.name}`}
              >
                <Phone size={12} />
                <span>Call</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
