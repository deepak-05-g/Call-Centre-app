import re

with open('reference/reference_mock.html', 'r', encoding='utf-8') as f:
    html = f.read()

classes = [
    'leadsOverlay', 'leads-modal', 'toggle-sw', 'icp-fold-head', 'icp-fold-body',
    'pid-timeline', 'pid-tl-item', 'pid-tl-dot', 'pid-tl-date', 'pid-tl-text',
    'problem-crit-row', 'problem-crit-name', 'problem-crit-snippet', 'precall-notes',
    'lead-action-row', 'og-call-btn'
]

with open('leads_css_extracted.txt', 'w', encoding='utf-8') as out:
    for cls in classes:
        for m in re.finditer(r'(?:\.|#)' + cls + r'[^\{]*\{[^}]+\}', html):
            out.write(m.group(0) + '\n\n')

print("Extracted leads modal css to leads_css_extracted.txt")
