import sys
import re

sys.stdout.reconfigure(encoding='utf-8')

with open('reference_mock.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Search for functions related to plan/outgoing/incoming/recent
funcs = ['planSubTab', 'renderIncoming', 'renderOutgoing', 'renderRecent', 'renderPlan', 'callBack', 'dialerSimulateIncoming', 'openLeadsModal', 'leadsModalPage']
for fn in funcs:
    m = re.search(r'function\s+' + fn + r'\s*\([^\)]*\)\s*\{[\s\S]*?\n\}', html)
    if m:
        print(f"=== Function {fn} ===")
        print(m.group(0)[:800])
        print("...\n")

# Also look for the markup in calls_snippet.html
with open('calls_snippet.html', 'r', encoding='utf-8') as f:
    calls_html = f.read()

print("=== calls_snippet markup preview ===")
print(calls_html[:2000])
