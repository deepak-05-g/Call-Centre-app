import React, { useState } from 'react';
import { Phone, CheckCircle, Info } from 'lucide-react';
import Topbar from './components/shell/Topbar';
import Sidebar from './components/shell/Sidebar';
import MobileNav from './components/shell/MobileNav';

// Screens
import Dashboard from './components/dashboard/Dashboard';
import Plan from './components/plan/Plan';
import Calendar from './components/calendar/Calendar';
import Pulse from './components/pulse/Pulse';

// Modals
import LeadsModal from './components/modals/LeadsModal';
import ActiveCallModal from './components/modals/ActiveCallModal';
import DialerKeypadModal from './components/modals/DialerKeypadModal';
import OgScoreModal from './components/modals/OgScoreModal';
import DateRangeModal from './components/modals/DateRangeModal';

import { LEADS, RECENT_CALLS } from './data/mockData';

export default function App() {
  // Navigation State
  const [activeTab, setActiveTab] = useState('dash');
  const [planSubTab, setPlanSubTab] = useState('outgoing');
  const [pulseInitialChannel, setPulseInitialChannel] = useState(null);

  // Filter State
  const [dateRange, setDateRange] = useState('Today, 11 Oct 2026');
  const [showDateModal, setShowDateModal] = useState(false);

  // Modals State
  const [showLeadsModal, setShowLeadsModal] = useState(false);
  const [selectedLeadIdx, setSelectedLeadIdx] = useState(0);

  const [activeCallLead, setActiveCallLead] = useState(null);
  const [showDialerModal, setShowDialerModal] = useState(false);
  const [showOgScoreModal, setShowOgScoreModal] = useState(false);

  // Notification Toast
  const [toast, setToast] = useState(null);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => {
      setToast(null);
    }, 3200);
  };

  // Handlers
  const handleCallLead = (lead) => {
    setActiveCallLead(lead);
    setShowDialerModal(false);
    setShowLeadsModal(false);
  };

  const handleStartPracticeCall = () => {
    setActiveCallLead({
      id: 'practice-avani',
      name: 'Avani AI Practice Partner',
      phone: '+91 800-PRACTICE',
      product: 'Sony Bravia 55" 4K Google TV',
      city: 'Bengaluru (Simulation)',
      isPractice: true
    });
  };

  const handleOpenLeadDetail = (leadOrIdx) => {
    if (typeof leadOrIdx === 'number') {
      setSelectedLeadIdx(leadOrIdx);
    } else if (typeof leadOrIdx === 'string') {
      const idx = LEADS.findIndex(l => l.name.toLowerCase().includes(leadOrIdx.toLowerCase()));
      setSelectedLeadIdx(idx >= 0 ? idx : 0);
    } else if (leadOrIdx && (leadOrIdx.id || leadOrIdx.name)) {
      const name = leadOrIdx.name || '';
      const idx = LEADS.findIndex(l => 
        (leadOrIdx.id && l.id === leadOrIdx.id) || 
        (name && l.name.toLowerCase().includes(name.toLowerCase()))
      );
      setSelectedLeadIdx(idx >= 0 ? idx : 0);
    } else {
      setSelectedLeadIdx(0);
    }
    setShowLeadsModal(true);
  };

  const handleSelectTask = (task) => {
    if (task.id === 'w1' || task.id === 't1') {
      // 2 callbacks next 4:30pm (e.g. Mukunda)
      const mukundaIdx = LEADS.findIndex(l => l.name.includes('Mukunda'));
      setSelectedLeadIdx(mukundaIdx >= 0 ? mukundaIdx : 0);
      setShowLeadsModal(true);
    } else if (task.id === 'w2' || task.id === 't2') {
      // 2 hot leads untouched 24h (e.g. Kavitha)
      const leadIdx = LEADS.findIndex(l => l.name.includes('Kavitha'));
      setSelectedLeadIdx(leadIdx >= 0 ? leadIdx : 1);
      setShowLeadsModal(true);
    } else if (task.id === 'w3' || task.id === 't3') {
      // 1 outcome to log (e.g. Faizan)
      const faizanIdx = LEADS.findIndex(l => l.name.includes('Faizan'));
      setSelectedLeadIdx(faizanIdx >= 0 ? faizanIdx : 2);
      setShowLeadsModal(true);
    } else if (task.leadName) {
      const idx = LEADS.findIndex(l => l.name.includes(task.leadName));
      setSelectedLeadIdx(idx >= 0 ? idx : 0);
      setShowLeadsModal(true);
    } else {
      handleOpenLeadDetail(0);
    }
  };

  const handleCallEnded = ({ lead, outcome, notes, durationSeconds }) => {
    showToast(`Call ended (${durationSeconds}s) · Logged as "${outcome}"`);
  };

  return (
    <div className="app-shell">
      {/* Top Header */}
      <Topbar 
        onOpenOgScore={() => setShowOgScoreModal(true)}
        onOpenRank={() => setShowOgScoreModal(true)}
        onNavigateTab={(tab) => {
          setActiveTab(tab);
          if (tab === 'pulse') setPulseInitialChannel(null);
        }}
      />

      <div className="app-body">
        {/* Left Navigation Sidebar */}
        <Sidebar 
          activeTab={activeTab}
          planSubTab={planSubTab}
          onSelectTab={(tab) => {
            setActiveTab(tab);
            if (tab === 'pulse') setPulseInitialChannel(null);
          }}
          onSelectPlanSubTab={(sub) => setPlanSubTab(sub)}
          onStartPracticeCall={handleStartPracticeCall}
        />

        {/* Main Content Area */}
        <main className="app-main-content">
          <div className="screen-container">
            {activeTab === 'dash' && (
              <Dashboard 
                dateRange={dateRange}
                onOpenDateRange={() => setShowDateModal(true)}
                onOpenOgScore={() => setShowOgScoreModal(true)}
                onNavigatePlan={(sub) => {
                  setActiveTab('calls');
                  if (sub) setPlanSubTab(sub);
                }}
                onCallLead={handleCallLead}
                onSelectTask={handleSelectTask}
                onInspectLead={handleOpenLeadDetail}
              />
            )}

            {activeTab === 'calls' && (
              <Plan 
                subTab={planSubTab}
                onSelectSubTab={(sub) => setPlanSubTab(sub)}
                onPlaceCall={handleCallLead}
                onOpenLeadDetail={handleOpenLeadDetail}
                onStartPracticeCall={handleStartPracticeCall}
              />
            )}

            {activeTab === 'calendar' && (
              <Calendar 
                onCallLead={handleCallLead}
                onOpenLeadDetail={handleOpenLeadDetail}
              />
            )}

            {activeTab === 'pulse' && (
              <Pulse 
                initialChannel={pulseInitialChannel}
                onOpenLeadDetail={handleOpenLeadDetail}
                onCallLead={handleCallLead}
              />
            )}
          </div>
        </main>
      </div>

      {/* Floating Dialer Keypad FAB Button */}
      <button 
        className="floating-dialpad-btn" 
        onClick={() => setShowDialerModal(true)}
        title="Open Phone Dialer"
        aria-label="Open Phone Dialer Keypad"
      >
        <Phone size={22} />
      </button>

      {/* Mobile Bottom Navigation */}
      <MobileNav 
        activeTab={activeTab}
        onSelectTab={(tab) => {
          setActiveTab(tab);
          if (tab === 'pulse') setPulseInitialChannel(null);
        }}
      />

      {/* Leads Inspection Modal */}
      <LeadsModal 
        isOpen={showLeadsModal}
        initialLeadIndex={selectedLeadIdx}
        onClose={() => setShowLeadsModal(false)}
        onCall={handleCallLead}
        onWhatsApp={(lead) => {
          showToast(`Opening WhatsApp chat with ${lead.name} (+91 98201 44521)...`);
        }}
      />

      {/* Active Call Simulator & CRM Logger */}
      <ActiveCallModal 
        isOpen={Boolean(activeCallLead)}
        lead={activeCallLead}
        onClose={() => setActiveCallLead(null)}
        onEndCall={handleCallEnded}
      />

      {/* Phone Dialer Keypad Modal */}
      <DialerKeypadModal 
        isOpen={showDialerModal}
        onClose={() => setShowDialerModal(false)}
        onCall={handleCallLead}
      />

      {/* OG Score Competency Breakdown Modal */}
      <OgScoreModal 
        isOpen={showOgScoreModal}
        onClose={() => setShowOgScoreModal(false)}
      />

      {/* Date Range Filter Modal */}
      <DateRangeModal 
        isOpen={showDateModal}
        currentRange={dateRange}
        onClose={() => setShowDateModal(false)}
        onApply={(newRange) => {
          setDateRange(newRange);
          showToast(`Filtered data to: ${newRange}`);
        }}
      />

      {/* Unobtrusive Global Action Toast */}
      {toast && (
        <div style={{
          position: 'fixed',
          bottom: 24,
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#0f172a',
          color: '#ffffff',
          padding: '10px 18px',
          borderRadius: '999px',
          fontSize: '13px',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
          zIndex: 9999,
          animation: 'scaleUp 0.15s ease-out'
        }}>
          <CheckCircle size={16} color="#10b981" />
          <span>{toast}</span>
        </div>
      )}
    </div>
  );
}
