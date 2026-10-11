import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('pulse_snippet.html', 'r', encoding='utf-8') as f:
    pulse = f.read()

print("=== PULSE CHUNK 3000 to 12000 ===")
print(pulse[3000:10000])
