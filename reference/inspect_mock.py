import re

with open('reference_mock.html', 'r', encoding='utf-8') as f:
    content = f.read()

print('Length of file (chars):', len(content))
lines = content.splitlines()
print('Total lines:', len(lines))

title_m = re.search(r'<title>(.*?)</title>', content)
if title_m:
    print('Title:', title_m.group(1))

# Find fonts
print('\n--- Font links ---')
for m in re.finditer(r'<link[^>]+>', content):
    if 'font' in m.group(0).lower():
        print(m.group(0))

# Find main containers / screens / views
print('\n--- IDs matching screen/view/modal/tab/panel/nav ---')
ids = re.findall(r'id=["\']([^"\']+)["\']', content)
for i in ids:
    if any(k in i.lower() for k in ['screen', 'view', 'modal', 'tab', 'panel', 'nav', 'page', 'dash', 'plan', 'pulse', 'lead', 'cal']):
        print('  ID:', i)

# Find CSS root variables
print('\n--- CSS Variables (:root) ---')
root_m = re.search(r':root\s*\{(.*?)\}', content, re.DOTALL)
if root_m:
    print(root_m.group(1)[:1200])

# Find JavaScript functions or screen switching logic
print('\n--- JS functions / events ---')
funcs = re.findall(r'function\s+([a-zA-Z0-9_]+)\s*\(', content)
print('Functions found:', len(funcs), funcs[:30])

# Search for navigation items
print('\n--- Nav / sidebar links or items ---')
for line_idx, line in enumerate(lines):
    if any(k in line.lower() for k in ['sidebar', 'nav-item', 'menu-item', 'data-view', 'data-tab', 'switchview', 'showscreen']):
        print(f"L{line_idx+1}: {line.strip()[:100]}")
