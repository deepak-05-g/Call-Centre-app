import sys
import re

sys.stdout.reconfigure(encoding='utf-8')

with open('dash_snippet.html', 'r', encoding='utf-8') as f:
    dash = f.read()

# Let's find headings, cards, and major components inside dashboard
headings = re.findall(r'<div[^>]*class="[^"]*(?:title|heading|header|card|kpi|stat|earn|wait|queue|task|chart)[^"]*"[^>]*>[\s\S]*?</div>', dash)
print(f"Found {len(headings)} elements matching keywords in dashboard")

# Let's inspect the first 4000 characters of dash
print("\n=== DASHBOARD HEADER & HERO ===")
print(dash[:3500])

# Let's look for sections inside dash
sections = re.findall(r'<!--\s*([A-Z0-9\s—–\(\)]+)\s*-->', dash)
print("\n=== HTML COMMENTS / SECTIONS IN DASHBOARD ===")
for s in sections[:25]:
    print(" -", s.strip())
