import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('dash_snippet.html', 'r', encoding='utf-8') as f:
    dash = f.read()

# Let's inspect from character 3000 to 10000
print("=== DASHBOARD CHUNK 3000 to 8000 ===")
print(dash[3000:8000])
