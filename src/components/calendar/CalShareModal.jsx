import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import { CAL_SHARE_OPTIONS } from '../../data/mockData';

export default function CalShareModal({ invite, onClose, onShareSuccess }) {
  const [sharedWith, setSharedWith] = useState(null);

  if (!invite) return null;

  const handleShare = (opt) => {
    setSharedWith(opt.label);
    if (onShareSuccess) {
      onShareSuccess(opt.label);
    }
    setTimeout(() => {
      onClose();
    }, 1100);
  };

  return (
    <div className="cal-share-overlay" onClick={onClose}>
      <div className="cal-share-card" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#1a1a1a' }}>Share invite</div>
            <div style={{ fontSize: 13, color: '#6b7280', marginTop: 2 }}>{invite.title} · Oct {invite.day}</div>
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

        {sharedWith ? (
          <div style={{
            background: '#e1f5ee',
            color: '#0f6e56',
            borderRadius: 12,
            padding: '16px',
            textAlign: 'center',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8
          }}>
            <Check size={18} />
            <span>Invite successfully shared with {sharedWith}!</span>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#8e8e93', textTransform: 'uppercase', marginBottom: 2 }}>
              Select recipient
            </div>

            {CAL_SHARE_OPTIONS.map((opt) => (
              <div 
                key={opt.id}
                onClick={() => handleShare(opt)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '10px 12px',
                  borderRadius: 12,
                  border: '1px solid #e5e5ea',
                  cursor: 'pointer',
                  transition: 'background 0.15s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#f8fafc'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#fff'}
              >
                <span style={{ fontSize: 20 }}>{opt.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13.5, fontWeight: 700, color: '#1a1a1a' }}>{opt.label}</div>
                  <div style={{ fontSize: 12, color: '#8e8e93' }}>{opt.sub}</div>
                </div>
                <button 
                  style={{
                    background: '#185fa5',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 8,
                    padding: '4px 10px',
                    fontSize: 12,
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Send
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
