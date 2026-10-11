with open('reference_mock.html', 'r', encoding='utf-8') as f:
    html = f.read()

pos = html.find('id="hc-staff"')
if pos != -1:
    print(html[pos:pos+4000])
