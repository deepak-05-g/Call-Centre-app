with open('reference_mock.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

with open('plan_and_leads_code.txt', 'w', encoding='utf-8') as out:
    out.write("=== LINES 3240 to 3450 (Plan: Incoming, Outgoing, Recent) ===\n")
    for i in range(3240, min(len(lines), 3460)):
        out.write(f"L{i+1}: {lines[i]}")
    
    out.write("\n\n=== LEADS MODAL CODE (Search for leadsModalIdx) ===\n")
    for i, l in enumerate(lines):
        if 'leadsModalIdx' in l or 'renderLeadsModalPage' in l or 'leadsPrevBtn' in l:
            for j in range(max(0, i-5), min(len(lines), i+60)):
                out.write(f"L{j+1}: {lines[j]}")
            break

print("Wrote to plan_and_leads_code.txt")
