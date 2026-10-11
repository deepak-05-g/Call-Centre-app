import re

with open('reference_mock.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Find any tag with id="asc-..."
matches = re.findall(r'<([a-zA-Z0-9]+)[^>]*id=["\'](asc-[^"\']+)["\'][^>]*>', html)
print("Tags with asc- ids:")
for tag, ident in matches:
    print(f"  <{tag} id='{ident}'>")

# Search for aSwitch or screen navigation function
switch_fn = re.search(r'function\s+aSwitch\s*\([^\)]*\)\s*\{[\s\S]*?\}', html)
if switch_fn:
    print("\n--- aSwitch function ---")
    print(switch_fn.group(0)[:1000])

# Search for sidebar HTML
sidebar_idx = html.find('ios-sidebar')
if sidebar_idx != -1:
    print("\n--- Sidebar HTML snippet ---")
    print(html[sidebar_idx-50:sidebar_idx+1500])
else:
    # search class="sidebar"
    sidebar_idx2 = html.find('class="')
    print("Could not find ios-sidebar directly, searching sidebar...")
    m = re.search(r'<[^>]+class="[^"]*sidebar[^"]*"[^>]*>', html, re.IGNORECASE)
    if m:
        print("Found sidebar element:", m.group(0))
        idx = html.find(m.group(0))
        print(html[idx:idx+1500])
