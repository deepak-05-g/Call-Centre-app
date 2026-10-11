import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Sparkles, Send, Smile, CheckCircle, Check } from 'lucide-react';
import PinnedInputCard from './PinnedInputCard';
import { CURRENT_USER, AVANI_ACTION_ITEMS_STAFF } from '../../data/mockData';

export default function PulseChatThread({
  channelName = 'Call Centre Team',
  threadData,
  initialAction,
  isPinnedResolved = false,
  resolvedStatusText: initialResolvedStatusText = '',
  onResolvePinned,
  onUpdateMessages,
  onBack,
  onOpenLeadDetail
}) {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [showEmojis, setShowEmojis] = useState(false);
  const [inputPinnedResolved, setInputPinnedResolved] = useState(isPinnedResolved);
  const [resolvedStatusText, setResolvedStatusText] = useState(initialResolvedStatusText);
  const [toastMessage, setToastMessage] = useState(null);
  const scrollRef = useRef(null);

  // Initialize messages from threadData or fallback
  useEffect(() => {
    let base = [];
    if (threadData && threadData.messages) {
      base = [...threadData.messages];
    } else {
      base = [
        {
          who: 'Sunita Rao',
          init: 'SR',
          bg: '#faeeda',
          color: '#854f0b',
          time: '2:05pm',
          text: '👥 <b>STAKEHOLDERS:</b> <b style="color:#854f0b">@You (Arvind R.)</b>, whole call centre shift'
        },
        {
          who: 'Sunita Rao',
          init: 'SR',
          bg: '#faeeda',
          color: '#854f0b',
          time: '2:05pm',
          text: '📋 <b>ISSUE DEFINITION:</b> Greeting-in-first-10s QA score is at 71% this week, below our 85% target.'
        },
        {
          who: 'Sunita Rao',
          init: 'SR',
          bg: '#faeeda',
          color: '#854f0b',
          time: '2:05pm',
          text: '➡️ <b>SUGGESTED RESOLUTION:</b> Let\'s push that up 💪 — open every call with the greeting script. I\'ll check back Friday.'
        },
        {
          who: 'You',
          init: 'AR',
          time: '2:10pm',
          text: 'On it! Will make sure I open every call with the greeting script 🙌'
        },
        {
          who: 'Sunita Rao',
          init: 'SR',
          bg: '#faeeda',
          color: '#854f0b',
          time: '2:14pm',
          text: 'Great attitude Arvind 🌟'
        }
      ];
    }

    if (initialAction === 'daily_brief') {
      base.push({
        who: 'You',
        init: 'AR',
        time: 'Just now',
        text: 'Give me my daily brief'
      });
      base.push({
        who: 'AvaniBot',
        init: '✨',
        bg: '#f1ecff',
        color: '#7c3aed',
        isBot: true,
        time: 'Just now',
        text: `☀️ <b>Here's today's brief:</b><br>• Avg Handle Time: 4m 12s <span style="color:#0f6e56">▼8%</span> — nice improvement<br>• Warranty score down 12% this week — worth a look in #avani-coaching<br>• Greeting-in-first-10s at 71% — Sunita wants this pushed up<br>• You've got 3 new kudos waiting 🏆<br><br>Want me to open avani-coaching, or pull up your kudos?`
      });
    }

    setMessages(base);
    setInputPinnedResolved(isPinnedResolved);
    setResolvedStatusText(initialResolvedStatusText);
  }, [channelName, threadData, initialAction, isPinnedResolved, initialResolvedStatusText]);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const showToast = (text) => {
    setToastMessage(text);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleSendMessage = () => {
    const trimmed = inputText.trim();
    if (!trimmed) return; // Empty-message handling: no-op

    const newMsg = {
      who: 'You',
      init: 'AR',
      time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
      text: trimmed
    };

    const updated = [...messages, newMsg];
    setMessages(updated);
    if (onUpdateMessages) onUpdateMessages(channelName, updated);
    setInputText('');
    setShowEmojis(false);

    // If active channel is AvaniBot, simulate assistant response
    if (channelName.toLowerCase().includes('avani')) {
      setTimeout(() => {
        const lower = trimmed.toLowerCase();
        let reply = '';
        let matched = null;

        Object.keys(AVANI_ACTION_ITEMS_STAFF).forEach(k => {
          if (lower.includes(k)) matched = AVANI_ACTION_ITEMS_STAFF[k];
        });

        if (lower.includes('action item') && matched) {
          reply = `✨ Here's what I found for <b>${matched.name}</b>:<br>` +
            matched.items.map(i => `• ${i}`).join('<br>') +
            `<br><br><span style="color:#8e8e93;font-size:12px">Source: ${matched.source}</span>`;
        } else if (lower.includes('daily brief') || lower.includes('brief')) {
          reply = `☀️ <b>Here's today's brief:</b><br>` +
            `• Avg Handle Time: 4m 12s <span style="color:#0f6e56">▼8%</span> — nice improvement<br>` +
            `• Warranty score down 12% this week — review in #avani-coaching<br>` +
            `• Greeting-in-first-10s at 71% — Sunita wants this pushed to 85%<br>` +
            `• You've got 3 new kudos waiting 🏆`;
        } else if (lower.includes('action item')) {
          reply = `Hmm 🤔 I couldn't match that name — try "what are my action items from Sunita" or "…from Priya".`;
        } else {
          reply = `✨ I can search Pulse for you! Try asking things like <b>"what are my action items from Sunita"</b>, or tap the ✨ icon inside any channel to search just that channel.`;
        }

        const withBot = [
          ...updated,
          {
            who: 'AvaniBot',
            init: '✨',
            bg: '#f1ecff',
            color: '#7c3aed',
            isBot: true,
            time: 'Just now',
            text: reply
          }
        ];
        setMessages(withBot);
        if (onUpdateMessages) onUpdateMessages(channelName, withBot);
      }, 550);
    }
  };

  const handlePinnedAnswer = (answerText, actionType) => {
    let subNote = 'Task done · removed from your tasks';
    let bannerText = 'Callback confirmed by you — cleared from this channel ✓';

    if (actionType === 'reassign' || answerText.toLowerCase().includes('priya')) {
      subNote = 'Task done · reallocated to Priya Krishnan';
      bannerText = 'Reassigned to Priya — cleared from this channel ✓';
      showToast('Callback reallocated to Priya Krishnan');
    } else {
      subNote = 'Task done · 4:30pm callback confirmed by you';
      bannerText = 'Callback confirmed by you — scheduled for 4:30pm ✓';
      showToast('Confirmed: Mukunda R. callback booked for 4:30pm');
    }

    const newMsg = {
      who: 'You',
      init: 'AR',
      time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
      text: answerText,
      subNote: subNote
    };

    const updated = [...messages, newMsg];
    setMessages(updated);
    if (onUpdateMessages) onUpdateMessages(channelName, updated);
    setInputPinnedResolved(true);
    setResolvedStatusText(bannerText);
    if (onResolvePinned) onResolvePinned(bannerText);
  };

  const emojis = ['👍', '🙌', '🔥', '💪', '🏆', '😊', '✅', '❤️', '🎉', '📢', '💡', '🛏️'];
  const isInputEmpty = !inputText.trim();

  const isCallCentreTeam = channelName.toLowerCase().includes('call centre') || channelName.toLowerCase().includes('team');

  return (
    <div className="channel-chat-view">
      {/* Toast Notification */}
      {toastMessage && (
        <div style={{
          position: 'absolute',
          top: 55,
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#15803d',
          color: '#ffffff',
          fontSize: 12.5,
          fontWeight: 700,
          padding: '6px 14px',
          borderRadius: 20,
          boxShadow: '0 4px 12px rgba(0,0,0,0.18)',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          gap: 6
        }}>
          <CheckCircle size={14} />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <div className="chat-header">
        <button 
          className="chat-back-btn" 
          onClick={onBack} 
          title="Back to Pulse Home"
        >
          <ArrowLeft size={16} />
        </button>

        <div className="chat-title">
          {channelName.startsWith('#') ? channelName : `#${channelName.toLowerCase().replace(/\s+/g, '-')}`}
        </div>

        <button 
          className="chat-back-btn"
          title="Ask AvaniBot about this channel"
          onClick={() => showToast('AvaniBot search activated for this channel')}
        >
          <Sparkles size={15} />
        </button>
      </div>

      {/* Pinned "Needs your input" card (Featured for Call Centre Team) */}
      {isCallCentreTeam && (
        <PinnedInputCard 
          onAnswer={handlePinnedAnswer}
          isResolved={inputPinnedResolved}
          resolvedText={resolvedStatusText}
        />
      )}

      {/* Messages Scroll Area */}
      <div className="chat-scroll-area" ref={scrollRef}>
        {messages.map((msg, idx) => {
          const isAgent = msg.who === 'You' || msg.who === CURRENT_USER.name || msg.role === 'agent';
          const avatarColor = msg.bg || (msg.isBot ? '#e1f5ee' : '#ffd700');
          const avatarTextColor = msg.color || (msg.isBot ? '#0f6e56' : '#78350f');
          const initials = msg.init || (msg.who ? msg.who.split(' ').map(w => w[0]).join('') : 'U');

          return (
            <div 
              key={idx} 
              className={`chat-msg-row ${isAgent ? 'agent' : ''}`}
            >
              {!isAgent && (
                <div 
                  className="chat-msg-av"
                  style={{ background: avatarColor, color: avatarTextColor }}
                >
                  {initials}
                </div>
              )}

              <div className={`chat-msg-body ${isAgent ? 'agent' : ''}`}>
                <div className="chat-msg-header">
                  <span className="chat-sender-name">{msg.who}</span>
                  <span className="chat-msg-time">{msg.time}</span>
                </div>

                <div className={`chat-bubble ${isAgent ? 'agent' : ''}`}>
                  {msg.text && (
                    <div 
                      dangerouslySetInnerHTML={{ __html: msg.text }}
                      style={{ lineHeight: 1.45 }}
                    />
                  )}

                  {/* Sub-note for completed task actions */}
                  {msg.subNote && (
                    <div style={{
                      fontSize: 11.5,
                      color: '#15803d',
                      fontWeight: 700,
                      marginTop: 4,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4
                    }}>
                      <Check size={12} strokeWidth={3} />
                      <span>{msg.subNote}</span>
                    </div>
                  )}

                  {/* Structured Card in Message (e.g. Manage Shipment, Quotation) */}
                  {msg.card && (
                    <div style={{
                      marginTop: 8,
                      background: '#ffffff',
                      border: '1px solid #e5e5ea',
                      borderRadius: 10,
                      padding: 10,
                      minWidth: 240
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 700, fontSize: 13, color: '#1a1a1a', marginBottom: 6 }}>
                        <span>{msg.card.icon}</span>
                        <span>{msg.card.title}</span>
                      </div>

                      {msg.card.badge && (
                        <div style={{ display: 'inline-block', background: '#e1f5ee', color: '#0f6e56', fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 6, marginBottom: 8 }}>
                          {msg.card.badge}
                        </div>
                      )}

                      {msg.card.fields && (
                        <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '4px 8px', fontSize: 12, marginBottom: 10 }}>
                          {msg.card.fields.map(([k, v], fi) => (
                            <React.Fragment key={fi}>
                              <span style={{ color: '#8e8e93' }}>{k}:</span>
                              <span style={{ fontWeight: 600, color: '#1a1a1a' }}>{v}</span>
                            </React.Fragment>
                          ))}
                        </div>
                      )}

                      {msg.card.actions && (
                        <div style={{ display: 'flex', gap: 6 }}>
                          {msg.card.actions.map((act, ai) => (
                            <button
                              key={ai}
                              style={{
                                flex: 1,
                                padding: '6px 10px',
                                borderRadius: 7,
                                border: act.style === 'primary' ? 'none' : '1px solid #d6d6db',
                                background: act.style === 'primary' ? '#0f6e56' : '#ffffff',
                                color: act.style === 'primary' ? '#ffffff' : '#1a1a1a',
                                fontSize: 11.5,
                                fontWeight: 700,
                                cursor: 'pointer'
                              }}
                              onClick={() => {
                                if (act.label.toLowerCase().includes('lead') && onOpenLeadDetail) {
                                  onOpenLeadDetail('Mukunda');
                                } else {
                                  showToast(`${act.label} completed ✓`);
                                }
                              }}
                            >
                              {act.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Message Compose Bar */}
      <div className="chat-compose-bar">
        <div className="chat-input-row">
          <input 
            type="text"
            className="chat-input-box"
            placeholder={`Message ${channelName.startsWith('#') ? channelName : '#' + channelName.toLowerCase().replace(/\s+/g, '-')}…`}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleSendMessage();
              }
            }}
          />

          <button 
            type="button"
            className="chat-icon-btn"
            onClick={() => setShowEmojis(!showEmojis)}
            title="Emoji picker"
          >
            <Smile size={18} color="#6b7280" />
          </button>

          <button 
            type="button"
            className="chat-send-btn"
            onClick={handleSendMessage}
            title="Send message"
            disabled={isInputEmpty}
            style={{
              opacity: isInputEmpty ? 0.45 : 1,
              cursor: isInputEmpty ? 'not-allowed' : 'pointer'
            }}
          >
            <Send size={15} />
          </button>
        </div>

        {/* Emoji Tray */}
        {showEmojis && (
          <div className="chat-emoji-tray">
            {emojis.map((em, i) => (
              <button 
                key={i} 
                type="button"
                className="emoji-btn"
                onClick={() => {
                  setInputText(prev => prev + em);
                }}
              >
                {em}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
