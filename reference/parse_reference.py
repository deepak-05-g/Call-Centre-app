import re
import json

with open('reference_mock.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Let's inspect CSS styles, colors, layout
css_match = re.findall(r'<style>(.*?)</style>', html, re.DOTALL)
css_combined = "\n".join(css_match)

# Extract major screen sections
sections = re.findall(r'<div\s+id="(asc-[^"]+)"[^>]*>', html)
print("Main screens (asc-*):", sections)

# Let's see the sub-screens or views under each asc-*
for sec in sections:
    print(f"\n--- Section: {sec} ---")
    # find where this div starts and ends approximately or its immediate children
    pos = html.find(f'id="{sec}"')
    chunk = html[pos:pos+1500]
    print(chunk[:400].replace('\n', ' '))

# Check all modals or overlays
overlays = re.findall(r'id="([^"]*(?:Overlay|Modal)[^"]*)"', html, re.IGNORECASE)
print("\nOverlays / Modals:", overlays)

# Let's look for data structures in JS: leads, incoming calls, recent calls, tasks, agents, channels, kudos, calendar events
script_match = re.findall(r'<script>(.*?)</script>', html, re.DOTALL)
print(f"\nFound {len(script_match)} script blocks.")

# Save full analysis to a file
with open('mock_analysis.txt', 'w', encoding='utf-8') as out:
    out.write(f"Main Screens: {sections}\n")
    out.write(f"Overlays: {overlays}\n\n")
    
    # search for key arrays/objects in scripts
    for i, s in enumerate(script_match):
        out.write(f"=== SCRIPT BLOCK {i} (len {len(s)}) ===\n")
        # search for const/let/var declarations
        vars_found = re.findall(r'(?:const|let|var)\s+([a-zA-Z0-9_]+)\s*=\s*([\[\{][\s\S]*?[\]\}]);', s)
        for vname, vval in vars_found[:15]:
            out.write(f"VARIABLE: {vname} = {vval[:150]}...\n")
        
        # search for functions
        fn_names = re.findall(r'function\s+([a-zA-Z0-9_]+)\s*\(', s)
        out.write(f"FUNCTIONS: {fn_names}\n\n")

print("Analysis written to mock_analysis.txt")
