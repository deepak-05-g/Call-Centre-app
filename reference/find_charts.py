import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('dash_snippet.html', 'r', encoding='utf-8') as f:
    dash = f.read()

pos = dash.find('Calls handled · last 7 days')
print(dash[pos:pos+3000])
