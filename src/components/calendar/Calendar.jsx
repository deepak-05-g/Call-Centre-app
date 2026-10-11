import React, { useState } from 'react';
import { Calendar as CalendarIcon, Mail } from 'lucide-react';
import CalendarGrid from './CalendarGrid';
import UpcomingInvites from './UpcomingInvites';
import CalShareModal from './CalShareModal';
import { CALENDAR_INVITES } from '../../data/mockData';

export default function Calendar({ onCallLead, onOpenLeadDetail }) {
  // Reference date defaults to October 2026 (matching the assignment scenario)
  const [currentDate, setCurrentDate] = useState(new Date(2026, 9, 11));
  const [selectedDay, setSelectedDay] = useState(11);
  const [shareTargetInvite, setShareTargetInvite] = useState(null);
  const [invitesList, setInvitesList] = useState(CALENDAR_INVITES);

  const handlePrevMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
    setSelectedDay(null);
  };

  const handleNextMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
    setSelectedDay(null);
  };

  const handleJumpToday = () => {
    setCurrentDate(new Date(2026, 9, 11));
    setSelectedDay(11);
  };

  const handleToggleSelectDay = (day) => {
    // Toggling selection: clicking the same day deselects it
    setSelectedDay(prev => prev === day ? null : day);
  };

  const handleShareConfirmed = (invite, recipient) => {
    // Add shared badge to the invite
    setInvitesList(prev => prev.map(inv => {
      if (inv.day === invite.day && inv.title === invite.title) {
        const existing = inv.sharedWith || [];
        return {
          ...inv,
          sharedWith: existing.includes(recipient) ? existing : [...existing, recipient]
        };
      }
      return inv;
    }));
  };

  return (
    <div className="cal-container">
      {/* Calendar Header Bar */}
      <div className="cal-header-bar">
        <div>
          <div className="cal-header-title">
            <CalendarIcon size={18} color="#185fa5" />
            <span>Calendar</span>
          </div>
          <div className="cal-header-sub">
            Mirrored from your mailbox — invites created here land there too
          </div>
        </div>
      </div>

      {/* Mailbox Sync Banner */}
      <div className="cal-sync-banner">
        <div className="cal-sync-icon">
          <Mail size={16} color="#185fa5" />
        </div>
        <div className="cal-sync-text">
          Store visits, coaching sessions, and meeting invites all show up here — and in your mailbox.
        </div>
      </div>

      {/* Month Matrix Grid */}
      <CalendarGrid 
        currentDate={currentDate}
        selectedDay={selectedDay}
        invites={invitesList}
        onSelectDay={handleToggleSelectDay}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
        onJumpToday={handleJumpToday}
      />

      {/* Upcoming Invites Section */}
      <UpcomingInvites 
        currentDate={currentDate}
        selectedDay={selectedDay}
        invites={invitesList}
        onClearDaySelection={() => setSelectedDay(null)}
        onShareInvite={(invite) => setShareTargetInvite(invite)}
      />

      {/* Share Invite Modal */}
      {shareTargetInvite && (
        <CalShareModal 
          invite={shareTargetInvite}
          onClose={() => setShareTargetInvite(null)}
          onShareSuccess={(recipient) => handleShareConfirmed(shareTargetInvite, recipient)}
        />
      )}
    </div>
  );
}
