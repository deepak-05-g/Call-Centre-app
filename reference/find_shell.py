import re

with open('reference_mock.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Let's find all buttons with onclick="aSwitch(...)"
buttons = re.findall(r'<button[^>]*onclick="aSwitch\([^)]+\)"[^>]*>[\s\S]*?</button>', html)
print(f"Found {len(buttons)} aSwitch buttons:")
for b in buttons:
    print("--- BUTTON ---")
    print(b)

# Let's find the topbar / header
print("\n--- Header / Topbar ---")
header_m = re.search(r'<header[\s\S]*?</header>', html)
if header_m:
    print(header_m.group(0)[:1500])
else:
    # search top bar elements
    m = re.search(r'<div[^>]*class="[^"]*(?:topbar|header|top-bar)[^"]*"[\s\S]*?</div>', html, re.IGNORECASE)
    if m:
        print(m.group(0)[:1500])
    else:
        # let's search for "On-Ground.ai" text in the markup
        og_occurrences = [m.start() for m in re.finditer(r'On-Ground\.ai', html)]
        print(f"Found {len(og_occurrences)} occurrences of On-Ground.ai")
        for idx in og_occurrences[:5]:
            print(f"At {idx}:", html[max(0, idx-100):min(len(html), idx+300)])
