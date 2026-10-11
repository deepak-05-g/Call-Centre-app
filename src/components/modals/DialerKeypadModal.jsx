import React, { useState } from 'react';
import { Phone, Delete, X, User } from 'lucide-react';
import { LEADS } from '../../data/mockData';

const KEYS = [
  { digit: '1', letters: '' },
  { digit: '2', letters: 'ABC' },
  { digit: '3', letters: 'DEF' },
  { digit: '4', letters: 'GHI' },
  { digit: '5', letters: 'JKL' },
  { digit: '6', letters: 'MNO' },
  { digit: '7', letters: 'PQRS' },
  { digit: '8', letters: 'TUV' },
  { digit: '9', letters: 'WXYZ' },
  { digit: '*', letters: '' },
  { digit: '0', letters: '+' },
  { digit: '#', letters: '' }
];

export default function DialerKeypadModal({ isOpen, onClose, onCall }) {
  const [typedNumber, setTypedNumber] = useState('+91 ');

  if (!isOpen) return null;

  const handleKeyPress = (digit) => {
    if (typedNumber.length < 18) {
      setTypedNumber(prev => prev + digit);
    }
  };

  const handleBackspace = () => {
    if (typedNumber.length > 4) {
      setTypedNumber(prev => prev.slice(0, -1));
    } else {
      setTypedNumber('+91 ');
    }
  };

  const handleClear = () => {
    setTypedNumber('+91 ');
  };

  // Check if typed number matches any lead
  const matchedLead = LEADS.find(l => 
    typedNumber.replace(/[\s+-]/g, '').includes(l.phone?.replace(/[\s+-]/g, '')) ||
    (l.phone && typedNumber.replace(/[\s+-]/g, '').endsWith(l.phone.slice(-6)))
  );

  const handleStartCall = () => {
    const lead = matchedLead || {
      id: 'custom-call',
      name: typedNumber.length > 6 ? `Caller (${typedNumber.slice(-10)})` : 'Direct Dial',
      phone: typedNumber,
      product: 'Inquiry',
      city: 'Direct Line'
    };
    onCall(lead);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="dialer-modal-card" onClick={e => e.stopPropagation()}>
        <div className="dialer-header">
          <div className="dialer-header-title">
            <Phone size={18} />
            <span>On-Ground Dialer</span>
          </div>
          <button className="leads-modal-close-btn" onClick={onClose} aria-label="Close dialer">
            <X size={16} />
          </button>
        </div>

        <div className="dialer-screen">
          <div className="dialer-number-display">
            {typedNumber === '+91 ' ? (
              <span className="dialer-number-placeholder">+91 Enter Phone Number</span>
            ) : (
              typedNumber
            )}
          </div>
          {matchedLead && (
            <div className="dialer-name-preview">
              <User size={12} style={{ display: 'inline', marginRight: 4 }} />
              {matchedLead.name} ({matchedLead.product})
            </div>
          )}
        </div>

        <div className="dialer-body">
          <div className="dialpad-grid">
            {KEYS.map(k => (
              <button 
                key={`dialpad-key-${k.digit}`} 
                className="dialpad-key"
                onClick={() => handleKeyPress(k.digit)}
              >
                <span className="dialpad-digit">{k.digit}</span>
                {k.letters && <span className="dialpad-letters">{k.letters}</span>}
              </button>
            ))}
          </div>

          <div className="dialer-action-row">
            <button 
              className="dialer-backspace-btn"
              onClick={handleClear}
              title="Clear all"
            >
              C
            </button>

            <button 
              className="dialer-call-btn"
              onClick={handleStartCall}
              title="Place call"
            >
              <Phone size={24} />
            </button>

            <button 
              className="dialer-backspace-btn"
              onClick={handleBackspace}
              title="Backspace"
            >
              <Delete size={20} />
            </button>
          </div>

          {/* Quick Speed Dial Chips */}
          <div className="dialer-speed-dial-chips">
            <span style={{ fontSize: 11, color: '#64748b', width: '100%', textAlign: 'center', marginBottom: 2 }}>
              Quick Speed Dial:
            </span>
            {LEADS.slice(0, 3).map((lead, idx) => (
              <button 
                key={`speed-dial-${lead.id || lead.name || idx}`}
                className="dialer-speed-chip"
                onClick={() => {
                  setTypedNumber(lead.phone);
                }}
              >
                📞 {lead.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
