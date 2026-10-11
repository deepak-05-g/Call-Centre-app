import React from 'react';
import { X, Check, XCircle } from 'lucide-react';
import { CALL_SOP_ITEMS } from '../../data/mockData';

export default function CallSopReviewModal({ call, callIdx = 0, onClose }) {
  if (!call) return null;

  // SOP Templates and transcript-style quotes
  const SOP_TEMPLATES = [
    [true, true, true, true, false, true],
    [true, true, false, true, false, false],
    [true, false, true, false, false, true],
    [true, true, true, false, true, true]
  ];

  const SOP_EVIDENCE = [
    [
      '"This is Aditi calling from The Sleep Company, is now an okay time?"',
      '"Can I ask what matters most to you — firmness or price?"',
      '"The GRID layer gives pressure relief exactly where you need it."',
      '"We do have a 6-month no-cost EMI plan if that helps."',
      'No mention of the warranty period anywhere in the call.',
      '"I\'ll send the quote over and follow up Thursday, does that work?"'
    ],
    [
      '"Hi, calling about your enquiry — good time to talk?"',
      '"So tell me, what are you looking for exactly?"',
      'Jumped to price before confirming the customer\'s actual need.',
      '"There\'s an EMI option starting at ₹1,200/month."',
      'No warranty details were shared.',
      'Call ended without confirming a next step or callback time.'
    ],
    [
      '"This is Aditi, is this an alright time to talk?"',
      'Moved straight to pitching without asking what the customer needs.',
      '"This model is our best-seller for back support."',
      'EMI never came up even though the customer asked about total cost.',
      'No warranty mention.',
      '"I\'ll note this down and call you back tomorrow at the same time."'
    ],
    [
      '"Hello, this is Aditi from The Sleep Company."',
      '"What\'s brought this on — any specific concern with sleep or back pain?"',
      '"Given what you described, the Ortho GRID would be the right fit."',
      'Customer asked about payment plans but it wasn\'t addressed on the call.',
      '"It comes with a 10-year warranty, so you\'re covered either way."',
      '"Let\'s lock in delivery for this Friday, I\'ll send the confirmation."'
    ]
  ];

  const template = SOP_TEMPLATES[callIdx % SOP_TEMPLATES.length];
  const evidence = SOP_EVIDENCE[callIdx % SOP_EVIDENCE.length];

  const results = CALL_SOP_ITEMS.map((item, i) => ({
    label: item.label,
    pass: template[i],
    evidence: evidence[i]
  }));

  const passCount = results.filter(r => r.pass).length;
  const pct = Math.round((100 * passCount) / results.length);
  const scoreColor = pct >= 80 ? '#0f6e56' : pct >= 50 ? '#c8860a' : '#e24b4a';

  return (
    <div className="call-sop-overlay" onClick={onClose}>
      <div className="call-sop-card" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="call-sop-header">
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#1a1a1a' }}>
              Call with {call.name}
            </div>
            <div style={{ fontSize: 12.5, color: '#8e8e93', marginTop: 1 }}>
              {call.time} · {call.duration}
            </div>
          </div>
          <button 
            onClick={onClose}
            style={{
              width: 30,
              height: 30,
              borderRadius: '50%',
              border: 'none',
              background: '#f2f2f7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={16} color="#555" />
          </button>
        </div>

        {/* Body */}
        <div className="call-sop-body">
          {/* Adherence Score Box */}
          <div className="sop-score-bar-wrap">
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: '#6b7280' }}>
                SOP adherence on this call
              </div>
              <div style={{
                height: 6,
                background: '#e5e7eb',
                borderRadius: 3,
                marginTop: 6,
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${pct}%`,
                  height: '100%',
                  background: scoreColor,
                  borderRadius: 3
                }} />
              </div>
            </div>
            <div style={{ fontSize: 20, fontWeight: 800, color: scoreColor }}>
              {pct}%
            </div>
          </div>

          {/* Checklist */}
          <div>
            {results.map((r, i) => (
              <div key={i} className="sop-checklist-item">
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  {r.pass ? (
                    <div style={{
                      width: 18,
                      height: 18,
                      borderRadius: '50%',
                      background: '#e1f5ee',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Check size={12} color="#0f6e56" strokeWidth={3} />
                    </div>
                  ) : (
                    <div style={{
                      width: 18,
                      height: 18,
                      borderRadius: '50%',
                      background: '#fdecec',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <X size={12} color="#e24b4a" strokeWidth={3} />
                    </div>
                  )}

                  <span style={{ 
                    fontSize: 13.5, 
                    fontWeight: r.pass ? 500 : 700, 
                    color: '#1a1a1a' 
                  }}>
                    {r.label}
                  </span>

                  {!r.pass && (
                    <span style={{
                      marginLeft: 'auto',
                      fontSize: 11,
                      fontWeight: 700,
                      color: '#e24b4a',
                      background: '#fdecec',
                      padding: '2px 7px',
                      borderRadius: 6
                    }}>
                      Missed
                    </span>
                  )}
                </div>

                <div 
                  className="sop-evidence-quote"
                  style={{
                    color: r.pass ? '#6b7280' : '#b91c1c',
                    fontStyle: r.pass ? 'italic' : 'normal'
                  }}
                >
                  {r.evidence}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
