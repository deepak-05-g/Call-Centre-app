import sys
import re

sys.stdout.reconfigure(encoding='utf-8')

with open('reference_mock.html', 'r', encoding='utf-8') as f:
    html = f.read()

matches = [m.start() for m in re.finditer(r'Needs your input', html, re.IGNORECASE)]
print(f"Found {len(matches)} occurrences of 'Needs your input'")
for pos in matches:
    print("\n--- MATCH ---")
    print(html[max(0, pos-200):min(len(html), pos+600)])
