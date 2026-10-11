import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ChevronRight } from 'lucide-react';
import { STAFF_AGENT_TASKS } from '../../data/mockData';

export default function CustomAgentsFold({ onOpenAgentChannel }) {
  const [isOpen, setIsOpen] = useState(false);

  const agentsList = Object.entries(STAFF_AGENT_TASKS).map(([id, data]) => ({
    id,
    ...data
  }));

  return (
    <div className="custom-agents-card">
      <div 
        className="custom-agents-head"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span style={{
          width: 30,
          height: 30,
          borderRadius: 9,
          background: '#f1ecff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          fontSize: 16
        }}>
          ✨
        </span>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 14, fontWeight: 800, color: '#1a1a1a' }}>Custom Agents</div>
          <div style={{ fontSize: 12, color: '#8e8e93' }}>
            Set up by your manager — already live, tap to open
          </div>
        </div>

        {isOpen ? <ChevronUp size={16} color="#8e8e93" /> : <ChevronDown size={16} color="#8e8e93" />}
      </div>

      {isOpen && (
        <div className="custom-agents-body">
          {agentsList.map(agent => (
            <div
              key={agent.id}
              onClick={() => onOpenAgentChannel(agent.title)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '8px 10px',
                borderRadius: 10,
                background: '#faf8ff',
                border: '1px solid #ede6fa',
                cursor: 'pointer',
                transition: 'background 0.15s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#f2ecfc'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#faf8ff'}
            >
              <span style={{ fontSize: 17 }}>{agent.icon}</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#1a1a1a' }}>{agent.title}</div>
                <div style={{ fontSize: 11.5, color: '#7c3aed' }}>{agent.sub}</div>
              </div>
              <ChevronRight size={14} color="#8e8e93" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
