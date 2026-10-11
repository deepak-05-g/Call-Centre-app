import re

with open('reference/reference_mock.html', 'r', encoding='utf-8') as f:
    html = f.read()

classes = [
    'avani-hero-card', 'avani-hero-shine', 'kudos-hero-card', 'kudos-hero-shine',
    'slack-ch-row', 'slack-ch-name', 'slack-ch-meta', 'slack-ch-badge', 'slack-ch-hash',
    'pchat-msg', 'pchat-bubble', 'pchat-input', 'pchat-send-btn'
]

with open('pulse_css_extracted.txt', 'w', encoding='utf-8') as out:
    for cls in classes:
        for m in re.finditer(r'\.' + cls + r'[^\{]*\{[^}]+\}', html):
            out.write(m.group(0) + '\n\n')

print("Extracted pulse css to pulse_css_extracted.txt")
