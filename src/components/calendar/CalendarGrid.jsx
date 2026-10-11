import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function CalendarGrid({ 
  currentDate, 
  selectedDay, 
  invites = [],
  onSelectDay, 
  onPrevMonth, 
  onNextMonth, 
  onJumpToday 
}) {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const monthName = `${monthNames[month]} ${year}`;

  const firstDayOfWeek = new Date(year, month, 1).getDay(); // 0 is Sunday
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Create empty slots for days before the 1st
  const emptyCells = Array.from({ length: firstDayOfWeek });
  const daysCells = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // Check which days have events
  const isEventDay = (day) => {
    // Check if any invite matches this day for this month/year (default October 2026)
    if (month === 9 && year === 2026) {
      return invites.some(inv => inv.day === day);
    }
    // Periodic mock events in other months
    return day === 12 || day === 22 || day === 26;
  };

  const isToday = (day) => {
    // Reference date for simulation is 11 October 2026
    return day === 11 && month === 9 && year === 2026;
  };

  const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  return (
    <div className="cal-card">
      {/* Navigation Bar */}
      <div className="cal-nav-bar">
        <button 
          className="cal-nav-btn" 
          onClick={onPrevMonth}
          title="Previous Month"
          aria-label="Previous Month"
        >
          <ChevronLeft size={16} color="#555" />
        </button>

        <div className="cal-month-label">{monthName}</div>

        <button 
          className="cal-today-btn" 
          onClick={onJumpToday}
          title="Jump to Today (Oct 11, 2026)"
        >
          Today
        </button>

        <button 
          className="cal-nav-btn" 
          onClick={onNextMonth}
          title="Next Month"
          aria-label="Next Month"
        >
          <ChevronRight size={16} color="#555" />
        </button>
      </div>

      {/* Weekdays header */}
      <div className="cal-month-weekdays">
        {weekdays.map((wd, i) => (
          <div key={i} className="cal-weekday-cell">{wd}</div>
        ))}
      </div>

      {/* Month matrix grid */}
      <div className="cal-month-grid">
        {emptyCells.map((_, i) => (
          <div key={`empty-${i}`} className="cal-day-cell empty" />
        ))}

        {daysCells.map((day) => {
          const today = isToday(day);
          const selected = selectedDay === day;
          const hasEvent = isEventDay(day);

          return (
            <div
              key={day}
              className={`cal-day-cell ${today ? 'today' : ''} ${selected ? 'selected' : ''}`}
              onClick={() => onSelectDay(day)}
              title={`Day ${day}${hasEvent ? ' (has scheduled events)' : ''}`}
            >
              <span>{day}</span>
              {hasEvent && <span className="cal-day-cell-dot" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
