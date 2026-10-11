import React, { useState } from 'react';
import { Pin, ChevronDown, ChevronUp, CheckCircle, AlertCircle } from 'lucide-react';

export default function PinnedInputCard({ onAnswer, isResolved = false, resolvedText = '' }) {
  const [isOpen, setIsOpen] = useState(true);
  const [customText, setCustomText] = useState('');
  const [errorText, setErrorText] = useState('');

  if (isResolved) {
    return (
      <div 
        className="pinned-input-bar" 
        style={{ 
          background: '#f0fdf4', 
          borderBottom: '1.5px solid #22c55e',
          padding: '9px 14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#15803d', fontSize: 13, fontWeight: 700 }}>
          <CheckCircle size={16} />
          <span>{resolvedText || 'Callback confirmed — cleared from this channel ✓'}</span>
        </div>
      </div>
    );
  }

  const handleSelectOption = (text, actionType) => {
    setErrorText('');
    onAnswer(text, actionType);
  };

  const handleCustomSend = () => {
    const trimmed = customText.trim();
    if (!trimmed) {
      setErrorText('Type an answer first');
      return;
    }
    setErrorText('');
    onAnswer(trimmed, 'custom');
    setCustomText('');
  };

  return (
    <div className="pinned-input-bar">
      {/* Pinned Card Head */}
      <div className="pinned-head" onClick={() => setIsOpen(!isOpen)} style={{ userSelect: 'none' }}>
        <Pin size={15} color="#b45309" />
        <span className="pinned-title">Needs your input</span>
        <span className="pinned-count-badge">1</span>
        <span className="pinned-tag">pinned</span>
        <div style={{ marginLeft: 'auto', color: '#b45309' }}>
          {isOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
        </div>
      </div>

      {!isOpen && (
        <div style={{ fontSize: 12.5, color: '#4b5563', marginTop: 4, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          Confirm the 4:30pm callback with Mukunda R.
        </div>
      )}

      {/* Pinned Card Body */}
      {isOpen && (
        <div className="pinned-task-box">
          <div className="pinned-task-q">Confirm the 4:30pm callback</div>
          <div className="pinned-task-ctx">Can you take the 4:30pm call with Mukunda R.?</div>

          {/* Action Buttons */}
          <div className="pinned-opts-row">
            <button 
              type="button"
              className="pinned-opt-btn"
              onClick={() => handleSelectOption("Yes, I'll take it", 'accept')}
            >
              Yes, I'll take it
            </button>
            <button 
              type="button"
              className="pinned-opt-btn"
              onClick={() => handleSelectOption("Reassign to Priya", 'reassign')}
            >
              Reassign to Priya
            </button>
          </div>

          {/* Inline Input & Send */}
          <div className="pinned-input-row">
            <input 
              type="text"
              className="pinned-text-input"
              placeholder="Or type your answer"
              value={customText}
              onChange={(e) => {
                setCustomText(e.target.value);
                if (errorText) setErrorText('');
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleCustomSend();
                }
              }}
            />
            <button 
              type="button"
              className="pinned-send-btn"
              onClick={handleCustomSend}
            >
              Send
            </button>
          </div>

          {errorText && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11.5, color: '#dc2626', marginTop: 4, fontWeight: 600 }}>
              <AlertCircle size={13} />
              <span>{errorText}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
