import React from 'react';
import { Sparkles, MessageCircle } from 'lucide-react';

export default function AvaniHeroCard({ onOpenAvani }) {
  return (
    <div className="avani-hero-card" onClick={() => onOpenAvani('AvaniBot')}>
      <div className="avani-hero-shine" />

      <div style={{ display: 'flex', alignItems: 'center', gap: 10, position: 'relative', zIndex: 1, marginBottom: 10 }}>
        <div style={{
          width: 38,
          height: 38,
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.18)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 18,
          flexShrink: 0,
          boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.25)'
        }}>
          ✨
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ fontSize: 15, fontWeight: 800, color: '#fff' }}>AvaniBot</span>
            <span style={{
              fontSize: 11,
              fontWeight: 800,
              color: '#fff',
              background: 'rgba(255, 255, 255, 0.2)',
              padding: '2px 7px',
              borderRadius: 8,
              letterSpacing: 0.3
            }}>
              ALWAYS ON
            </span>
          </div>
          <div style={{ fontSize: 12, color: '#e4d9fc', marginTop: 2 }}>
            Ask me about anything happening in Pulse — daily briefs, action items, quick answers
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 8, position: 'relative', zIndex: 1 }}>
        <button 
          className="avani-hero-btn"
          onClick={(e) => {
            e.stopPropagation();
            onOpenAvani('daily_brief');
          }}
        >
          <Sparkles size={14} />
          <span>Daily Brief</span>
        </button>

        <button 
          className="avani-hero-btn"
          onClick={(e) => {
            e.stopPropagation();
            onOpenAvani('ask_question');
          }}
        >
          <MessageCircle size={14} />
          <span>Ask a question</span>
        </button>
      </div>
    </div>
  );
}
