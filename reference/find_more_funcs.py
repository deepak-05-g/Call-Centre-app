import sys
import re

sys.stdout.reconfigure(encoding='utf-8')

with open('reference_mock.html', 'r', encoding='utf-8') as f:
    html = f.read()

funcs = [
    'renderPlanIncoming',
    'renderPlanOutgoing',
    'renderPlanRecent',
    'planSubTab',
    'renderCalendar',
    'renderCalInvites',
    'calPrevMonth',
    'calNextMonth',
    'calToday',
    'renderPulseChannels',
    'renderPulseThreads',
    'renderLeadsModalPage',
    'leadsModalNext',
    'leadsModalPrev',
    'callBack'
]

for fn in funcs:
    m = re.search(r'function\s+' + fn + r'\s*\([^)]*\)\s*\{([\s\S]*?)\n\}', html)
    if m:
        print(f"=== FUNCTION {fn} ===")
        print(m.group(0))
        print("\n")
    else:
        print(f"Could NOT find function {fn}")
