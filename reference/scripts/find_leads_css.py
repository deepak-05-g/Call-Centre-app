import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('OnGround_CallCentre_App_Mock (1).html', 'r', encoding='utf-8') as f:
    content = f.read()

import re
matches = [m.start() for m in re.finditer(r'icp-fold|problem-crit|precall-note|pid-timeline|leadsOverlay', content)]
print('Matches found:', len(matches))
for i, pos in enumerate(matches[:5]):
    print(f"--- MATCH {i} around index {pos} ---")
    start = max(0, pos - 50)
    end = min(len(content), pos + 500)
    print(content[start:end])
    print("\n" + "="*50 + "\n")
