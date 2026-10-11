with open('reference_mock.html', 'r', encoding='utf-8') as f:
    html = f.read()

pos = html.find('new HCPin')
if pos == -1:
    pos = html.find('HCPin(')

print(html[pos:pos+1500])
