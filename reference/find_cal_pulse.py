import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('calendar_snippet.html', 'r', encoding='utf-8') as f:
    cal = f.read()

print("=== CALENDAR SNIPPET ===")
print(cal[:3000])

with open('pulse_snippet.html', 'r', encoding='utf-8') as f:
    pulse = f.read()

print("\n=== PULSE SNIPPET (First 3000 chars) ===")
print(pulse[:3000])
