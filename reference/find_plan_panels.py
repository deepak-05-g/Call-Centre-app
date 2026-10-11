import sys
import re

sys.stdout.reconfigure(encoding='utf-8')

with open('calls_snippet.html', 'r', encoding='utf-8') as f:
    c = f.read()

panels = ['planPanel-incoming', 'planPanel-outgoing', 'planPanel-recent']
for p in panels:
    pos = c.find(f'id="{p}"')
    if pos != -1:
        print(f"\n==================== {p} ====================")
        print(c[pos:pos+3000])

# Also let's check for outgoing rows data or script rendering them
with open('reference_mock.html', 'r', encoding='utf-8') as f:
    full = f.read()

print("\n=== Functions mentioning planOutgoing or planIncoming ===")
for m in re.finditer(r'function\s+([a-zA-Z0-9_]*plan[a-zA-Z0-9_]*|[a-zA-Z0-9_]*outgoing[a-zA-Z0-9_]*|[a-zA-Z0-9_]*incoming[a-zA-Z0-9_]*)\s*\([^)]*\)\s*\{([\s\S]*?)\n\}', full, re.IGNORECASE):
    print(f"Function: {m.group(1)}")
    print(m.group(2)[:300])
