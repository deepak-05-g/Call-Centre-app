import re

with open('reference/reference_mock.html', 'r', encoding='utf-8') as f:
    html = f.read()

classes = [
    'plan-row', 'plan-row-head', 'plan-row-detail', 'plan-tab-row', 'plan-tab-btn'
]

with open('plan_css_extracted.txt', 'w', encoding='utf-8') as out:
    for cls in classes:
        for m in re.finditer(r'\.' + cls + r'[^\{]*\{[^}]+\}', html):
            out.write(m.group(0) + '\n\n')

print("Extracted plan css to plan_css_extracted.txt")
