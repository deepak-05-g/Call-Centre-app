import React from 'react';
import { X, Trophy, Award, Heart } from 'lucide-react';

export default function KudosModal({ onClose }) {
  const kudosList = [
    {
      author: 'Sunita Rao',
      role: 'Manager · Call Centre',
      time: 'Today 10:45 AM',
      text: '"Great work with Mukunda — closed that objection beautifully! Showed fantastic poise on the price-point comparison."',
      reactions: ['🔥 4', '👏 6']
    },
    {
      author: 'Rajesh Nair',
      role: 'ASM · The Sleep Company',
      time: 'Yesterday 5:20 PM',
      text: '"Arvind held top CSAT (94%) across the Koramangala store team for 3 consecutive shifts!"',
      reactions: ['🏆 8', '💪 5']
    },
    {
      author: 'Priya Krishnan',
      role: 'Peer · Tele-caller',
      time: 'Oct 9, 2:15 PM',
      text: '"Thanks for taking over the urgent delivery enquiry while I was on customer lunch break!"',
      reactions: ['❤️ 3', '🙌 4']
    }
  ];

  return (
    <div className="cal-share-overlay" onClick={onClose}>
      <div className="cal-share-card" style={{ maxWidth: 460 }} onClick={e => e.stopPropagation()}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 22 }}>🏆</span>
            <div>
              <div style={{ fontSize: 16, fontWeight: 800, color: '#1a1a1a' }}>Kudos & Recognition</div>
              <div style={{ fontSize: 12, color: '#c8860a', fontWeight: 700 }}>3 NEW · 12 All-time across store</div>
            </div>
          </div>
          <button 
            onClick={onClose}
            style={{
              width: 28,
              height: 28,
              borderRadius: '50%',
              border: 'none',
              background: '#f2f2f7',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={15} color="#555" />
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxHeight: '60vh', overflowY: 'auto' }}>
          {kudosList.map((k, i) => (
            <div 
              key={i}
              style={{
                background: '#fffdfa',
                border: '1px solid #fde3b0',
                borderRadius: 14,
                padding: '12px 14px',
                boxShadow: '0 2px 6px rgba(200, 134, 10, 0.08)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ fontSize: 13.5, fontWeight: 800, color: '#7c4a00' }}>{k.author}</span>
                <span style={{ fontSize: 11, color: '#8e8e93' }}>{k.time}</span>
              </div>
              <div style={{ fontSize: 11.5, color: '#a16207', marginBottom: 6 }}>{k.role}</div>
              <div style={{ fontSize: 13, color: '#1a1a1a', fontStyle: 'italic', lineHeight: 1.45 }}>{k.text}</div>
              <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
                {k.reactions.map((r, ri) => (
                  <span key={ri} style={{ fontSize: 11.5, background: '#fef3c7', padding: '2px 7px', borderRadius: 10, fontWeight: 700 }}>
                    {r}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
