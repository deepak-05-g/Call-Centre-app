import re

with open('reference/reference_mock.html', 'r', encoding='utf-8') as f:
    html = f.read()

classes = [
    'cc-hero', 'cc-greeting', 'cc-name', 'cc-sub', 'cc-status-pill', 'cc-live-dot', 'date-filter',
    'cc-kpi-row', 'cc-kpi', 'cc-kpi-val', 'cc-kpi-lbl', 'cc-kpi-trend',
    'prog-banner', 'prog-eyebrow', 'prog-grid', 'prog-metric', 'prog-val', 'prog-delta', 'prog-lbl',
    'dash-chart-card', 'dash-bar-row', 'dash-bar-col', 'dash-bar', 'dash-bar-val', 'dash-bar-day', 'dash-bar-today', 'dash-bar-blue'
]

with open('dash_css_extracted.txt', 'w', encoding='utf-8') as out:
    for cls in classes:
        m = re.search(r'\.' + cls + r'\s*\{[^}]+\}', html)
        if m:
            out.write(m.group(0) + '\n\n')

print("Extracted dashboard classes to dash_css_extracted.txt")
