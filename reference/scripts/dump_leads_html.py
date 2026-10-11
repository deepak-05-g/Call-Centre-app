import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('OnGround_CallCentre_App_Mock (1).html', 'r', encoding='utf-8') as f:
    content = f.read()

pos = content.find("document.getElementById('leadsModalPage').innerHTML =")
if pos != -1:
    print(content[pos:pos+4000])
