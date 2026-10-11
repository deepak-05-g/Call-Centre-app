import React from 'react';

export default function KudosHeroCard({ onOpenKudos }) {
  return (
    <div className="kudos-hero-card" onClick={onOpenKudos}>
      <div className="kudos-hero-shine" />

      <div style={{ display: 'flex', alignItems: 'center', gap: 10, position: 'relative', zIndex: 1 }}>
        <div style={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.22)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 20,
          flexShrink: 0,
          boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.3)'
        }}>
          🏆
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ fontSize: 14.5, fontWeight: 800, color: '#fff' }}>Kudos</span>
            <span style={{
              fontSize: 11,
              fontWeight: 800,
              color: '#7c4a00',
              background: '#fff',
              padding: '2px 7px',
              borderRadius: 8
            }}>
              3 NEW
            </span>
          </div>
          <div style={{
            fontSize: 12,
            color: '#fff3d6',
            marginTop: 2,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}>
            "Great work with Mukunda — closed that objection beautifully!" — Sunita Rao
          </div>
        </div>

        <div style={{ textAlign: 'center', flexShrink: 0 }}>
          <div style={{ fontSize: 17, fontWeight: 800, color: '#fff' }}>12</div>
          <div style={{ fontSize: 11, color: '#fff3d6', fontWeight: 700, textTransform: 'uppercase' }}>All-time</div>
        </div>
      </div>
    </div>
  );
}
