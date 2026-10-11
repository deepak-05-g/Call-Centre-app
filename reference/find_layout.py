import sys
import re

sys.stdout.reconfigure(encoding='utf-8')

with open('reference_mock.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Let's inspect the topbar container
topbar_idx = html.find('class="topbar"')
if topbar_idx != -1:
    print("=== TOPBAR MARKUP ===")
    print(html[topbar_idx-20:topbar_idx+2000])

# Let's inspect the entire sidebar container
sidebar_nav = html.find('class="ios-nav-item')
if sidebar_nav != -1:
    parent_div = html.rfind('<div', 0, sidebar_nav)
    # let's find outer container
    outer_div = html.rfind('<div', 0, parent_div)
    print("\n=== SIDEBAR CONTAINER ===")
    print(html[outer_div:outer_div+2500])
