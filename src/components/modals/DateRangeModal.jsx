import React, { useState } from 'react';
import { Calendar, X, Check } from 'lucide-react';

const PRESETS = [
  { id: 'today', label: 'Today', range: 'Oct 11, 2026' },
  { id: 'yesterday', label: 'Yesterday', range: 'Oct 10, 2026' },
  { id: 'this_week', label: 'This Week', range: 'Oct 05 - Oct 11, 2026' },
  { id: 'this_month', label: 'This Month', range: 'Oct 01 - Oct 31, 2026' },
  { id: 'last_30_days', label: 'Last 30 Days', range: 'Sep 12 - Oct 11, 2026' },
  { id: 'quarter', label: 'Quarter to Date', range: 'Oct 01 - Dec 31, 2026' }
];

export default function DateRangeModal({ isOpen, onClose, currentRange, onApply }) {
  const [selectedPreset, setSelectedPreset] = useState('today');
  const [startDate, setStartDate] = useState('2026-10-11');
  const [endDate, setEndDate] = useState('2026-10-11');

  if (!isOpen) return null;

  const handleSelectPreset = (p) => {
    setSelectedPreset(p.id);
  };

  const handleApply = () => {
    const preset = PRESETS.find(p => p.id === selectedPreset);
    onApply(preset ? preset.range : `${startDate} to ${endDate}`);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="daterange-modal-card" onClick={e => e.stopPropagation()}>
        <div className="daterange-modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, fontSize: 14 }}>
            <Calendar size={17} />
            <span>Select Date Range</span>
          </div>
          <button className="leads-modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={16} />
          </button>
        </div>

        <div className="daterange-body">
          <div style={{ fontSize: 11.5, fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginBottom: 8 }}>
            Quick Presets
          </div>

          <div className="daterange-presets">
            {PRESETS.map(p => (
              <button
                key={p.id}
                className={`daterange-preset-btn ${selectedPreset === p.id ? 'active' : ''}`}
                onClick={() => handleSelectPreset(p)}
              >
                {p.label}
              </button>
            ))}
          </div>

          <div className="daterange-inputs-grid">
            <div>
              <div className="daterange-input-label">Start Date</div>
              <input 
                type="date" 
                className="daterange-input"
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
              />
            </div>
            <div>
              <div className="daterange-input-label">End Date</div>
              <input 
                type="date" 
                className="daterange-input"
                value={endDate}
                onChange={e => setEndDate(e.target.value)}
              />
            </div>
          </div>

          <div className="daterange-actions">
            <button className="daterange-cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button className="daterange-apply-btn" onClick={handleApply}>
              Apply Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
