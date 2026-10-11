import sys
import re

sys.stdout.reconfigure(encoding='utf-8')

with open('reference_mock.html', 'r', encoding='utf-8') as f:
    html = f.read()

print("=== Search leadsModalIdx ===")
for m in re.finditer(r'[^\n]*leadsModalIdx[^\n]*', html):
    print(m.group(0))

print("\n=== Search callBack ===")
for m in re.finditer(r'[^\n]*callBack[^\n]*', html):
    print(m.group(0))

print("\n=== Search incoming rows markup/actions ===")
for m in re.finditer(r'[^\n]*renderPlanIncoming[^\n]*', html):
    print(m.group(0))

pos = html.find('function renderPlanIncoming')
if pos != -1:
    print(html[pos:pos+1500])
