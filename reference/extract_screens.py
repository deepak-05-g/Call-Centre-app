import sys
import re
import json

sys.stdout.reconfigure(encoding='utf-8')

with open('reference_mock.html', 'r', encoding='utf-8') as f:
    html = f.read()

def analyze_section(sec_id):
    pos = html.find(f'id="{sec_id}"')
    if pos == -1:
        print(f"Not found: {sec_id}")
        return ""
    # find next asc- or major end
    next_pos = len(html)
    for other in ['asc-calls', 'asc-avani', 'asc-calendar', 'asc-pulse', 'asc-dash']:
        p = html.find(f'id="{other}"')
        if p > pos and p < next_pos:
            next_pos = p
    chunk = html[pos:next_pos]
    return chunk

print("=== DASHBOARD CHUNK ===")
dash = analyze_section('asc-dash')
print(f"Length of dash: {len(dash)}")
with open('dash_snippet.html', 'w', encoding='utf-8') as f:
    f.write(dash)

print("=== CALLS CHUNK ===")
calls = analyze_section('asc-calls')
print(f"Length of calls: {len(calls)}")
with open('calls_snippet.html', 'w', encoding='utf-8') as f:
    f.write(calls)

print("=== CALENDAR CHUNK ===")
cal = analyze_section('asc-calendar')
print(f"Length of cal: {len(cal)}")
with open('calendar_snippet.html', 'w', encoding='utf-8') as f:
    f.write(cal)

print("=== PULSE CHUNK ===")
pulse = analyze_section('asc-pulse')
print(f"Length of pulse: {len(pulse)}")
with open('pulse_snippet.html', 'w', encoding='utf-8') as f:
    f.write(pulse)

# Leads Modal
pos = html.find('id="leadsOverlay"')
if pos != -1:
    leads_modal = html[pos:pos+40000]
    with open('leads_modal_snippet.html', 'w', encoding='utf-8') as f:
        f.write(leads_modal)
    print(f"Leads modal length: {len(leads_modal)}")

print("Extracted snippets to files.")
