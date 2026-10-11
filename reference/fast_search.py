with open('reference_mock.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

print(f"Total lines: {len(lines)}")

# Search for incoming calls rendering
print("\n--- INCOMING CALLS LINES ---")
for idx, l in enumerate(lines):
    if 'renderPlanIncoming' in l:
        for j in range(idx, min(len(lines), idx + 60)):
            print(f"L{j+1}: {lines[j]}", end='')
        break

print("\n--- LEADS PAGING CONTROLS ---")
for idx, l in enumerate(lines):
    if 'leadsPrevBtn' in l or 'leadsNextBtn' in l:
        for j in range(max(0, idx - 10), min(len(lines), idx + 20)):
            print(f"L{j+1}: {lines[j]}", end='')
        break
