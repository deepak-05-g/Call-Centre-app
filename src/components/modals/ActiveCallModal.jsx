import React, { useState, useEffect } from 'react';
import { 
  PhoneOff, 
  Mic, 
  MicOff, 
  Sparkles, 
  CheckCircle2, 
  X, 
  Volume2,
  RefreshCw
} from 'lucide-react';
import { CALL_SOP_SCRIPTS } from '../../data/mockData';

export default function ActiveCallModal({ isOpen, lead, onClose, onEndCall }) {
  const [seconds, setSeconds] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [showWrapup, setShowWrapup] = useState(false);
  const [outcome, setOutcome] = useState('interested');

  // Practice Call Specific State
  const [practiceStep, setPracticeStep] = useState(0);
  const [practiceScore, setPracticeScore] = useState(94);
  const [practiceHistory, setPracticeHistory] = useState([]);
  const [practiceCustomInput, setPracticeCustomInput] = useState('');

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setSeconds(0);
      setIsMuted(false);
      setShowWrapup(false);
      setOutcome('interested');
      setPracticeStep(0);
      setPracticeScore(94);
      setPracticeHistory([]);
      setPracticeCustomInput('');
      setAiCoachFeedback(null);
    }
  }, [isOpen, lead]);

  // Live timer while call is in progress
  useEffect(() => {
    if (!isOpen || showWrapup) return;
    const timer = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [isOpen, showWrapup]);

  if (!isOpen) return null;

  const isPractice = Boolean(lead?.isPractice);
  const leadName = lead?.name || 'Mukunda R.';
  const leadPhone = lead?.phone || '+91 98765 43210';
  const leadProduct = lead?.product || 'Smart Ortho GRID Mattress';

  const formatDuration = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}m ${s < 10 ? '0' : ''}${s}s`;
  };

  const handleEndCall = () => {
    setShowWrapup(true);
  };

  const handleSaveWrapup = () => {
    if (onEndCall) {
      onEndCall({
        lead,
        name: leadName,
        durationSeconds: seconds,
        durationFormatted: formatDuration(seconds),
        outcome,
        isPractice,
        score: isPractice ? practiceScore : undefined,
        dir: 'out'
      });
    }
    onClose();
  };

  // Practice steps dialogue data
  const practiceDialogue = [
    {
      customerSays: "Namaste Arvind! I was looking at the Ortho GRID online, but ₹8,490 feels high compared to standard foam mattresses. Why should I spend more?",
      options: [
        {
          id: 'opt1',
          label: "Anchor on Smart GRID technology + 10-year warranty (Recommended)",
          text: "Standard foam sags within 2 years, whereas our patented Smart GRID adapts to your spine pressure points and comes with a 10-year warranty.",
          feedback: "✨ Outstanding! Anchoring on spinal health and durability immediately justifies the price difference."
        },
        {
          id: 'opt2',
          label: "Pivot directly to 12-month 0% EMI financing",
          text: "With our zero-interest EMI, that's only ₹708 a month — less than a cup of coffee per day.",
          feedback: "Good pivot to affordability, but make sure to establish product superiority first."
        }
      ]
    },
    {
      customerSays: "That makes sense. But what if it feels too firm after it gets delivered to my home?",
      options: [
        {
          id: 'opt3',
          label: "Reassure with 100-Night Risk-Free Trial (Recommended)",
          text: "You get a full 100-night trial in your own bedroom. If your back doesn't feel substantially better, we arrange 100% free doorstep pickup and full refund.",
          feedback: "🎯 Perfect risk-reversal! The 100-night trial removes friction and builds high trust."
        },
        {
          id: 'opt4',
          label: "Offer the Soft Mattress Protector bundle",
          text: "We can bundle our luxury soft protector to add an extra plush cushion layer.",
          feedback: "Helpful cross-sell, but be sure to emphasize the guarantee first."
        }
      ]
    }
  ];

  const handleSelectPracticeOption = (option) => {
    const currentQ = practiceDialogue[practiceStep];
    const newEntry = {
      customer: currentQ.customerSays,
      agent: option.text,
      feedback: option.feedback
    };

    setPracticeHistory(prev => [...prev, newEntry]);
    setAiCoachFeedback(option.feedback);

    if (practiceStep < practiceDialogue.length - 1) {
      setPracticeStep(prev => prev + 1);
    } else {
      setTimeout(() => {
        setShowWrapup(true);
      }, 1000);
    }
  };

  const handleCustomPracticeSubmit = () => {
    if (!practiceCustomInput.trim()) return;
    handleSelectPracticeOption({
      text: practiceCustomInput.trim(),
      feedback: "✨ Great authentic phrasing! Your natural empathy and clear delivery scored high."
    });
    setPracticeCustomInput('');
  };

  // Sample standard script matching customer conversation from mock
  const standardScriptLines = CALL_SOP_SCRIPTS['Mukunda'] || [
    { who: 'agent', text: 'Namaste! This is Arvind from The Sleep Company, calling about the Ortho GRID you were looking at.' },
    { who: 'customer', text: 'Haan hello, I was checking the prices. Is the mattress suitable for lower back pain?' },
    { who: 'agent', text: 'Yes absolutely! The patented Smart GRID technology relieves pressure points along the spine.' },
    { who: 'customer', text: 'Okay, what about warranty and payment options?' }
  ];

  return (
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 1100 }}>
      <div 
        className="leads-modal-card" 
        onClick={e => e.stopPropagation()}
        style={{ 
          maxWidth: isPractice ? (showWrapup ? 480 : 640) : (showWrapup ? 440 : 580),
          background: showWrapup ? '#ffffff' : (isPractice ? '#10172a' : '#0f172a'),
          color: showWrapup ? '#1a1a1a' : '#ffffff',
          borderRadius: 20,
          boxShadow: '0 24px 64px rgba(0, 0, 0, 0.45)'
        }}
      >
        {/* ================= ACTIVE CALL / PRACTICE STATE ================= */}
        {!showWrapup ? (
          <div>
            {/* Call Header */}
            <div style={{
              padding: '16px 20px',
              background: isPractice 
                ? 'linear-gradient(135deg, #2e1065, #4c1d95 60%, #1e1b4b)' 
                : 'linear-gradient(135deg, #1e293b, #0f172a)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ 
                  fontSize: 12, 
                  color: isPractice ? '#c084fc' : '#38bdf8', 
                  fontWeight: 800, 
                  textTransform: 'uppercase', 
                  letterSpacing: 0.6,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 5
                }}>
                  {isPractice ? <Sparkles size={13} /> : null}
                  <span>{isPractice ? '✦ Avani AI Net Practise · Simulation' : 'Active Call · Live Simulation'}</span>
                </div>
                <div style={{ fontSize: 17, fontWeight: 800, color: '#ffffff', marginTop: 3 }}>
                  {leadName}
                </div>
                <div style={{ fontSize: 12, color: 'rgba(255, 255, 255, 0.7)' }}>
                  {isPractice ? 'Practice Scenario: Price Objection & 0% EMI Pivot' : `${leadPhone} · ${leadProduct}`}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{
                  background: isPractice ? 'rgba(192, 132, 252, 0.2)' : 'rgba(56, 189, 248, 0.15)',
                  border: `1px solid ${isPractice ? 'rgba(192, 132, 252, 0.4)' : 'rgba(56, 189, 248, 0.3)'}`,
                  padding: '5px 12px',
                  borderRadius: 20,
                  fontSize: 13,
                  fontWeight: 800,
                  color: isPractice ? '#e9d5ff' : '#38bdf8'
                }}>
                  {formatDuration(seconds)}
                </div>

                <button 
                  onClick={onClose}
                  aria-label="Close"
                  style={{
                    background: 'rgba(255, 255, 255, 0.12)',
                    border: 'none',
                    borderRadius: '50%',
                    width: 28,
                    height: 28,
                    color: '#ffffff',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <X size={15} />
                </button>
              </div>
            </div>

            {/* Practice Mode Interactive Flow */}
            {isPractice ? (
              <div style={{ padding: '16px 20px', maxHeight: '55vh', overflowY: 'auto' }}>
                {/* Completed Dialogue History */}
                {practiceHistory.map((item, hi) => (
                  <div key={hi} style={{ marginBottom: 14 }}>
                    {/* Customer Bubble */}
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      borderRadius: '12px 12px 12px 2px',
                      padding: '10px 14px',
                      fontSize: 13,
                      color: '#e2e8f0',
                      lineHeight: 1.45,
                      marginBottom: 8,
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                      <div style={{ fontSize: 10.5, fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', marginBottom: 2 }}>
                        Customer (AI Partner)
                      </div>
                      "{item.customer}"
                    </div>

                    {/* Agent Response */}
                    <div style={{
                      background: 'rgba(16, 185, 129, 0.18)',
                      border: '1px solid rgba(16, 185, 129, 0.35)',
                      borderRadius: '12px 12px 2px 12px',
                      padding: '10px 14px',
                      fontSize: 13,
                      color: '#a7f3d0',
                      lineHeight: 1.45,
                      marginLeft: 30,
                      marginBottom: 8
                    }}>
                      <div style={{ fontSize: 10.5, fontWeight: 800, color: '#34d399', textTransform: 'uppercase', marginBottom: 2 }}>
                        Your Response (Arvind)
                      </div>
                      "{item.agent}"
                    </div>

                    {/* Feedback */}
                    <div style={{
                      background: 'rgba(124, 58, 237, 0.18)',
                      border: '1px solid rgba(124, 58, 237, 0.35)',
                      borderRadius: 8,
                      padding: '7px 10px',
                      fontSize: 12,
                      color: '#e9d5ff',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6
                    }}>
                      <span>{item.feedback}</span>
                    </div>
                  </div>
                ))}

                {/* Active Prompt Step */}
                {practiceStep < practiceDialogue.length && (
                  <div>
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.09)',
                      borderRadius: '14px 14px 14px 2px',
                      padding: '12px 14px',
                      fontSize: 13.5,
                      color: '#ffffff',
                      lineHeight: 1.45,
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                    }}>
                      <div style={{ fontSize: 11, fontWeight: 800, color: '#38bdf8', textTransform: 'uppercase', marginBottom: 4, display: 'flex', alignItems: 'center', gap: 5 }}>
                        <Volume2 size={13} />
                        <span>Customer Persona: Ramesh (Price Objection)</span>
                      </div>
                      "{practiceDialogue[practiceStep].customerSays}"
                    </div>

                    <div style={{ fontSize: 12, fontWeight: 800, color: '#c084fc', textTransform: 'uppercase', margin: '14px 0 8px', letterSpacing: 0.5 }}>
                      Choose your SOP response:
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {practiceDialogue[practiceStep].options.map(opt => (
                        <button
                          key={opt.id}
                          onClick={() => handleSelectPracticeOption(opt)}
                          style={{
                            background: 'rgba(255, 255, 255, 0.06)',
                            border: '1px solid rgba(255, 255, 255, 0.16)',
                            borderRadius: 12,
                            padding: '10px 12px',
                            textAlign: 'left',
                            color: '#ffffff',
                            cursor: 'pointer',
                            transition: 'all 0.15s ease'
                          }}
                          onMouseEnter={e => {
                            e.currentTarget.style.background = 'rgba(124, 58, 237, 0.25)';
                            e.currentTarget.style.borderColor = '#c084fc';
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.16)';
                          }}
                        >
                          <div style={{ fontSize: 12, fontWeight: 700, color: '#38bdf8', marginBottom: 3 }}>
                            {opt.label}
                          </div>
                          <div style={{ fontSize: 12.5, color: '#e2e8f0', lineHeight: 1.4 }}>
                            "{opt.text}"
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Or Type Free Response */}
                    <div style={{ display: 'flex', gap: 6, marginTop: 10 }}>
                      <input 
                        type="text"
                        placeholder="Or type your own rehearsal line…"
                        value={practiceCustomInput}
                        onChange={e => setPracticeCustomInput(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && handleCustomPracticeSubmit()}
                        style={{
                          flex: 1,
                          background: 'rgba(255, 255, 255, 0.08)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: 9,
                          padding: '7px 12px',
                          color: '#fff',
                          fontSize: 12.5,
                          outline: 'none'
                        }}
                      />
                      <button
                        onClick={handleCustomPracticeSubmit}
                        style={{
                          background: '#7c3aed',
                          border: 'none',
                          borderRadius: 9,
                          padding: '7px 14px',
                          color: '#fff',
                          fontSize: 12.5,
                          fontWeight: 700,
                          cursor: 'pointer'
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Regular Active Call Grid (Transcript + AI Cues) */
              <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 12, padding: 14, maxHeight: 340, overflowY: 'auto' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ fontSize: 11.5, fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase' }}>
                    Live Transcript
                  </div>
                  {standardScriptLines.map((line, i) => (
                    <div 
                      key={i}
                      style={{
                        background: line.who === 'agent' ? 'rgba(29, 158, 117, 0.18)' : 'rgba(255, 255, 255, 0.08)',
                        border: `1px solid ${line.who === 'agent' ? 'rgba(29, 158, 117, 0.35)' : 'rgba(255, 255, 255, 0.1)'}`,
                        borderRadius: 10,
                        padding: '8px 10px',
                        fontSize: 12.5,
                        color: line.who === 'agent' ? '#6ee7b7' : '#e2e8f0',
                        lineHeight: 1.4
                      }}
                    >
                      <div style={{ fontSize: 10.5, fontWeight: 700, textTransform: 'uppercase', opacity: 0.7, marginBottom: 2 }}>
                        {line.who === 'agent' ? 'You (Arvind)' : leadName}
                      </div>
                      {line.text}
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ fontSize: 11.5, fontWeight: 800, color: '#c084fc', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Sparkles size={13} />
                    AI Assist Cues
                  </div>

                  <div style={{
                    background: 'rgba(124, 58, 237, 0.18)',
                    border: '1px solid rgba(124, 58, 237, 0.35)',
                    borderRadius: 10,
                    padding: '9px 10px',
                    fontSize: 12,
                    color: '#e9d5ff',
                    lineHeight: 1.4
                  }}>
                    <strong style={{ color: '#fff', display: 'block', marginBottom: 2 }}>Pitch Highlight:</strong>
                    Mention the 100-night risk-free trial + zero-cost 12-month EMI (₹708/mo).
                  </div>

                  <div style={{
                    background: 'rgba(245, 158, 11, 0.18)',
                    border: '1px solid rgba(245, 158, 11, 0.35)',
                    borderRadius: 10,
                    padding: '9px 10px',
                    fontSize: 12,
                    color: '#fef3c7',
                    lineHeight: 1.4
                  }}>
                    <strong style={{ color: '#fff', display: 'block', marginBottom: 2 }}>SOP Reminder:</strong>
                    Ask about spine/ortho requirements before quoting final discount.
                  </div>
                </div>
              </div>
            )}

            {/* In-Call Footer Action Buttons */}
            <div style={{
              padding: '12px 20px',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              background: '#09111e',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 16
            }}>
              <button
                onClick={() => setIsMuted(!isMuted)}
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: '50%',
                  background: isMuted ? '#ef4444' : 'rgba(255, 255, 255, 0.12)',
                  border: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                title={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <MicOff size={18} /> : <Mic size={18} />}
              </button>

              <button
                onClick={handleEndCall}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  background: isPractice ? '#7c3aed' : '#e24b4a',
                  border: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: isPractice ? '0 4px 14px rgba(124, 58, 237, 0.5)' : '0 4px 14px rgba(226, 75, 74, 0.45)'
                }}
                title={isPractice ? 'Wrap Up Rehearsal' : 'End Call'}
              >
                {isPractice ? <CheckCircle2 size={22} /> : <PhoneOff size={22} />}
              </button>
            </div>
          </div>
        ) : (
          /* ================= CALL WRAP-UP STATE ================= */
          <div style={{ padding: '20px 22px' }}>
            {isPractice ? (
              /* Practice Scorecard */
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      background: '#ede9fe',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 20
                    }}>
                      🏆
                    </div>
                    <div>
                      <div style={{ fontSize: 16, fontWeight: 800, color: '#1a1a1a' }}>
                        Rehearsal Complete · 94% SOP Score
                      </div>
                      <div style={{ fontSize: 12.5, color: '#6d28d9', fontWeight: 700 }}>
                        +1 Practice Streak · Ready for Floor Calls
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={onClose}
                    aria-label="Close"
                    style={{
                      background: '#f1f5f9',
                      border: 'none',
                      borderRadius: '50%',
                      width: 28,
                      height: 28,
                      color: '#64748b',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <X size={15} />
                  </button>
                </div>

                {/* Score breakdown metrics */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: 8,
                  marginBottom: 14
                }}>
                  <div style={{ background: '#f5f3ff', border: '1px solid #ddd6fe', borderRadius: 10, padding: '10px 8px', textAlign: 'center' }}>
                    <div style={{ fontSize: 11, color: '#6d28d9', fontWeight: 700, textTransform: 'uppercase' }}>Greeting</div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: '#15803d', marginTop: 2 }}>96%</div>
                  </div>
                  <div style={{ background: '#f5f3ff', border: '1px solid #ddd6fe', borderRadius: 10, padding: '10px 8px', textAlign: 'center' }}>
                    <div style={{ fontSize: 11, color: '#6d28d9', fontWeight: 700, textTransform: 'uppercase' }}>Value Anchor</div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: '#15803d', marginTop: 2 }}>92%</div>
                  </div>
                  <div style={{ background: '#f5f3ff', border: '1px solid #ddd6fe', borderRadius: 10, padding: '10px 8px', textAlign: 'center' }}>
                    <div style={{ fontSize: 11, color: '#6d28d9', fontWeight: 700, textTransform: 'uppercase' }}>Trial Pitch</div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: '#15803d', marginTop: 2 }}>95%</div>
                  </div>
                </div>

                <div style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: 10,
                  padding: '11px 13px',
                  fontSize: 12.5,
                  color: '#475569',
                  lineHeight: 1.45,
                  marginBottom: 16
                }}>
                  <strong style={{ color: '#1e293b', display: 'block', marginBottom: 2 }}>Coach Feedback:</strong>
                  "Excellent pivot to the 100-night trial! Sunita flagged greeting & objection pacing in #callcentre-team this week and you resolved it under 15 seconds."
                </div>

                <div style={{ display: 'flex', gap: 8 }}>
                  <button
                    onClick={() => {
                      setPracticeStep(0);
                      setPracticeHistory([]);
                      setShowWrapup(false);
                    }}
                    style={{
                      flex: 1,
                      padding: '11px',
                      borderRadius: 10,
                      border: '1px solid #cbd5e1',
                      background: '#fff',
                      color: '#475569',
                      fontSize: 13,
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 5
                    }}
                  >
                    <RefreshCw size={14} />
                    <span>Re-try Rehearsal</span>
                  </button>

                  <button
                    onClick={handleSaveWrapup}
                    style={{
                      flex: 1.5,
                      padding: '11px',
                      borderRadius: 10,
                      border: 'none',
                      background: 'linear-gradient(135deg, #6d28d9, #7c3aed)',
                      color: '#fff',
                      fontSize: 13.5,
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    Save Practice Record ✓
                  </button>
                </div>
              </div>
            ) : (
              /* Regular Call Wrapup */
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{
                      width: 38,
                      height: 38,
                      borderRadius: '50%',
                      background: '#e1f5ee',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <CheckCircle2 size={20} color="#0f6e56" />
                    </div>
                    <div>
                      <div style={{ fontSize: 16, fontWeight: 800, color: '#1a1a1a' }}>Call wrapped up</div>
                      <div style={{ fontSize: 12.5, color: '#6b7280' }}>
                        {leadName} · Duration: {formatDuration(seconds)}
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={onClose}
                    aria-label="Close"
                    style={{
                      background: '#f1f5f9',
                      border: 'none',
                      borderRadius: '50%',
                      width: 28,
                      height: 28,
                      color: '#64748b',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <X size={15} />
                  </button>
                </div>

                <div style={{ marginBottom: 14 }}>
                  <div style={{ fontSize: 12.5, fontWeight: 700, color: '#4b5563', marginBottom: 6 }}>
                    Select Outcome:
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                    {[
                      { id: 'interested', label: 'Interested ✓' },
                      { id: 'callback', label: 'Callback Booked' },
                      { id: 'closed', label: 'Sale Closed 💰' },
                      { id: 'no_interest', label: 'No Interest' }
                    ].map(opt => (
                      <button
                        key={opt.id}
                        onClick={() => setOutcome(opt.id)}
                        style={{
                          padding: '8px 10px',
                          borderRadius: 8,
                          border: `1.5px solid ${outcome === opt.id ? '#0f6e56' : '#e5e7eb'}`,
                          background: outcome === opt.id ? '#e1f5ee' : '#fff',
                          color: outcome === opt.id ? '#0f6e56' : '#1a1a1a',
                          fontSize: 12.5,
                          fontWeight: 700,
                          cursor: 'pointer'
                        }}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: 10,
                  padding: '10px 12px',
                  fontSize: 12,
                  color: '#64748b',
                  lineHeight: 1.4,
                  marginBottom: 16
                }}>
                  AI Auto-Summary: Customer discussed {leadProduct} for back pain. Shared EMI options and 10-year warranty details. Marked as "{outcome}".
                </div>

                <div style={{ display: 'flex', gap: 8 }}>
                  <button
                    onClick={onClose}
                    style={{
                      flex: 1,
                      padding: '11px',
                      borderRadius: 10,
                      border: '1px solid #cbd5e1',
                      background: '#fff',
                      color: '#64748b',
                      fontSize: 13,
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    Discard
                  </button>
                  <button
                    onClick={handleSaveWrapup}
                    style={{
                      flex: 2,
                      padding: '11px',
                      borderRadius: 10,
                      border: 'none',
                      background: '#0f6e56',
                      color: '#fff',
                      fontSize: 13.5,
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    Save to CRM & Log
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
