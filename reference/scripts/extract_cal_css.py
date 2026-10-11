import re

with open('reference/reference_mock.html', 'r', encoding='utf-8') as f:
    html = f.read()

classes = [
    'cal-card', 'cal-month-weekdays', 'cal-month-grid', 'cal-day', 'cal-day-num', 'cal-dot', 'cal-invite'
]

with open('cal_css_extracted.txt', 'w', encoding='utf-8') as out:
    for cls in classes:
        for m in re.finditer(r'\.' + cls + r'[^\{]*\{[^}]+\}', html):
            out.write(m.group(0) + '\n\n')

print("Extracted calendar css to cal_css_extracted.txt")
