import sys
import re
import json

sys.stdout.reconfigure(encoding='utf-8')

with open('reference_mock.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Look for JS arrays or data objects
print("=== JAVASCRIPT DATA OBJECTS ===")
# Look for leads data
patterns = [
    r'const\s+leadsData\s*=\s*(\[[\s\S]*?\]);',
    r'const\s+allLeads\s*=\s*(\[[\s\S]*?\]);',
    r'const\s+leads\s*=\s*(\[[\s\S]*?\]);',
    r'const\s+incomingCalls\s*=\s*(\[[\s\S]*?\]);',
    r'const\s+recentCalls\s*=\s*(\[[\s\S]*?\]);',
    r'const\s+calendarEvents\s*=\s*(\[[\s\S]*?\]);',
    r'const\s+calEvents\s*=\s*(\[[\s\S]*?\]);',
    r'const\s+pulseChannels\s*=\s*(\[[\s\S]*?\]);',
    r'const\s+pulseThreads\s*=\s*(\{[\s\S]*?\});',
    r'const\s+kudosData\s*=\s*(\[[\s\S]*?\]);',
]

for p in patterns:
    m = re.search(p, html)
    if m:
        var_name = p.split('\\s+')[1].split('\\s*')[0]
        print(f"Found {var_name}: length {len(m.group(1))}")
        print(m.group(1)[:300] + "...\n")

# Let's search all const / let / var that are arrays or objects
all_vars = re.findall(r'(?:const|let|var)\s+([a-zA-Z0-9_]+)\s*=\s*(\[[\s\S]*?\]|\{[\s\S]*?\});', html)
print(f"\nTotal declared data variables: {len(all_vars)}")
for name, val in all_vars:
    if any(k in name.lower() for k in ['lead', 'call', 'cal', 'event', 'pulse', 'channel', 'chat', 'thread', 'kudos', 'agent', 'stat', 'task', 'user']):
        print(f"  - {name} (len {len(val)}): {val[:120]}...")

# 2. Let's inspect CSS variables or color themes
print("\n=== CSS THEME & COLORS ===")
colors = re.findall(r'#[0-9a-fA-F]{3,8}|rgba?\([^\)]+\)', html)
from collections import Counter
c_counts = Counter(colors)
print("Top 20 colors used:")
for c, cnt in c_counts.most_common(20):
    print(f"  {c}: {cnt}")
