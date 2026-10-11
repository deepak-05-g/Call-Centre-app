import React, { useState } from 'react';
import { BarChart3, TrendingUp, Info } from 'lucide-react';
import { CALLS_HANDLED_7DAYS, CSAT_TREND_7DAYS } from '../../data/mockData';

export default function SevenDayCharts() {
  const [hoveredCallDay, setHoveredCallDay] = useState(null);
  const [hoveredCsatDay, setHoveredCsatDay] = useState(null);
  const [chartView, setChartView] = useState('both'); // 'both' | 'calls' | 'csat'

  const activeCallItem = CALLS_HANDLED_7DAYS.find(c => c.day === hoveredCallDay);
  const activeCsatItem = CSAT_TREND_7DAYS.find(c => c.day === hoveredCsatDay);

  return (
    <div className="dash-chart-section" style={{ position: 'relative' }}>
      {/* Chart Section Header with View Toggles */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 8,
        flexWrap: 'wrap',
        gap: 8
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <TrendingUp size={16} color="#0f6e56" />
          <span style={{ fontSize: 13.5, fontWeight: 800, color: '#1a1a1a' }}>
            7-Day Performance Trends
          </span>
        </div>

        <div style={{
          display: 'flex',
          background: '#f1f5f9',
          borderRadius: 8,
          padding: 2,
          gap: 2
        }}>
          {[
            { id: 'both', label: 'All Trends' },
            { id: 'calls', label: 'Calls Handled' },
            { id: 'csat', label: 'CSAT' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setChartView(tab.id)}
              style={{
                border: 'none',
                background: chartView === tab.id ? '#ffffff' : 'transparent',
                color: chartView === tab.id ? '#0f6e56' : '#64748b',
                fontWeight: chartView === tab.id ? 700 : 500,
                fontSize: 11.5,
                padding: '3px 9px',
                borderRadius: 6,
                cursor: 'pointer',
                boxShadow: chartView === tab.id ? '0 1px 3px rgba(0,0,0,0.08)' : 'none'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 1. Calls Handled Chart */}
      {(chartView === 'both' || chartView === 'calls') && (
        <div style={{ marginBottom: chartView === 'both' ? 14 : 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
            <div className="dash-chart-header" style={{ marginBottom: 0 }}>
              Calls handled · last 7 days
            </div>
            {activeCallItem && (
              <span style={{ fontSize: 11, color: '#0f6e56', fontWeight: 700 }}>
                {activeCallItem.day}: {activeCallItem.calls} calls ({activeCallItem.pct}% cap)
              </span>
            )}
          </div>

          <div className="dash-chart-card">
            <div className="dash-bar-row">
              {CALLS_HANDLED_7DAYS.map((item, idx) => (
                <div 
                  key={idx} 
                  className="dash-bar-col"
                  onMouseEnter={() => setHoveredCallDay(item.day)}
                  onMouseLeave={() => setHoveredCallDay(null)}
                >
                  <span className="dash-bar-val">{item.calls}</span>
                  <div 
                    className={`dash-bar ${item.isToday ? 'dash-bar-today' : ''}`}
                    style={{ 
                      height: `${item.pct}%`,
                      transform: hoveredCallDay === item.day ? 'scaleY(1.06)' : 'scaleY(1)',
                      boxShadow: hoveredCallDay === item.day ? '0 2px 8px rgba(15,110,86,0.35)' : 'none'
                    }}
                    title={`${item.day}: ${item.calls} calls handled`}
                  />
                  <span className="dash-bar-day">{item.day}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 2. CSAT Trend Chart */}
      {(chartView === 'both' || chartView === 'csat') && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
            <div className="dash-chart-header" style={{ marginBottom: 0 }}>
              CSAT trend · last 7 days
            </div>
            {activeCsatItem && (
              <span style={{ fontSize: 11, color: '#185fa5', fontWeight: 700 }}>
                {activeCsatItem.day}: {activeCsatItem.csat}% CSAT ({activeCsatItem.isToday ? 'Shift High ★' : 'Target 85% Met'})
              </span>
            )}
          </div>

          <div className="dash-chart-card">
            <div className="dash-bar-row">
              {CSAT_TREND_7DAYS.map((item, idx) => (
                <div 
                  key={idx} 
                  className="dash-bar-col"
                  onMouseEnter={() => setHoveredCsatDay(item.day)}
                  onMouseLeave={() => setHoveredCsatDay(null)}
                >
                  <span className="dash-bar-val">{item.csat}%</span>
                  <div 
                    className={`dash-bar dash-bar-blue ${item.isToday ? 'dash-bar-today' : ''}`}
                    style={{ 
                      height: `${item.pct}%`,
                      transform: hoveredCsatDay === item.day ? 'scaleY(1.06)' : 'scaleY(1)',
                      boxShadow: hoveredCsatDay === item.day ? '0 2px 8px rgba(24,95,165,0.35)' : 'none'
                    }}
                    title={`${item.day}: ${item.csat}% CSAT rating`}
                  />
                  <span className="dash-bar-day">{item.day}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
