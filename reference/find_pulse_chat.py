import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('pulse_snippet.html', 'r', encoding='utf-8') as f:
    pulse = f.read()

pos = pulse.find('pulseChatOverlay')
if pos != -1:
    print("=== PULSE CHAT OVERLAY ===")
    print(pulse[pos:pos+4500])
else:
    print("pulseChatOverlay not found")
