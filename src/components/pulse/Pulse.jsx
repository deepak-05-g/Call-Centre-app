import React, { useState } from 'react';
import { Search } from 'lucide-react';
import PulseHeader from './PulseHeader';
import AvaniHeroCard from './AvaniHeroCard';
import KudosHeroCard from './KudosHeroCard';
import CustomAgentsFold from './CustomAgentsFold';
import PulseChannelsList from './PulseChannelsList';
import PulseChatThread from './PulseChatThread';
import KudosModal from './KudosModal';
import { PULSE_INTERNAL_THREADS } from '../../data/mockData';

export default function Pulse({ initialChannel = null, onOpenLeadDetail }) {
  const [activeChannel, setActiveChannel] = useState(initialChannel);
  const [initialAction, setInitialAction] = useState(null);
  const [showKudosModal, setShowKudosModal] = useState(false);
  const [pinnedCount, setPinnedCount] = useState(1);
  const [pinnedResolved, setPinnedResolved] = useState(false);
  const [resolvedStatusText, setResolvedStatusText] = useState('');
  const [channelThreads, setChannelThreads] = useState(() => ({ ...PULSE_INTERNAL_THREADS }));

  const handleOpenAvani = (type) => {
    setInitialAction(type === 'daily_brief' ? 'daily_brief' : null);
    setActiveChannel('AvaniBot');
  };

  const handleOpenChat = (name) => {
    setInitialAction(null);
    setActiveChannel(name);
  };

  const handleBackToHome = () => {
    setActiveChannel(null);
    setInitialAction(null);
  };

  const handleUpdateMessages = (chName, newMessages) => {
    setChannelThreads(prev => ({
      ...prev,
      [chName]: {
        ...(prev[chName] || { title: `#${chName.toLowerCase().replace(/\s+/g, '-')}` }),
        messages: newMessages
      }
    }));
  };

  const handleResolvePinned = (bannerText) => {
    setPinnedResolved(true);
    setPinnedCount(0);
    setResolvedStatusText(bannerText);
  };

  // If a specific channel is selected, display that channel's chat
  if (activeChannel) {
    const threadData = channelThreads[activeChannel] || {
      title: `#${activeChannel.toLowerCase().replace(/\s+/g, '-')}`,
      messages: []
    };

    return (
      <PulseChatThread 
        channelName={activeChannel}
        threadData={threadData}
        initialAction={initialAction}
        isPinnedResolved={pinnedResolved}
        resolvedStatusText={resolvedStatusText}
        onResolvePinned={handleResolvePinned}
        onUpdateMessages={handleUpdateMessages}
        onBack={handleBackToHome}
        onOpenLeadDetail={onOpenLeadDetail}
      />
    );
  }

  // Otherwise, render Pulse Home
  return (
    <div className="pulse-container" style={{ paddingBottom: 60 }}>
      {/* Header */}
      <PulseHeader onOpenChat={handleOpenChat} />

      {/* Ask AvaniBot search bar */}
      <div 
        className="pulse-search-bar"
        onClick={() => handleOpenAvani('search')}
        title="Ask AvaniBot or search Pulse"
      >
        <span style={{ fontSize: 14 }}>✨</span>
        <span className="pulse-search-text">Ask AvaniBot or search Pulse…</span>
        <Search size={15} color="#c5c5c5" />
      </div>

      {/* Featured AvaniBot Hero Card */}
      <AvaniHeroCard onOpenAvani={handleOpenAvani} />

      {/* Featured Kudos Card */}
      <KudosHeroCard onOpenKudos={() => setShowKudosModal(true)} />

      {/* Foldable Custom Agents */}
      <CustomAgentsFold onOpenAgentChannel={handleOpenChat} />

      {/* Channels & DMs List */}
      <PulseChannelsList 
        onSelectChannel={handleOpenChat}
        pinnedCount={pinnedCount}
      />

      {/* Kudos Modal */}
      {showKudosModal && (
        <KudosModal onClose={() => setShowKudosModal(false)} />
      )}
    </div>
  );
}
