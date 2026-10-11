import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('OnGround_CallCentre_App_Mock (1).html', 'r', encoding='utf-8') as f:
    content = f.read()

import re
matches = [m.start() for m in re.finditer(r'practice|practise|demo-strip|demoStrip|quick-demo|floating-dial', content, re.IGNORECASE)]
print('Matches found:', len(matches))
for i, pos in enumerate(matches[:10]):
    print(f"--- MATCH {i} around index {pos} ---")
    start = max(0, pos - 100)
    end = min(len(content), pos + 800)
    print(content[start:end])
    print("\n" + "="*50 + "\n")
