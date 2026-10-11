with open('reference_mock.html', 'r', encoding='utf-8') as f:
    html = f.read()

pos = html.find('askObj')
print(html[max(0, pos-200):min(len(html), pos+1500)])
