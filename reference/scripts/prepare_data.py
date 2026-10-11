import os

os.makedirs('src/data', exist_ok=True)
with open('reference/extracted_data.js', 'r', encoding='utf-8') as f:
    code = f.read()

extra = """
export const CALLS_HANDLED_7DAYS = [
  { day: 'Mon', calls: 18, pct: 58 },
  { day: 'Tue', calls: 22, pct: 70 },
  { day: 'Wed', calls: 15, pct: 48 },
  { day: 'Thu', calls: 26, pct: 82 },
  { day: 'Fri', calls: 20, pct: 64 },
  { day: 'Sat', calls: 12, pct: 38 },
  { day: 'Today', calls: 14, pct: 45, isToday: true }
];

export const CSAT_TREND_7DAYS = [
  { day: 'Mon', csat: 88, pct: 70 },
  { day: 'Tue', csat: 90, pct: 74 },
  { day: 'Wed', csat: 85, pct: 64 },
  { day: 'Thu', csat: 92, pct: 78 },
  { day: 'Fri', csat: 89, pct: 72 },
  { day: 'Sat', csat: 91, pct: 76 },
  { day: 'Today', csat: 94, pct: 84, isToday: true }
];

export const DASHBOARD_TASKS = [
  {
    id: 'w1',
    title: '2 callbacks',
    sub: 'next 4:30pm',
    iconBg: '#e0f2fe',
    iconColor: '#0369a1',
    channel: 'Call Centre Team',
    actionPrompt: 'Confirm the 4:30pm callback',
    leadName: 'Mukunda'
  },
  {
    id: 'w2',
    title: '2 hot leads',
    sub: 'untouched 24h',
    iconBg: '#f1ecff',
    iconColor: '#7c3aed',
    channel: 'AvaniBot',
    actionPrompt: 'Call now or reassign the 2 leads',
    leadName: 'Ritu S.'
  },
  {
    id: 'w3',
    title: '1 outcome',
    sub: 'to log',
    iconBg: '#fef3c7',
    iconColor: '#b45309',
    channel: 'AvaniBot',
    actionPrompt: "Log the outcome of this morning's call",
    leadName: 'Faizan A.'
  }
];

export const CURRENT_USER = {
  name: 'Arvind Rajan',
  initials: 'AR',
  emoji: '🦸‍♂️',
  store: 'Koramangala · The Sleep Company',
  ogScore: 76,
  ogScoreDelta: '+13',
  rank: '#3',
  rankLocation: 'RT Nagar',
  avgHandleTime: '4m 12s',
  avgHandleDelta: '▼8%',
  csatToday: '94%',
  csatDelta: '▲2pt',
  inQueue: 2,
  leadsCreated: 3,
  leadsCalled: 2,
  earningsMonth: 5200,
  earningsCoached: 1700,
  earningsTarget: 6000,
  earningsProgressPct: 87
};
"""

with open('src/data/mockData.js', 'w', encoding='utf-8') as f:
    f.write(code + '\n' + extra)

print('Wrote src/data/mockData.js successfully.')
